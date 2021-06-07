abstract class AbstractPerson {
  protected _name: string = "Mark";

  // abstract를 사용했을 경우 구현하지 않는다, 기능이 완전하지않아 구현 불가
  abstract setName(name: string): void;
}

// new AbstractPeston();

class PersonA extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const p = new PersonA();
p.setName();