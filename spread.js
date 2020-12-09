function pointValues(point){
    const {name:k,age:a} = {...point} 
    console.log(k)
    console.log(a)
}
pointValues({name:"jerry", age:2})
pointValues(undefined)