/*
    Task 1. Outer function calculate totalPrice, inner function return a GST payable price.

    Steps:
    - Create an outer function that takes the array "priceList" as an argument.
    - In the scope of the outer function, sum all the value in array "priceList" 
    and store the value in variable "totalPrice".
    - Return an inner function that multiply "totalPrice" with GST 7% and store 
    the value in variable "payablePrice".
    - The variable "payablePrice" should be returned in the inner function.
    - Make appropriate calls to the outer and inner function and console log
    the value of "payablePrice".
    
*/
console.log("TASK 1"); 
console.log(); 

const priceList = [10.5, 9.9, 8.9, 4.5]; 

// Add code here
function round2dp(x) {
    return Number.parseFloat(x).toFixed(2); 
}

function calculatePayment() {
    let totalPrice = 0; 
    for (let i = 0; i < priceList.length; i++) {
        totalPrice += priceList[i]; 
    }
    console.log(totalPrice); 
    console.log("The total price before GST is $" + round2dp(totalPrice)); 
    let payablePrice = 0; 
    function GST() {
        payablePrice = totalPrice * 1.07; 
        return payablePrice; 
    }
    GST(); 
    console.log(payablePrice); 
    console.log("The payable price after GST is $" + round2dp(payablePrice)); 
}
calculatePayment(); 

/*
    Task 2. Manipulate the "queue" array.
*/
console.log(); 
console.log("TASK 2"); 
console.log(); 

function createQueue(fn) {
    const queue = [1, 2, 3, 4]; 
    return fn(queue); 
}

// Add code here - define the function that adds "start" and "last" to a given array
function changeArray(queue) {
    queue.unshift("start"); 
    queue.push("last"); 
    return queue; 
}

const result = createQueue(changeArray); // Add code here - pass a reference of a function as an argument

console.log(result); // Expected output: ["start", 1, 2, 3, 4, "last"]; 