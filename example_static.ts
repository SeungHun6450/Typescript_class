class Person3 {
  public static CITY = "Seoul";
  public hello() {
    console.log("안녕하세요", Person3.CITY);
  }
  public change() {
    Person3.CITY = "LA"
  }
}

const p3 = new Person3();
p3.hello();

const p4 = new Person3();
p4.hello();
p3.change();
p4.hello();