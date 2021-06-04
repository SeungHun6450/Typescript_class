"use strict";
class Person2 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        // readonly를 사용하면 값을 바꿀 수 없다.
        this.name = "Mark";
    }
}
const p2 = new Person2("SSS", 39);
// console.log(p2.name); // get을 하는 함수 getter
// p2.name = "SeungHun"; // set을 하는 함수  setter
// console.log(p2.name); // get을 하는 함수 getter
console.log(p2.name);
