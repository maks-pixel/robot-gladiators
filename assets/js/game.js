
//You can also log multiple values at once like this 


//Game States
//"WIN" - Player robot has defeated all enemy-robots

//  *Fight all enemy-robots


var playerName = window.prompt("Whats your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "albert", "turbo poop"];
var enemyHealth = 50;
var enemyAttack = 12;

window.alert("Welcome to Robot Gladiators");
var fight = function(enemyName){
  var promptFight = window.prompt("Would you like to fight or skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  //chose FIGHT player attack

  if(promptFight === "fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining." 
      );

      //check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

      //enemy attack
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining."
      );

      //check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }

      //chose SKIP
    } else if (promptFight ==="skip" || promptFight === "SKIP"){
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      //skip confirm
      if (confirmSkip){
        window.alert(playerName + " has decided to skip the fight Goodbye!");
        playerMoney = playerMoney - 2;
      }

      //no confirm
      else{
        fight();
      }
    } else if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
     } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
     }
  };

for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}