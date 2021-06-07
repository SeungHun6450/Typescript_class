"use strict";
class AbstractPerson {
    constructor() {
        this._name = "Mark";
    }
}
// new AbstractPeston();
class PersonA extends AbstractPerson {
    setName(name) {
        this._name = name;
    }
}
const p = new PersonA();
p.setName();
