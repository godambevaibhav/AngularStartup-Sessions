import { getId } from './uniqueId';

function newCelebrityIDCreator(theCelebrities) {
    for (let i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = getId();
    }
    
    return theCelebrities;
}

let actionCelebs = [{ name: "Akshay", id: 0 }, { name: "John", id: 0 }, { name: "Jet Li", id: 0 }];

let createIdForActionCelebs = newCelebrityIDCreator(actionCelebs);

let akshay = createIdForActionCelebs[0];
let john = createIdForActionCelebs[1];
let jetLi = createIdForActionCelebs[2];
console.log(akshay.id); // 100
console.log(john.id); // 101
console.log(jetLi.id); // 102 */