const result = document.querySelector('.result')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const winner = document.querySelector('.winnner')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')

let computerScore = 0
let playerScore = 0

function GetCompChoice(){
let options =['rock', 'paper', 'scissors']   
return options[Math.floor(Math.random()*options.length)]
}

function playRound (compSelect,playerSelect){
    if (compSelect === playerSelect){
        const p = document.createElement('p')
        p.innerText = 'Its a Draw'
        result.appendChild(p)
    }else{
        if(compSelect === 'rock' && playerSelect === 'paper'){
            playerScore++
            const p = document.createElement('p')
            p.innerText = 'You Win! Paper beats Rock'
            result.appendChild(p)
        }else{
            if (compSelect === 'scissors' && playerSelect === 'rock'){
                playerScore++
                const p = document.createElement('p')
                p.innerText = 'You Win! Rock beats Scissors'
                result.appendChild(p)
            }else{
                if (compSelect === 'paper' && playerSelect === 'scissors'){
                   playerScore++
                    const p = document.createElement('p')
                    p.innerText = 'You Win! Scissors beats Paper'
                    result.appendChild(p)
                }else{
                    if (compSelect === 'rock' && playerSelect === 'scissors'){
                        computerScore++
                        const p = document.createElement('p')
                        p.innerText = 'You Lose! Rock beats Scissors'
                        result.appendChild(p)
                    }else{
                        if( compSelect === 'paper' && playerSelect === 'rock'){
                            computerScore++
                            const p = document.createElement('p')
                            p.innerText =  'You Lose! Paper beats Rock' 
                            result.appendChild(p)
                        }else{
                            if(compSelect === 'scissors' && playerSelect === 'paper'){
                                computerScore++
                                const p = document.createElement('p')
                                p.innerText =  'You Lose! Scissors beats Paper'
                                result.appendChild(p)
                            }
                        }
                    }
                }
            }
        }
    }
}

const updatedScore = (playerScore,computerScore) =>{
   playerScoreSpan.innerText = `Player Score: ${playerScore}`
   computerScoreSpan.innerText= `Computer Score: ${computerScore}`
}

const checkForWinner = (playerScore,computerScore)=>{
    if (playerScore===5) {
        const h2 =document.createElement('h2')
        h2.classList.add('player-won')
        h2.innerText = `Your score ${playerScore} Computer score ${computerScore} Good job!`
        result.append(h2)
    }
    if (computerScore===5) {
        const h2 =document.createElement('h2')
        h2.classList.add('computer-won')
        h2.innerText = `Your score ${playerScore} Computer score ${computerScore} Better luck next time`
        result.append(h2)
    }
}



    rock.addEventListener('click', () => {
        const compSelect = GetCompChoice()
        const playerSelect = 'rock'
        playRound(compSelect,playerSelect)
        checkForWinner(playerScore,computerScore)
        updatedScore(playerScore,computerScore)
    })

    paper.addEventListener('click', ()=>{
        const compSelect = GetCompChoice()
        const playerSelect = 'paper'
        playRound(compSelect,playerSelect)
        checkForWinner(playerScore,computerScore)
        updatedScore(playerScore,computerScore)
        
    })

    scissors.addEventListener('click', ()=>{
        const compSelect = GetCompChoice()
        const playerSelect = 'scissors'
        playRound(compSelect,playerSelect)
        checkForWinner(playerScore,computerScore)
        updatedScore(playerScore,computerScore)
        
        
    })