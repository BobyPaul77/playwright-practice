//javascript objects
//Object creation line no.1- 9
let person={
    firstname:"Tim",
    lastname:"John",
    age:29,
    fullname:function(){
        console.log(this.firstname+" "+this.lastname)
            }
};
console.log(person.firstname)
console.log(person.lastname)
person.fullname()
console.log(person['lastname'])  //2nd method to print first or lastname

person.gender="male"//Adding new property called gender
console.log(person)

delete person.gender //Remove gender from the object
console.log(person)
console.log(person.fullname) //trying to call the function name not the actual function

for(let key in person){
    console.log(person[key])
}