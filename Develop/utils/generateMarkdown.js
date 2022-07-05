// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.projectTitle}

    ## Description
    ${response.projectDescription}

    ## Table of Contents (Optional)
    ${contents}

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    ${response.installation}
    
    ## Usage
    ${response.instructions}
    
    ## Credits
    ${response.credit}
    
    ## License
    ${response.license}

    ## Badges
    ${response.badges}

    ## Features
    ${response.features}
    
    ## How to Contribute
    ${response.guidelines}

    ## Tests
    ${response.tests}
  `;
}

module.exports = generateMarkdown;
