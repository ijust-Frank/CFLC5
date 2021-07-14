
//create variables that we will use in our program
let computerChoices = ["r","p", "s"];
let comp1Wins = 0;
let comp2Wins = 0;
let ties =0;

// for loop to automate process 10 times 
for (let i = 0; i < 10; i++){
let comp1Choice = computerChoices[Math.floor(Math.random()* computerChoices.length)];
let comp2Choice = computerChoices[Math.floor(Math.random()* computerChoices.length)];

console.log(comp1Choice);
console.log(comp2Choice);

// conditions to check computerChoices and determine winner 
if (comp1Choice === "r" && comp2Choice === "s" ||
(comp1Choice === "s" && comp2Choice === "p") || 
(comp1Choice === "p" && comp2Choice === "r")){
    comp1Wins++
    console.log("computer one wins");
}
else if (comp1Choice === comp2Choice) {
    ties++;
    console.log("computer tied each other")
  } else {
    comp2Wins++;
    console.log("Computer two wins this round")
  }
  
}
console.log("Computer 1 wins " + comp1Wins)
console.log("Computer 2 wins " + comp2Wins)
console.log("Ties " + ties)
