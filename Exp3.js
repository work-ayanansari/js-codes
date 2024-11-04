//Replace Char in string
function replaceText() {
    const originalString = document.getElementById('originalString').value;
    const matchString = document.getElementById('matchString').value;
    const patternString = document.getElementById('patternString').value;
    const newString = originalString.replace(matchString, patternString);
    document.getElementById('result').innerText = newString;
}

//Reverse a String
function reverseString() {
    const input = document.getElementById('inputString').value;
    const lengthOfString = input.length;
    console.log('Length of the string:', lengthOfString);
    let reversedString = '';
    for (let i = lengthOfString - 1; i >= 0; i--) {
    reversedString += input[i];
    }
    document.getElementById('result').textContent = reversedString;
}

//Check Palindrome
function checkPalindrome() {
    let inputString = document.getElementById("userInput").value;
    let lowerCaseString = inputString.toLowerCase();
    let reversedString = lowerCaseString.split('').reverse().join('');
    if (lowerCaseString.localeCompare(reversedString) === 0) {
    document.getElementById("result").innerHTML = "The string is a palindrome.";
    }
    else {
    document.getElementById("result").innerHTML = "The string is not a palindrome.";
    } 
}
    
    