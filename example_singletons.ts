class ClassName {
    private static instance: ClassName | null = null;
  public static getInstance(): ClassName {
    // ClassName 으로 부터 만든 object가 있으면 그것을 리턴
    // ClassName 으로 부터 만든 object가 없으면 만들어서 리턴
    if(ClassName.instance === null){
      ClassName.instance = new ClassName();
    }
    return ClassName.instance;
  }
  private constructor() {}
}

const aS = ClassName.getInstance();
const bS = ClassName.getInstance();

console.log(aS === bS);