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


    enum Color {Red, Green, Blue};
    let c: Color = Color.Green;
    console.log(c);

    let colorName: string = Color[2];
    //alert(colorName);

    //Object
    let notSure: Object = 4;
    notSure = "maybe a string instead";
    console.log(notSure);
    notSure = false;
    console.log(notSure);

    //any
    //let notSure: any = 4;
    //notSure = "maybe a string instead";
    //console.log(notSure);
    //notSure = false;

    //notSure.ifIExists();
    //notSure.toFixed();

    let listany: any[] = [1, true, "free"];
    console.log(listany);


    //null / void
    function warnUser(): void {
        alert("This is my warning message");
    }

    let unusable: void = undefined;

    //Null / Undefined
    let number1: number = null;
    //let number1: number = undefined;
    console.log(number1);

    //类型断言
    let someValue: any = "this is a string";
    //let strLength: number = (<string>someValue).length;
    let strLength: number = (someValue as string).length;

    console.log(strLength);





    return "Hello, " + person.firstName + " "
        + person.lastName;
}

//let const var
//var a = 10;
//function f() {
//    var a = 10;
//    console.log("aaa = " + a);
//    return function g() {
//        var b = a + 1;
//        console.log("bbb = " + b);
//        return b;
//    }
//}

function f() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;

    //console.log("aaa = " + a);
    function g() {
        return a;
    }
}

console.log( f());

//for (var i = 0; i < 10; i++) {
//    setTimeout(function() {
//        console.log(i);
//    }, 100 * i);
//}

//重要打印 i
//for(var i = 0; i < 10; i++) {
//    (function(i){
//        setTimeout(function() {
//            console.log(i);
//        }, 100 * i);
//    })(i);
//}

//let 块作用域
function letf(input: boolean) {
    let a = 100;
    if(input) {
        let b = a + 1;
        return b;
    }
    //return b;
}

function foo() {
    return a;
}

foo();
let a;


//let 的优势
//for(let i = 0; i< 10; i++) {
//    setTimeout(function() {
//        console.log(i);
//    }, 100 * i);
//}

//let or const
const con1 = 10;

const kitty = {
    name: "111",
    num: 100
};
console.log(kitty);

kitty.name = "Rory";
kitty.num = 200;
console.log(kitty);


let input = [1,2];
//let [first, second] = input;
//console.log(first);
//console.log(second);

//[first, second] = [second, first];
//
//console.log(first);
//console.log(second);

function fjiegou([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}

//fjiegou([1,2]);

//let [first, ...rest] = [1, 2, 3, 4];
//console.log(first);
//console.log(rest);


var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);