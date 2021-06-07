class Parent {
  constructor(protected _name: string, private _age:number) {}

  public print(): void {
    console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`)
  }

  protected printName(): void {
    console.log(this._name, this._age);
  }
}

// const p = new Parent("Mark", 39);
// p.print();

class Child extends Parent {
  // _name Override
  // public _name = "Mark Jr."

  public gender = 'male';

  // constructor Override
  constructor(age: number) {
    super("Mark Jr2.", age);
    this.printName();
  }
}

// const c = new Child("Son", 5);
const c = new Child(1);
c.print();
c.gender;
// c._name;