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
        name: "email",
        message: "Please provide an email you can be reached at for questions about the project."
    },
    {
        type: "list",
        message: "Please pick a license or select n/a.",
        name: "license",
        choices: ["MIT", "BSD 3-Clause", "Apache 2.0", "GNU GPL v3", "n/a"]

    }
]

getUserSpecs = () => {
    inquirer.prompt(questions).then(results => {

        console.log(results)
        generateReadMe(results)
    })
}

generateReadMe = (answers) => {
    const { username, title, description, installation, usage, contributions, tests, license, email } = answers;
    let licBadge = "";
    let licMessage = "";
    (license != "n/a") ? licMessage = `This project is licensed under the ${license} license.` : licMessage = "";
    
    switch (license) {
        case "Apache 2.0":
            licBadge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            break;
        case "MIT":
            licBadge = " [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            break;
        case "BSD 3-Clause":
            licBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
            break;
        case "GNU GPL v3":
            licBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
            break;
        default:
            licBadge = "";
    }
    const markdownContents = [`# ${title}`, licbadge, '## Table of Contents', '+ [Description](#description)', '+ [Installation](#installation)', '+ [Usage](#usage)', '+ [License](licsense)',
        '+ [Contributions](#contributions)', '+ [Tests](#tests)', '+ [Questions](#questions)', '## Description', description, '## Installation', installation, '## Usage', usage, '## Lisense', 
        licMessage, '## Contributions', contributions, '## Tests', tests, '## Questions', `I can be reached at: <${email}> with questions about the project.`, 
        `My github profile is: [${username}](https://github.com/${username})`]

    fs.writeFile("read.md", markdownContents.join('\n'), err => err ? console.log(err) : console.log("it worked"))
}


getUserSpecs()
