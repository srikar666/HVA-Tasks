
const inquirer = require('inquirer');

questions = [
    {
        type: 'input',
        message: "Please enter your name: ",
        name: "Name",
    }
]
answers = [
    {
        type: 'input',
        message: "Please enter your answer: ",
        name: "nothing",
        age: "10",
    }
]
const prompt = inquirer.createPromptModule();

const aswn = async() => {
    const bla = await prompt(questions);
    console.log(bla.Name);
}

//const aswn1 = async() => {
    const bla = await prompt(answers);
    console.log(bla.age);


//aswn1();
aswn();
