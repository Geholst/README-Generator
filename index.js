const inquirer = require ('inquirer');
const fs = require('fs');

inquirer.prompt([
        {
                type: 'input',
                name: 'title',
                message: 'What is the Title of your project?',          
        },
        {
                type: 'input',
                name: 'description',
                message: 'What is the description of your project?',          
        },
        {
                type: 'input',
                name: 'installation',
                message: 'What are the steps to install your project?',          
        },
        {
                type: 'input',
                name: 'usage',
                message: 'Any instructions or examples for usage?',          
        },
        {
            type: 'checkbox',
            name: 'liscense',
            message: 'What license do you want to use',  
            choices: ['MIT',]        
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List any collaborators with links to their Github profile.',          
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'How can people contribute?',          
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are some test you can run?',          
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Link your Eamil so people can reach out!',          
        },
        {
            type: 'input',
            name: 'github',
            message: 'Link your Github so people can reach out!',          
        },
    ])

    .then(answers => {
        let raedme = `
        # ${answers.title}
        ![Badge](https://img.shields.io/static/v1?label=MIT&message=License)

        ## Description
        ${answers.description}

        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Credits](#credits)
        - [Contributors](#contributions)
        - [Test](#test)
        - [Questions](#)

        ## Installation
        ${answers.installation}

        ## Usage 
        ${answers.usage}

        ## License
        ${answers.license}

        ## Credits
        ${answers.credits}

        ## Contributors
        ${answers.contributions}

        ## Test
        ${answers.test}

        ## Questions
        If you have any questions you can reach me at: [${answers.Email}][${answers.github}]

        `
    })