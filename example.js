"use strict";
// new를 통해 class를 통해 object를 만들 수 있다.
// constructor를 이용해 object를 생성하면서 값을 전달할 수 있다.
// js로 컴파일되면 es5의 경우는 function으로 변경된다.
// private로 선언하면 아래에서 출력 불가
// class Person {
//     public name: string = "Mark";
//     public age!: number;
//     public constructor(age?: number){
//       if(age === undefined){
//         this.age = 20;
//       }else{
//         this.age = age;
//       }
//     }
// }
// const p1: Person = new Person(39);
// console.log(p1);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const p1 = new Person("Mark", 39);
console.log(p1);
