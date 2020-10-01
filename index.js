const inquirer = require("inquirer");
const fs = require("fs");
const {questions} = require("./modules/questions.js")
const {generateReadMe} = require("./modules/template.js")



getUserSpecs = () => {
    inquirer.prompt(questions).then(results => {

        console.log(results)
        const markdownContents = generateReadMe(results)
        fs.writeFile("README.md", markdownContents.join('\n'), err => err ? console.log(err) : console.log("Created ./README.md"))
    })
}




getUserSpecs()
