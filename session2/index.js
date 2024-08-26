const students = ['Ahad', 'Hassan', 'Faizan', 'Zain', 'Iqra', 'Sumaira', 'Kousar', 'Nida', 'Unzila', 'Asim', 'Saad'];

// document.write(students[0], ' ', students[1], ' ', students[2]);

let arrayLen = students.length

// for (let i = 0; i < arrayLen; i++) {
//     document.write(i, ' = ', students[i], '<br>');
// }

/*
    let start = 0;
while (start < arrayLen) {
    document.write(students[start], '<br>');
    start++;
}
*/

/*let start = 0;

do {
    start++;
    document.write(start, '<br>');
} while (start < 0);
 */


// printAbc();

// function printAbc() {
//     document.write('A , B , C <br>')
// }

// function intro(name) {
//     document.write('Your name is ', name, '<br>')
// }
// intro('Asim')



class intro {
    constructor(name, age) {
        this.myname = name;
        this.myage = age;
    }
}
let Asim = new intro('Asim', 19);
document.write('Hello my name is ', Asim.myname, ' ', Asim.myage, '<br>');


let Faizan = new intro('Faizan', 22)
document.write('Hello my name is ', Faizan.myname, '<br>');