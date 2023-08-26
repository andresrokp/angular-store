const number:number | string = '8';

let number2:number = 4;
let number3:number = 5;

function sum(num1:number,num2:number):number {
    return num1+num2;
}

function sum2(num1:number,num2:number):string {
    return ''+num1+num2;
}

sum(2,sum(2,3))

// sum(2,sum2(2,3)) // shows error

sum(2,parseInt(sum2(2,3)))



class Persona{
    name:string;
    private age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

const andres = new Persona('juan', 22);
let nombreAndres = andres.name;
// let edadAndres = andres.age;  // shows error

class Persona2{
    
    constructor(public name:string, private age:number){}

}




