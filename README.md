# Setup Cypress with Node.js & Run the Docker images
This will show you how to run a Cypress testcase with the Cypress GUI and run it with a Docker Container

## Topics
- Setup Cypress with `Node.js` and run my test with Cypress GUI
- Run my tests cases using Docker with 2 scenarios :
    - Build Locally after cloning my repo
    - Running a docker container using my image pulled from [Docker hub](https://hub.docker.com/r/iqbalaprysh/iqbal-govtech-test)

## Getting Started
Operating system supports :
- MacOS 10.9 and above (64-bit only)
- Windows 7 and above
- Linux Ubuntu 12.04 and above, Fedora 21, and Debian.

# > Setup Cypress with `Node.js` and run my test locally
Cypress is a Node-based application, this application requires the Node Modules library, Node.js is a JavaScript runtime environment.
You can download Node.js According to the operating system you have. You can Download Node.js in Official website [here](https://nodejs.org/en/download/)

After `Node.js` clearly installed, then Clone the repo

```
git clone https://github.com/IqbalAprsyh/iqbal-techtest-govtech.git
```
Direct to the project first
```
cd iqbal-techtest-govtech
```
Check version for make sure `Node.js` clearly installed
```
npm --version
```
or simply
```
npm -v
```

Then Install the Cypress using 

```
npm install cypress
```
After finished installing, you can make sure Cypress already installed by using following command, this is to check the cypress version 

```
npx cypress --version
```
## Open the Cypress GUI

Direct to Project first

```
cd iqbal-techtest-govtech
```
or you can directly open my repo in the code editor software that you have

Run this following command 

```
npx cypress open
```
and then the Cypress GUI will open like this,

### - Choose 'E2E Testing'

<img width="890" alt="image (3)" src="https://user-images.githubusercontent.com/125074291/219223669-8a6fc058-c0fe-4c59-ab4d-ac7d13efae33.png">

- Then you can choose your desired browser

<img width="890" alt="image (3)" src="https://user-images.githubusercontent.com/125074291/219224153-5fcfcba2-f4a6-41a0-90b1-181d18a75dd8.png">

### - Choose some of the test cases that you want to run

I made 2 types of test cases, the first for __API testing__ and the second for __Login testing__ on website https://www.saucedemo.com/

<img width="959" alt="image (5)" src="https://user-images.githubusercontent.com/125074291/219224922-7eda2da6-e30c-43f4-a79b-416d502c1121.png">

### - Click on the desired test case then Cypress will run the test

<img width="960" alt="image (6)" src="https://user-images.githubusercontent.com/125074291/219225317-047e4f2e-d546-46ab-ae24-c49c2bc3f159.png">

# > Run my test using Docker Container

## Run Docker Image locally

This will explain how you run my test after clone my repo from github

If you already cloned my repo, you can directly build the Docker image using this command

```
docker build -t cypress-included-v9.2.0
```
or you can use it too

```
docker build -t cypress-included-v12.5.1
```

After finish the build then run it using this command

__PowerShell__

```
docker run -it -v ${PWD}:/e2e -w /e2e cypress/included:12.5.1
```

__CMD__

```
docker run -it -v %cd%:/e2e -w /e2e cypress/included:12.5.1
```
When running the docker image via CMD or PowerShell it is very prone to failure, I suggest you to run it using the [Docker Desktop](https://www.docker.com/products/docker-desktop/) software

## Running a Docker container using my image pulled from [Docker hub](https://hub.docker.com/r/iqbalaprysh/iqbal-govtech-test)

Pull images
```
docker pull iqbalaprysh/iqbal-govtech-test
```
Run in [Docker Desktop](https://www.docker.com/products/docker-desktop/)


__Result__ : 

I highly recommend you to run Docker images using Docker Desktop Software it will make it easier for you

<img width="960" alt="image (7)" src="https://user-images.githubusercontent.com/125074291/219230918-493240a1-cda4-4d8c-8fdf-bcec5193793b.png">

[Watch the video](https://drive.google.com/file/d/1Jzyas_fw0LDzQNqKWLo__t6l7yL4_yBF/view?usp=share_link)
























