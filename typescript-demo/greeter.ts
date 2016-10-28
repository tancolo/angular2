interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName:string;

    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

function greeter(person:Person) {
    let name:string = 'bob';
    name = "smith";
    let age: number = 37;
    let sentence: string = `
        Hello, my name is ${ name }.

        I'll be ${age + 1} years old next month.
    `;

    let list: number[] = [1,2,3];
    let list1: Array<number> = [4,5,6];
    let list2: Array<string> = ["first", "second", "third"];


    let x: [string, number];
    x = ['Hello', 10];

    console.log(x[0].substr(1));
    console.log(x[1]);

    x[3] = 'world';
    console.log(x[3].toString());




    return "Hello, " + person.firstName + " "
        + person.lastName;
}

var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);