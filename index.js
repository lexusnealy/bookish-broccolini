// TODO: Include packages needed for this application
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
import inquirer from 'inquirer';


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "list",
        name: "license",
        message: "select your licence",
        choices: ['MIT', 'GNU', 'Apache'],
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of your project",
        default: ""
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project",
        default: "",
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter the instructions for installation.",
        default: "",
    },
    {
        type: "input",
        name: "usage",
        message: "Usage information",
        default: "",
    },
    {
        type: "input",
        name: "guidelines",
        message: "What are the contribution guidelines?",
        default: "",
    },
    {
        type: "input",
        name: "instructions",
        message: "What are the testing instructions?",
        default: "",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email",
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
    }
   
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    const md = generateMarkdown(data);
    console.log(md);
    fs.writeFileSync(fileName, md);
    
}

// TODO: Create a function to initialize app
function init(questions) {
    // console.log(questions);
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile("./dist/README.md", answers);
        })
        .catch((error) => {
            console.log(error)
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}


// Function call to initialize app
init(questions);
