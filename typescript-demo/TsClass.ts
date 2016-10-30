//类

//class Animal {
//    name:string;
//
//    constructor(theName:string) {
//        this.name = theName;
//    }
//
//    move(distanceInMeters:number = 0) {
//        console.log(`${this.name} moved ${distanceInMeters}m.`);
//    }
//}
//
//class Snake extends Animal {
//    constructor(name:string) {
//        super(name);
//    }
//
//    //move(distanceInMeters = 5) {
//    //    console.log("Slithering...");
//    //    super.move(distanceInMeters);
//    //}
//}
//
//class Horse extends Animal {
//    constructor(name:string) {
//        super(name);
//    }
//
//    move(distanceInMeters = 45) {
//        console.log("Galloping...");
//        super.move(distanceInMeters);
//    }
//}
//
//let sam = new Snake("Sammy the Python");
//let tom: Animal = new Horse("Tommy the Palomino");
//
//sam.move();
//tom.move(34);

//理解private
//class Animal {
//    private name: string;
//    constructor(theName: string) { this.name = theName; }
//}
//
//class Rhino extends Animal {
//    constructor() { super("Rhino"); }
//}
//
//class Employee {
//    private name: string;
//    constructor(theName: string) { this.name = theName; }
//}
//
//let animal = new Animal("Goat");
//let rhino = new Rhino();
//let employee = new Employee("Bob");
//
//animal = rhino;
////animal = employee; // Error: Animal and Employee are not compatible


//存取器
//v0.1
//class Employee {
//    fullName: string;
//}
//
//let employee = new Employee();
//employee.fullName = "bob smith";
//if(employee.fullName) {
//    console.log(employee.fullName);
//}

//v0.2
let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob smith";
if (employee.fullName) {
    alert(employee.fullName);
}
