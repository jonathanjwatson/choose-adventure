const inquirer = require("inquirer");
const fs = require("fs");
console.log("Welcome to Choose Your Own Adventure!");

// Use inquirier.prompt to get the following from the user:
// First name
// Pick a friend to interact with.
// Choose a country to start from.
inquirer
  .prompt([
    {
      type: "input",
      name: "firstName",
      message: "What is your first name?"
    },
    {
      type: "list",
      message: "Pick a friend to join you on your journey.",
      name: "friendName",
      choices: ["Sam", "Bob", "Alice", "Frodo"]
    },
    {
      type: "list",
      message: "Pick a country to start from.",
      name: "country",
      choices: ["Canada", "Mordor", "Margaritaville", "Neverland"]
    }
  ])
  .then(({ firstName, country, friendName }) => {
    const openingSentence = `One day, as ${firstName} sat around ${country} with ${friendName} he decided they should go on a great and magical adventure.`;
    fs.appendFile("story.txt", openingSentence, err => {
      if (err) {
        return console.log(err);
      }
      console.log("Your story has been written!");
    });
  })
  .catch(err => {
    console.log(err);
  });
