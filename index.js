const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/generateHtmlPage');




inquirer
  .prompt({
    type: 'list',
    name: 'employeeType',
    message: "Which type of employee would you like to add to the team?",
    choices: ['Engineer', 'Intern', 'Manager', 'none']
  })
  .then((answers) => {
   if (answers.employeeType === 'Engineer')
   {
    inquirer.prompt (
        {
        type: 'number',
        message: 'Please enter Engineer id.',
        name: 'id',
        },

        {
            type: 'input',
            message: 'Please enter Engineer name.',
            name: 'name',
            },

            {
                type: 'input',
                message: 'Please enter Engineer email.',
                name: 'email',
                },

                {
                    type: 'input',
                    message: 'Please enter Engineer GitHub.',
                    name: 'GitHub',
                    },
        
    )
   }
   
  })

 
  




