// Function to generate multiplication table using a for loop 

function generateTable(){
    const num = parseInt(document.getElementById("number").value);
    let result = "";
    if (!isNaN(num) && num > 0){
        for(let i = 1; i <= 10; i++){
            result += `${num} x ${i} = ${num * i}<br>`;
        }
    document.getElementById("tableResult").innerHTML = result;
    } 
    else {
    document.getElementById("tableResult").innerHTML = "Please enter a valid positive number.";
    }
}