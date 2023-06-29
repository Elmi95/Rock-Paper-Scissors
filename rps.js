function GetCompChoice(){
let options =['rock', 'paper', 'scissors']   
return options[Math.floor(Math.random()*options.length)]
}

function playRound (compSelect,playerSelect){
    if (compSelect === playerSelect){
        return 'Its a Draw'
    }else{
        if(compSelect === 'rock' && playerSelect === 'paper'){
            return 'You Lose! Paper beats Rock'
        }else{
            if (compSelect === 'scissors' && playerSelect === 'rock'){
                return 'You Win! Rock beats Scissors'
            }else{
                if (compSelect === 'paper' && playerSelect === 'scissors'){
                    return 'You Win! Scissors beats Paper'
                }else{
                    if (compSelect === 'rock' && playerSelect === 'scissors'){
                        return 'You Lose! Rock beats Scissors'
                    }else{
                        if( compSelect === 'paper' && playerSelect === 'rock'){
                            return 'You Lose! Paper beats Rock' 
                        }else{
                            if(compSelect === 'scissors' && playerSelect === 'paper'){
                                return 'You Lose! Scissors beats Paper'
                            }
                        }
                    }
                }
            }
        }
    }
}
   

var playerSelect = 'scissors'
var compSelect = GetCompChoice()

console.log(playRound(compSelect,playerSelect))



