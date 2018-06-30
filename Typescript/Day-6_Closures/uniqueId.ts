'use strict';

let uniqueID = 100;

function getId() {
    return uniqueID++;
}

export { getId };