const inquirer = require ('inquirer');

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
            type: 'input',
            name: 'liscense',
            message: 'What liscense do you want to use',          
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
            name: 'questions',
            message: 'Eamil and Github so people can reach out?',          
        },
    ])

    .then(answers => {
        console.log(answers)
    })