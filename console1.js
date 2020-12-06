'use strict';
(function(){
var array = [1,2,3,4,5];
// let t = [{name: 'john'},{name :  'john'}];
let t = [[1],[2],[3],[4]];
console.log(array.indexOf(2)); 
console.log(t.indexOf({name:'john'}));
console.log(t.indexOf([3]));
console.log("abcdefgh".indexOf('e'));
})();

//concept when it is a object or a array it tried to search a new momory location here since it is not avaliable in heap section it gives a -1 .