#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = (command) => {
	try {
		execSync(`${command}`, { stdio: 'inherit' });
	} catch (error) {
		console.error(`Failed to execute ${command}. Error: ${error}`);
		return false;
	}

	return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/pipelineSoftwareTeam/react-ts-mern-template.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository: ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(
	'Oh yes 😏. The project if ready for you, punch the following commands into your terminal...'
);
console.log(`cd ${repoName} && npm run setup`);
console.log('npm run dev');
