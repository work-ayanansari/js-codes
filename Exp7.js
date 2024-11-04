//Object and array manipulation

let objectArray = [];

function addObject() {
    let fieldName = document.getElementById('fieldName').value;
    let fieldValue = document.getElementById('fieldValue').value;
    let obj = {};

    obj[fieldName] = fieldValue;
    objectArray.push(obj);
    displayArray();
    checkIfArray();
}

function displayArray() {
    let display = document.getElementById('arrayDisplay');
    display.innerHTML = JSON.stringify(objectArray, null, 2);
}

function checkIfArray() {
    let result = document.getElementById('arrayCheckResult');
    result.innerHTML = `Is objectArray an array? ${isArray}`;
}