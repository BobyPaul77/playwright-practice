
// Addition
function add(a,b){
    return (a+b)
} // function declaration and definition part
let sum = add(6,8)// function call
console.log(sum)
let r =add("hai" , "test")
console.log(r)
// 2nd type of method to call funtion
let sumofintegers=function (c,d){
    return c+d;
}
console.log(sumofintegers(8,9))
//Subtraction
function difference(i,j){
    return (i-j)
}
let difference1=difference(14,6)
console.log(difference1)
// 2nd type of method to call funtion
let subofintegers1=function (e,f){
    return e-f;
}
console.log(subofintegers1(18,19))

//Anonymous function
let sumOfNumbers=(c,d)=>c+d
console.log(sumOfNumbers(8,7))

let sumOfDifference=(e,f)=>e-f
console.log(sumOfDifference(45,9))

let x=8; y=6; z= x+y;
console.log(z)

const a=8;  y=6; z= a-y;
console.log(z)