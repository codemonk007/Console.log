function foo() {
    let a = b = 0;
    console.log(a);
    console.log(b);
     a++;
    return a;
  }
  console.log(foo());
  //concept accidental global variables