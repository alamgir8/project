let myMoney = 100;
myMoney = 50;
myMoney = 0;

let number:number = 100;
const friendName:string = 'Alamgir'; // as const not assign later so it can't declare like this but let or var will
let myName:string;
const hisName:string = 'Hanif';

function add(num1:number, num2:number):number {
    return num1 + num2;
}

console.log(add(10, 20));

function fullName(firstName:string, lastName: string): string {
    return firstName + ' ' + lastName;
    
}











fullName ('Alamgir',' Hossain');
const firstPersonName:string = fullName('Hanif', 'Khan');