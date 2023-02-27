const Employee = require("./Employee");

class Intern extends Employee{
    constructor (id, name, email, school){
        this.id = id;
        this.name = name;
        this.email = email;
        this.school = school;
    }

    
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern'
    }
}

module.exports = Intern