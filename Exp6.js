//To remove specific element from Array

function removeArrayElement() { 
    const arrayInput = document.getElementById("arrayInput").value;
    const elementToRemove = document.getElementById("elementInput").value;
    let array = arrayInput.split(',').map(item => item.trim());
    const index = array.indexOf(elementToRemove);

    if (index !== -1) {
        array.splice(index, 1);
        document.getElementById("result").innerText = `Array after removal: [${array.join(', ')}]`;
    } 
    else {
        document.getElementById("result").innerText = "Element Not Found!";
    }
}
    
//Check if array contains a specific value

function checkArrayElement() { 
    let array = document.getElementById('arrayElements').value.split(',');
    let element = document.getElementById('checkElement').value;
    let index = array.indexOf(element);
    document.getElementById('result').textContent = index !== -1 ? `Element "${element}" found at index ${index}` : 'Element Not Found!';
}

//To empty array element

function emptyArrayElements() {
    let input = document.getElementById("arrayElements").value;
    let arr = input.split(',').map(item => item.trim());
    arr.length = 0;
    document.getElementById("result").innerText = `Array is now: [${arr}]`;
}