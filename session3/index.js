// console.log('Hello');



//Declare
function intro() {
    console.log('Hello from functions');
};

//Calling   
// intro()



function greetings(myname) {
    console.log('Good Morning', myname);
}


// greetings('Hamdan');
// greetings('Sarim');


function calculate(num1, num2) {
    // console.log(num1 + num2);
    // document.write()
    // window.alert()

    return num1 + num2;
}

// let result = calculate(20, 10)

// console.log(result);


let printName = (username) => {
    // return 'Hello';
    return 'Hello', username;

    // console.log('Hello', username);
    // return username;


};

// let print = printName();
let printNew = printName('Shahbaz');

// console.log(printNew);




function getValues(a, b, showResult) {
    let myresult = a + b;
    showResult(myresult);
}

function printResult(result) {
    console.log(result);
    return result;
}

// getValues(10, 90, printResult)

var count = 1;

function printAptech() {
    console.log('Hello from Aptech', count);
    count++;
    // window.close();

}
// printAptech();

// setTimeout(printAptech, 5000)

function printAlert() {
    alert('5 second hugye')
}

// setTimeout(printAlert, 5000);

let myInterval = setInterval(printAptech, 2000)

function clear() {
    clearInterval(myInterval);
}

setTimeout(clear, 5000)