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

module.exports = {questions}