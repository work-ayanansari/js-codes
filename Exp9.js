//Calculator

function appendToOutput(value) { 
    const output = document.getElementById('output'); output.value += value;
    } 

function clearOutput() { 
    document.getElementById('output').value ='';
    }
    
function calculateResult() { 
    const output = document.getElementById('output'); const expression = output.value; 
    if (!isValidExpression(expression)) { 
        alert('Invalid input');
        clearOutput(); 
        return; 
    } 
    try { 
        const result = eval(expression);
        output.value = result; 
    } 
    catch (error) { 
        alert('Error in calculation');
        clearOutput();
    } 
}

function isValidExpression(expression) { 
    const validChars = /^[0-9+\-*/%() ]*$/; 
    return validChars.test(expression);
}