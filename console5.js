function foo() {
    let a = b = 0;
    a++;
    return a;
  }
  console.log(foo());
  //concept accidental global variables