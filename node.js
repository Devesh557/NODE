#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program
  .version('1.0.0')
  .description('A simple command-line application for adding two numbers');

program
  .command('add <num1> <num2>')
  .description('Add two numbers')
  .action((num1, num2) => {
    const result = parseFloat(num1) + parseFloat(num2);
    console.log(`Result: ${result}`);
  });

program.parse(process.argv);
