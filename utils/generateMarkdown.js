// TODO: Create a function that returns a license badge based on which license is passed in

import fs from 'fs';

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]${renderLicenseLink(license)})`;
  }
  if (license === "GNU") {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]${renderLicenseLink(license)})`;
  }
  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]${renderLicenseLink(license)})`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT](https://opensource.org/licenses/MIT)`;
  }
  if (license === "GNU") {
    return `[GNU](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  }
  if (license === "Apache") {
    return `[Apache](https://opensource.org/licenses/Apache-2.0)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let path = "";
    if (license === "MIT") {
    path = './utils/mit.md';
    }
    if (license === "GNU") {
        path = './utils/gnu.md';
        }
        if (license === "Apache") {
            path = './utils/apache.md';
            }
    const text = fs.readFileSync(path, 'utf-8');
    return text;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseText = renderLicenseSection(data.license);
  fs.writeFileSync("LICENSE", licenseText);

  return `# ${data.title};


${licenseBadge}

## Table of Contents
- [License](#license)
- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [How to Reach Me](#how-to-reach-me)

## License
${renderLicenseLink(data.license)}

## Desciption
${data.description}

## Installation Instructions
${data.installation}

## Usage Information
${data.usage}

## Contribution Guidelines
${data.guidelines}

## Test Instructions
${data.instructions}

## How to Reach Me
For any questions, please reach me at ${data.email}. You can also find me on GitHub at https://github.com/${data.github} 

  `;
}

export default generateMarkdown;
