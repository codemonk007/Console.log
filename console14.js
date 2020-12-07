var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();


// var b = 1;
// function outer(){
//    	var b = 2
//     function inner(){
//         var b;
//         b++;
//         b = 3;
//         console.log(b)
//     }
//     inner();
// }
// outer();