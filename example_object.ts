// class => object
// {makr: 'male', jade: 'male'}
// {chloe: 'female', alex:'male', anna: 'female'}

class Student {
  // [index: string]: string;
  [index: string]: "male"|"female";

  // mark: "male" = "male";
}

const a = new Student();
a.mark = "male";
a.jade = "male";

console.log(a);

const b = new Student();
b.chloe = 'female';
b.alex = 'male';
b.anna = 'female';

console.log(b);