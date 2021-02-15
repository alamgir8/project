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
let multiply = (x, y) => number; //typescript for arrow function sample
multiply = (x, y) => x * y;
multiply = (a, b) => a * b;
//typescript for array
let friend = ['hanif', 'alamin']; //for as a sample of Array to call 
const friendAge = [12, 13, 15, 10];
friend = ['Aminul', 'Alamin', 'Rasel']; //here no need to make with structure because it already declare in upper
//typescript for object
let person;
//now use that object as much as i can
person = {
    name: 'Al-Amin',
    age: 25,
    salary: 17,
    isMale: true
};
const salah = {
    name: 'Salah',
    age: 29,
    salary: 2000000,
    wifeName: 'MagiSalah',
    club: 'liverpool',
    isPlaying: true,
    country: 'Egypt'
};
const pogba = {
    name: 'pogba',
    age: 29,
    salary: 2000000,
    wifeName: 'MagiSalah',
    club: 'man-utd',
    isPlaying: true,
};
function getBonus(player) {
    return player.salary * .01;
}
getBonus(salah);
