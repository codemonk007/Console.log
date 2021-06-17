function check(obj) {
    if (Object.prototype.toString.call(obj) === "[object Array]") {
      return true;
    } else {
      return false;
    }
  }
  //names instanceof Array also works
  //Array.isarray(temp)
  console.log(check(123));
  console.log(check("cat"));
  console.log(check([1, 2, 3, 4]));