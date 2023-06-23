# Coding Dojo Template

This repository provides a template for quickly setting up the environment for solving coding dojos and other types of TypeScript practice exercises. 

## Prerequisites
Before using this template, please ensure that you have the following software installed on your system:

Node.js: Download and install Node.js
npm (Node Package Manager): This is bundled with Node.js installation.

## Getting Started
To set up the coding dojo environment, follow the steps below:

1. Clone this repository to your local machine:

```
bash
Copy code
git clone https://github.com/your-username/your-repository.git
```

2. Navigate to the project directory:

```
bash
Copy code
cd your-repository
```

3. Install the project dependencies:

```
bash
Copy code
npm install
```

## Scripts
The following scripts are available in the package.json file:

* `test`: Runs the test suite using Jest.
* `start`: Executes the compiled JavaScript code located in the dist/src/index.js file.
* `dev`: Starts the application in development mode using nodemon and ts-node, which automatically restarts the server when changes are made to the source code.
* `build`: Cleans the dist directory and builds the TypeScript code.
* `build:tsc`: Compiles the TypeScript code based on the tsconfig.json configuration file.
* `build:clean`: Deletes the dist directory. This script is run automatically before the build to ensure a clean slate.
To execute a script, run the following command:


## Writing Tests
This template is configured to use Jest as the testing framework. To write tests, create a *.test.ts file in the test directory. You can find an example test file, kata.test.ts, in the same directory. Customize it or create new test files according to your needs.


## Contributing
Feel free to contribute to this template by opening issues or submitting pull requests. Your contributions are greatly appreciated.

## License
This project is licensed under the MIT License.
