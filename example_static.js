"use strict";
class Person3 {
    hello() {
        console.log("안녕하세요", Person3.CITY);
    }
    change() {
        Person3.CITY = "LA";
    }
}
Person3.CITY = "Seoul";
const p3 = new Person3();
p3.hello();
const p4 = new Person3();
p4.hello();
p3.change();
p4.hello();
