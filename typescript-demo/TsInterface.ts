//v0.1
//function printLabel(labelObj: {label: string}){
//    console.log(labelObj.label);
//}
//
//let myObj = {size: 10, size1: 20, label: "size 10 Object"};
//printLabel(myObj);

//v0.2
//interface LabeledValue {
//    label: string;
//
//}
//
//function printLabel(labelObj: LabeledValue) {
//    console.log(labelObj.label);
//}
//
//let myObj = {size: 10, label: "size 10 object"};
//printLabel(myObj);

//可选属性
//interface SquareConfig {
//    color?: string;
//    width?: number;
//}
//
//function createSquare(config: SquareConfig):
//    {color: string, area: number} {
//
//    let newSquare = {color: "white", area: 100};
//    if(config.color) {
//        newSquare.color = config.color;
//    }
//    if(config.width) {
//        newSquare.area = config.width * config.width;
//    }
//    console.log(newSquare);
//    return newSquare;
//}
//
//let mySquare = createSquare({color: "black"});


//只读属性
//interface Point {
//    readonly x: number;
//    readonly y: number;
//}
//
//let p1: Point = <Point>{x: 10, y: 20};
//console.log(p1);
//
//let a: number[] = [1,2,3,4];
//let ro: ReadonlyArray<number> = a;
//a = ro as number[];
//console.log(a);

//函数类型
//interface SearchFunc {
//    (source: string, subString: string): boolean;
//}
//
//let mySearch: SearchFunc;
//mySearch = function(src: string, sub: string):boolean {
//    let result = src.search(sub);
//    if(result == -1) {
//        return false;
//    }else {
//        return true;
//    }
//}
//
//console.log(mySearch("tanhq", "tan"));
//

//可索引的类型 ？？

//类类型
interface ClockInterface {
    tick();
}

interface ClockConstructor {
    new (hour:number, minute:number): ClockInterface;
}

function createClock(ctor:ClockConstructor, hour:number, minute:number):ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h:number, m:number) {
    }

    tick() {
        console.log("beep beep");
    }
}

class AnalogClock implements ClockInterface {

    constructor(h:number, m:number) {
    }

    tick() {
        console.log("tick tick");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

//接口继承类
class Control {
    private state:any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control {
    select() {

    }
}

class TextBox extends Control {
    select() {}
}

class Image extends Control {

}
