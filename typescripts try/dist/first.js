"use strict";
let myMoney = 100;
myMoney = 50;
myMoney = 0;
let number = 100;
const friendName = 'Alamgir'; // as const not assign later so it can't declare like this but let or var will
let myName;
const hisName = 'Hanif';
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20));
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
fullName('Alamgir', ' Hossain');
const firstPersonName = fullName('Hanif', 'Khan');
