console.log("Connected")
// Task 1 (Logic) plan
// Create two variables to store the moves (player move, computer move)
// Create if statemets to determine the winner
// Create a function using the logice we just created
// The varieables that we just hard coded will now be taken as parameters of the function.
// Use the function Math.random to replace our hard coded computerMove then 
// translate the result into an usable string to finally compare with playerMove
//show a result on alert


// V: I have added counters here which we can make increase later in the 'if' statements
let response = confirm("Do you wanna play a game with me??")
let winCount = 0
let lossCount = 0
let gamesCount = 0
let tieCount = 0
// V: On lines 15 and 69 I have turned this into a do/while loop

do{

// The values from math.random will be respectively paper = 0, scissors = 1 and rock = 2. 
//LEAVE COMMENT WITH LINE


let computerMove = Math.floor(Math.random()*3)

//V: I am adding the code below so that the computer move gets translated from a number to a string. This is because I think we are getting 'undefined' returned because we are using numbers, not string, to compare them. 

if(computerMove === 0){
    computerMove = "paper"
}
if(computerMove === 1){
    computerMove = "scissors"
}
if(computerMove === 2){
    computerMove = "rock"
}

console.log(computerMove)

function getWinner(playerMove = prompt("What's your move?")){
    if(playerMove === computerMove){tieCount++
        return 0;
    }
        if (playerMove === "rock" && computerMove === "paper" ){ lossCount++;
            return -1;
        }      
            if (playerMove === "rock" && computerMove === "scissors"){winCount++;
                return 1;
            }                
                if (playerMove === "scissors" && computerMove === "rock"){lossCount++;
                    return -1;
                }                
                    if (playerMove === "scissors" && computerMove === "paper"){winCount++;
                        return 1;
                    }                        
                        if (playerMove === "paper" && computerMove === "rock"){winCount++;
                            return 1;
                        }
                            if (playerMove === "paper" && computerMove === "scissors"){lossCount++;
                                return -1;
                            } else {
                                console.log("Choose between rock, scissors or paper")
                            } 
                                                  
}                    
let result = getWinner()
gamesCount++
alert("You scored " + result + ", You have: win count = " + winCount + ", loss count = " + lossCount + ", tie count = " + tieCount)

response = confirm("Do you wanna keep playing with me???? I'm having a WONDERFUL time...")

} while(response)

//Task 3: User Input - instead of hard-coding player move, get the player move from their input, which we get by prompting them
// Display result of function as an alert. 
