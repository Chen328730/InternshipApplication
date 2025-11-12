
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define a function to ask for input repeatedly
function ask() {
  rl.question("Please enter a group of numbers separated by spaces:", function(answer) {
    let parts = answer.split(" ");
    let numbers = [];

    for (let i = 0; i < parts.length; i++) {
      let num = Number(parts[i]);
      if (isNaN(num)) {
        console.log("Please enter numbers only.");
        ask();
        return;
      }
      numbers.push(num);
    }

    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }

    console.log("The largest number is:：" + max);

    ask();
  });
}

ask();
