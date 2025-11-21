// single inheritance
import {Person} from "./Class.js";
class Pet extends Person{
    get location(){
        return "New York"
    }
    constructor(firstname,lastname){
        super(firstname,lastname)
    }
    }
let pet=new Pet("sam","sandy")
pet.fullname();
console.log(pet.location)