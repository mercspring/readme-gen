var inquirer = require("inquirer");
var fs = require("fs");

const questions = [
    {
        type: "input",
        name: "username",
        message: "Please provide your github username."
    },
    {
        type: "input",
        name: "title",
        message: "Please provide the title of your project."
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions for your project."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage instructions for your project."
    },
    {
        type: "input",
        name: "contributions",
        message: "Please provide contribution instructions for your project."
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide test instructions for your project."
    },
    {
        type: "input",
        name: "questions",
        message: "Please provide an email you can be reached at for questions about the project."
    }, 
]

getUserSpecs = () => {
    inquirer.prompt(questions).then(results => {

        console.log(results)
        generateReadMe(results)
    })
}

generateReadMe = (answers) => {
const {username, title, description, installation, usage, contributions, tests, questions} = answers;
const markdownContents = [`# ${title}`,'## Table of Contents', '+ [Description](#description)', '+ [Installation](#installation)', '+ [Usage](#usage)', '+ [License](licsense)',
    '+ [Contributions](#contributions)', '+ [Tests](#tests)', '+ [Questions](#questions)', '## Description', description, '## Installation', installation, '## Usage', usage, '## Lisense', //licsence, 
    '## Contributions', contributions, '## Tests', tests, '## Questions', questions ]
    fs.writeFile("read.md", markdownContents.join('\n'), err =>{
        if(err){
            console.log(err)
        }else{
            console.log("it worked")
        }
    })
}


getUserSpecs()
