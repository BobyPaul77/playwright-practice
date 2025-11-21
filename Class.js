//Defining a class
class Person{
    age = 25 //Property of class
    get location(){//getter method
        return "canada"
    }
    //constructor
    constructor(firstname,lastname){
        this.firstname=firstname
        this.lastname=lastname
    }
    fullname(){
        console.log(this.firstname+" "+this.lastname)
    }
}
//let Person1 = new Person("Andriya","Alfred")
//Person1.fullname()
//console.log(Person1.age)
export { Person };