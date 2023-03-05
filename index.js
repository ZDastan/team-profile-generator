const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/generateHtmlPage.js');
const path = require('path');


const team = [];



function generateTeam () {
        inquirer.prompt([
            {
                type: 'list',
                name: 'employeeType',
                message: "Which type of employee would you like to add to the team?",
                choices: ['Engineer', 'Intern', 'Manager', 'none'] 
            }
        ]).then((choices)=>{
            if (choices.employeeType === 'Engineer'){
             createEngineer()   
            }else if (choices.employeeType === 'Manager'){
                createManager()
            }else if(choices.employeeType === 'Intern'){
                createIntern()
            }else if(choices.employeeType === 'none'){
                function makeTeam(team){
                            //fs.mkdirSync(path.resolve(__dirname, 'dist'))
                            console.log(team)
                    fs.writeFileSync(path.join('dist', generateHTML(team), 'utf-8'))
                        }
              
                // const pageHtml = generateHTML(this.getTeamArray());
                // fs.writeFile('.dist/index.htm', pageHtml, err =>{
                //     if(err) throw new Error(err);

                //     console.log('Page created!');
                // })
            }
            // {
            //     makeTeam(team)
            // }

        })
    }
//     function makeTeam(team){
//         //fs.mkdirSync(path.resolve(__dirname, 'dist'))
//         console.log(team)
// fs.writeFileSync(path.join('dist', generateHTML(team), 'utf-8'))
//     }
// 
    function createEngineer(){
        inquirer.prompt (
            [
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
                        message: 'Please enter Engineer gitHub.',
                        name: 'gitHub',
                        },
                    ]   
        ).then((engineer)=>{
            const eng = new Engineer(engineer.id, engineer.name, engineer.email, engineer.officeNumber)
            team.push(eng)
            generateTeam()
        })
       }
       
//     }
    
   function createManager(){
    inquirer.prompt (
        [
        {
        type: 'number',
        message: 'Please enter Manager id.',
        name: 'id',
        },

        {
            type: 'input',
            message: 'Please enter Manager name.',
            name: 'name',
            },

            {
                type: 'input',
                message: 'Please enter Manager email.',
                name: 'email',
                },

                {
                    type: 'number',
                    message: 'Please enter Manager OfficeNumber.',
                    name: 'OfficeNumber',
                    },
                ]   
    ).then((manager)=>{
        const mng = new Manager(manager.id, manager.name, manager.email, manager.officeNumber)
        team.push(mng)
        generateTeam()
    })
   }




   function createIntern(){
    inquirer.prompt (
        [
        {
        type: 'number',
        message: 'Please enter Intern id.',
        name: 'id',
        },

        {
            type: 'input',
            message: 'Please enter Intern name.',
            name: 'name',
            },

            {
                type: 'input',
                message: 'Please enter Intern email.',
                name: 'email',
                },

                {
                    type: 'input',
                    message: 'Please enter Intern school.',
                    name: 'school',
                    },
                ]   
    ).then((intern)=>{
        const int = new Intern(intern.id, intern.name, intern.email, intern.officeNumber)
        team.push(int)
        generateTeam()
    })
   }

generateTeam()





