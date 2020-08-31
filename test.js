const core = require('@actions/core');

const myInput = core.getInput('my-input');

console.log(myInput, process.env.INPUT_MY_INPUT
