'use strict';
function Person(name, age){
    console.log(this.name);
this.name = name || 'John';
this.age = age || 24;
this.displayName = function(){
console.log(this.name);
}
}
var p1 = new Person('YYY',21);
p1.name ='YYY';
console.log(p1.name);