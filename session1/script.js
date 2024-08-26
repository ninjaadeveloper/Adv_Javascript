// alert('Hello from External JS');

var a = 10;
a = 20;
var a = 20;
var myname = 'yasir';
var mystatus = true;
var unknown = null;
var dontknow = undefined;

let b = 20;
b = 10;

const PI = 3.14;

// typeof a;
// console.log(typeof dontknow);

let val1 = 20;
let val2 = '20';

// if (val1 === val2) {
//     console.log('both are same');
// }


let username = 'admin';
let password = 1234;
/*
if (username == "admin" && password == 1234) {
    document.write('Login')
} else {
    document.write('Error')
}*/

/*
let myuser = prompt('Enter your username');
let mypass = prompt("Enter your password");

mypass = parseInt(mypass);

if (username === myuser && password === mypass) {
    document.write('Login');
} else {
    document.write('Error');
}
    */



let studentName = prompt('Write your name ');

if (studentName === "Ahad") {
    document.write(studentName, ' is a Good boy.')
} else if (studentName === "Zain") {
    document.write(studentName, ' is a V.Good boy.')

} else if (studentName === "Sarim") {
    document.write(studentName, ' is a best boy.')

} else {
    document.write(studentName, ' is a intelligent boy.')

}