'use strict';

/* function showName(firstName, lastName) {
    var nameIntro = "Your name is ";
    // this inner function has access to the outer function's variables, including the parameter
    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }

    return makeFullName();
}

var nameValue = showName("Jet", "Li"); // Your name is Jet Li
console.log(nameValue); */

// 1> Closures have access to the outer function’s variable even after the outer function returns

/* function celebrityName(firstName) {
    var nameIntro = "This celebrity is ";
    // this inner function has access to the outer function's variables, including the parameter
    function lastName(theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}

var cebName = celebrityName("Amitabh"); // At this point, the celebrityName outer function has returned.
console.log(cebName);

// The closure (lastName) is called here after the outer function has returned above
// Yet, the closure still has access to the outer function's variables and parameter
cebName("Bachan"); // This celebrity is Michael Jackson */

// 2> Closures store references to the outer function’s variables; they do not store the actual value. 
//Closures get more interesting when the value of the outer function’s variable changes before the closure is called. 

/* function celebrityID() {
    var celebrityID = 999;
    // We are returning an object with some inner functions
    // All the inner functions have access to the outer function's variables
    return {
        getID: function () {
            // This inner function will return the UPDATED celebrityID variable
            // It will return the current value of celebrityID, even after the changeTheID function changes it
            return celebrityID;
        },
        setID: function (theNewID) {
            // This inner function will change the outer function's variable anytime
            celebrityID = theNewID;
        }
    }
}

var celebId = celebrityID (); // At this point, the celebrityID outer function has returned.
console.log(celebId);
console.log(celebId.getID()); // 999
celebId.setID(567); // Changes the outer function's variable
console.log(celebId.getID()); // 567: It returns the updated celebrityId variable */

// 3> Buggy closure

// This example is explained in detail below (just after this code box).
/* function celebrityIDCreator(theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["getId"] = function () {
            return uniqueID + i;
        }
    }

    return theCelebrities;
}

var actionCelebs = [{ name: "Akshay", id: 0 }, { name: "John", id: 0 }, { name: "Jet Li", id: 0 }];

var createIdForActionCelebs = celebrityIDCreator(actionCelebs);

var akshay = createIdForActionCelebs[0];
console.log(akshay.getId()); // 103 */

// 4> Fixing the problem with IIFE

/* function newCelebrityIDCreator(theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function (value_i) { 
            // the value_i parametric variable is the i passed in on invocation of this IIFE
            return function () {
                return uniqueID + value_i;
                // each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value 
                // to the array
            }()
            // BY adding () at the end of this function, we are executing it immediately and returning just the value 
            // of uniqueID + value_i, instead of returning a function.
        }(i);
        // immediately invoke the function passing the i variable as a parameter
    }

    return theCelebrities;
}

var actionCelebs = [{ name: "Akshay", id: 0 }, { name: "John", id: 0 }, { name: "Jet Li", id: 0 }];

var createIdForActionCelebs = newCelebrityIDCreator(actionCelebs);

var akshay = createIdForActionCelebs[0];
var john = createIdForActionCelebs[1];
var jetLi = createIdForActionCelebs[2];
console.log(akshay.id); // 100
console.log(john.id); // 101
console.log(jetLi.id); // 102 */