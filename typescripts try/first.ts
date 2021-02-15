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


let multiply = (x : number, y: number) => number;   //typescript for arrow function sample

multiply = (x, y) => x*y;

multiply = (a, b) => a*b;




//typescript for array

let friend : string[] =['hanif', 'alamin'] //for as a sample of Array to call 
const friendAge: number[] = [12, 13, 15, 10];


friend = ['Aminul', 'Alamin', 'Rasel']; //here no need to make with structure because it already declare in upper


//typescript for object

let person : { //for object sample declare
    name: string,
    age:number,
    salary: number,
    isMale: boolean
}


//now use that object as much as i can
person = {
    name: 'Al-Amin',
    age:25,
    salary:17,
    isMale:true
}


interface Player {
    name: string,
    age: number,
    salary: number,
    wifeName: string,
    club: string,
    isPlaying: boolean,
    country?: string //? to write for option , if anyone use this player interface he can whether add or not adding county in his object

}

const salah: Player ={
    name: 'Salah',
    age: 29,
    salary: 2000000,
    wifeName: 'MagiSalah',
    club: 'liverpool',
    isPlaying: true,
    country: 'Egypt'

}
const pogba: Player ={
    name: 'pogba',
    age: 29,
    salary: 2000000,
    wifeName: 'MagiSalah',
    club: 'man-utd',
    isPlaying: true,
    

}

function getBonus(player:Player) {
    return player.salary *.01;
}

getBonus(salah)
