// Establishing variables
const shots1 = document.querySelector("#teamone-numshots")
const shots2 = document.querySelector("#teamtwo-numshots")
const goals1 = document.querySelector("#teamone-numgoals")
const goals2 = document.querySelector("#teamtwo-numgoals")
const button1 = document.querySelector("#teamone-shoot-button")
const button2 = document.querySelector("#teamtwo-shoot-button")
const resetbutton = document.querySelector("#reset-button")
const gamereset = document.querySelector("#num-resets")

// Team 1 shot randomizer and score tracking\
button1.addEventListener("click", function() {
    let chance = Math.floor((Math.random()*100) +1)
    let team1shots = Number(shots1.innerHTML) + 1
    shots1.innerHTML = team1shots
    if (chance < 60){
        console.log("Team 1 Success")
        let team1score = Number(goals1.innerHTML) + 1
        goals1.innerHTML = team1score
    } else {
        console.log("Team 1 Failure")
    }
})
// Team 2 shot randomizer and score tracking
button2.addEventListener("click", function() {
    let chance = Math.floor((Math.random()*100) +1)
    let team2shots = Number(shots2.innerHTML) + 1
    shots2.innerHTML = team2shots
    if (chance < 60){
        console.log("Team 2 Success")
        let team2score = Number(goals2.innerHTML) + 1
        goals2.innerHTML = team2score
    } else {
        console.log("Team 2 Failure")
    }
})
// Reset and Winner Declaration
resetbutton.addEventListener("click", function RunReset() {
    console.log("Game Reset!")
    if (goals1.innerHTML > goals2.innerHTML){
        window.alert("Team 1 Wins!")
    } 
    if (goals1.innerHTML < goals2.innerHTML){
        window.alert("Team 2 Wins!")
    }
    if (goals1.innerHTML === goals2.innerHTML){
        window.alert("Draw")
    }
    let resetcounter = Number(gamereset.innerHTML) + 1
    gamereset.innerHTML = resetcounter
    shots1.innerHTML = 0
    shots2.innerHTML = 0
    goals1.innerHTML = 0
    goals2.innerHTML = 0
})