# Cypress-Framework
sample framework using Sky UI

# Pre-requisites

Download npm from https://nodejs.org/en/

check if it has been installed using the command node --version

Download visual code(IDE) from https://code.visualstudio.com/

# Installing Cypress

create a directory/folder - in which you save your tests

using terminal in vs code create the package.json

using npm package install cypress

install cypress into the same folder where your tests will be (ex:package.json) 

# How the tests are run 

Using CL - npx cypress open

Headless using CL - npx cypress run

# Report generation

Using mochawesome and mochawesome-merge

Run - npm install --save-dev mocha mochawesome mochawesome-merge mochawesome-report-generator

downgrade mocha version to 5.2.0 (npm install mocha@5.2.0)

Run the test in headless mode - npn cypress run

Results are printed in the terminal and html, json version reports are available in reports folder under the root directory
