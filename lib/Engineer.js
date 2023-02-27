const Employee = require("./Employee");

class Engineer extends Employee{
    constructor (id, name, email, gitHub){
        this.id = id;
        this.name = name;
        this.email = email;
        this.gitHub = gitHub;
    }

    
    getGitHub(){
        return this.gitHub;
    }
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer