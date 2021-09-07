var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;

//You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealthy = 50;
var enemyAttack = 12;

var fight = function(){
    window.alert("Welcome to Robot Gladiators!");

    //subtract playerAttack from enemyHealth and update enemyHealth
    enemyHealth = enemyHealth - playerAttack;
    //log result

    console.log(
        playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining."
    );

    //subtract enemyAttack from playerHealth and update playerHealth

    playerHealth = playerHealth - enemyAttack;
    
    //log result

    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
};

fight();