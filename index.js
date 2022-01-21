const inquirer = require('inquirer');
const fs = require('fs');

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Project Title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description?',
    },
    {
      type: 'input',
      name: 'instalationInstrucions',
      message: 'Instalation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Contribution?',
    },
    {
      type: 'input',
      name: 'testInstructions',
      message: 'Test Instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ['1.0', '2.0', '3.0','4.0','5.0'],
      },      
      {
        type: 'input',
        name: 'githubUsername',
        message: 'GitHub Username?',        
      },
      {
        type: 'input',
        name: 'email',
        message: 'Contact email?',        
      },
  ]);
};

const generateReadme = ({ projectTitle, description, instalationInstrucions, usage, contribution, testInstructions,license,githubUsername,email }) =>
  `
# ${projectTitle} 

This project is under the license ${license}

## Table of Contents
- [Description](#description)
- [Instalation Instructions](#instalation-instructions)
- [Usage information](#usage-information)
- [Contributions](#contributions)
- [Test instructions](#test-instructions)
- [Questions](#questions)
- [Video Functionality](#web-functionality)

## Description

${description}

## Instalation Instructions

${instalationInstrucions}

## Usage Information

${usage}

## Contributions

${contribution}

## Test instructions
${testInstructions}

## Questions
- Github user: [${githubUsername}](https://github.com/marcogonzalezguzman77) for questions.
- If you want more information send a email ${email}

## Web functionality

You can watch functionality in the next video [README Generator](https://marcogonzalezguzman77.github.io/weatherDashboard/).

`;

// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README.md', generateReadme(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();