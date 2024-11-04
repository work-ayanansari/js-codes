// Function to calculate the area of a triangle

function calculateTriangleArea() {
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!isNaN(base) && !isNaN(height) && base > 0 && height > 0) 
    { const area = 0.5 * base * height;
    document.getElementById("triangleResult").innerText = `Area of Triangle: ${area}`;
    } 
    else {
    document.getElementById("triangleResult").innerText = "Please enter valid base and height.";
    }
}

// Function to calculate the area of a rectangle

function calculateRectangleArea() {
    const length = parseFloat(document.getElementById("length").value);
    const breadth = parseFloat(document.getElementById("breadth").value);
    if (!isNaN(length) && !isNaN(breadth) && length > 0 && breadth > 0) 
    { const area = length * breadth;
    document.getElementById("rectangleResult").innerText = `Area of Rectangle: ${area}`;
    } 
    else {
    document.getElementById("rectangleResult").innerText = "Please enter valid length and breadth";
    }
}

// Function to calculate the area of a circle

function calculateCircleArea() {
    const radius = parseFloat(document.getElementById("radius").value); 
    if(!isNaN(radius) && radius > 0) 
    { const area = 3.14 * radius * radius;
    document.getElementById("circleResult").innerText = `Area of Circle: ${area}`;
    } 
    else {
    document.getElementById("circleResult").innerText = "Please enter a valid radius.";
    }
}