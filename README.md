# How to Setup Cypress with Node.js & Setup the Dockerfiles
This README will show you how to install Cypress, and how to run Cypress test cases in a Docker container.

#### This README Contains :
- Setup Cypress from scratch
- Run my test in Container with Docker

# Setup Cypress
Cypress was developed to introduce developers to software testing – something that is usually left up to testers and QA professionals. It's built for the modern web and addresses the issues developers and QA teams face when testing apps.



## Getting Started
Operating system supports :
- MacOS 10.9 and above (64-bit only)
- Windows 7 and above
- Linux Ubuntu 12.04 and above, Fedora 21, and Debian.

## Prerequisites for Installing Cypress
Cypress is a Node-based application, this application requires the Node Modules library, Node.js is a JavaScript runtime environment.
You can download Node.js According to the operating system you have. You can Download Node.js in Official website [here](https://nodejs.org/en/download/)

Double check the Node.js installation has been installed by running the command: `node –version` in the terminal. To verify the npm version or other way `npm –version`.

### 1. Using `npm`
You can redirect to your project first,
```
cd /your/project/path
```
Then init,

```
npm init
```
This command will install one of the dependencies of node.js named `package.json`

__*Disclaimer*__ : *If you have cloned my repo of course you don't need to do this step, because actually npm init is for installing dependencies from the Node module, and the dependencies file is already in my repo, However, we'll get to that later. Let's continue setting up Cypress from scratch now*

When finished, run this following command
```
npm install cypress --save-dev
```

### 2. Using `yarn`

For users willing to install Cypress using the Yarn package manager, navigate to the project directory and execute the following command:

```
cd /your/project/path
```
Then install the Cypress, 
```
yarn add cypress --dev
```

### 3. Run your first test
Before that I won't explain in detail how to write test cases in cypress, you can make your first test with an example of the test module prepared by cypress, run it with this command
```
npx cypress open
```
It should be open the Cypress GUI
and you just follow the instructions if it's your first time using it, and create your first `cy.js` file

You can see the Cypress commands in more detail [here](https://docs.cypress.io/guides/guides/command-line)


