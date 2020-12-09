function check(){
    var tempFunc = function () {}
    
    return new tempFunc instanceof Array; 
}
console.log(check())

function check(){
    var tempFunc = function () {}
    tempFunc.prototype = Array.prototype
    return new tempFunc instanceof Array; 
}
console.log(check())