// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'Whats your project name?',
        name:'projectTitle',
    },{
        type:'input',
        message:'Whats your project description?',
        name:'projectDescription',
    },{
        type:'list',
        message:'Whats license are you using?',
        //selection array
        choices:['MIT', 'IBM', 'Mozilla', 'None'],
        name:'license',
    },{
        type:'input',
        message:'Whats your project username?',
        name:'username',
    },{
        type:'input',
        message:'Whats your project email?',
        name:'email',
    },{
        type:'input',
        message:'What libraries did you install in this project?',
        name:'installation',
    },{
        type:'input',
        message:'What instructions do you have for anyone that uses your project (include screenshots)?',
        name:'instructions',
    },{
        type:'input',
        message:'List all contributors.',
        name:'credit',
    },{
        type:'input',
        message:'What features would you like others to know about?',
        name:'features',
    },{
        type:'input',
        message:'What guidelines would you want other future contributors to follow?',
        name:'guidelines',
    },{
        type:'input',
        message:'What tests have you included in your project and how do you perform them?',
        name:'tests',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    console.log('question')
    inquirer.prompt(questions).then(response => {
        console.log(response);
        fs.writeFileSync('README.md', generateMarkdown(response));
    })
}

// Function call to initialize app
init();
