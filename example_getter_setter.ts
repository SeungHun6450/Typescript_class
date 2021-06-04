class Person2 {

  // readonly를 사용하면 값을 바꿀 수 없다.
  public readonly name: string = "Mark";

  public constructor(private _name: string, private age:number){}

  // get name() {
  //   console.log("get");
  //   return this._name;
  // }

  // set name(n: string) {
  //   this._name = n;
  // }

}

const p2: Person2 = new Person2("SSS", 39);
// console.log(p2.name); // get을 하는 함수 getter
// p2.name = "SeungHun"; // set을 하는 함수  setter
// console.log(p2.name); // get을 하는 함수 getter
console.log(p2.name);  