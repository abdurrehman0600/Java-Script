let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector(".msg")
const myScore = document.querySelector(".myscore")
const hisScore = document.querySelector(".compscore")

const genCompChoice = () =>{
  const options = ["rock","paper","scissors"]
  const randonIdx = Math.floor(Math.random() * 3)
  return options[randonIdx]
}
const draw = ()=>{
   msg.innerText = "Draw try again guys."
}
const playGame = (userChoice) =>{
const compChoice = genCompChoice();
if(userChoice === compChoice)
{
  draw();
}
else{
  if(userChoice == "rock"){
    if(compChoice === "paper"){
      msg.innerText = `Computer wins,${compChoice} beats ${userChoice}`
      compscore++;
      hisScore.innerText = `${compscore}`
    }
    else{
       msg.innerText = `You wins , ${userChoice} beats ${compChoice}`
      userscore++;
      myScore.innerText = `${userscore}`
    }
  }
  else if(userChoice==="paper"){
    if(compChoice === "rock"){
       msg.innerText =`You wins , ${userChoice} beats ${compChoice}`
      userscore++;
      myScore.innerText = `${userscore}`
    }
    else{
       msg.innerText = `Computer wins,${compChoice} beats ${userChoice}`
      compscore++;
      hisScore.innerText = `${compscore}`
    }
  }
  else{
    if(compChoice === "rock")
    {
       msg.innerText = `Computer wins,${compChoice} beats ${userChoice}`
      compscore++;
      hisScore.innerText = `${compscore}`
    }
    else{
       msg.innerText =`You wins , ${userChoice} beats ${compChoice}`
      userscore++;
      myScore.innerText = `${userscore}`
    }
  }
}
}
choices.forEach((choice) => {
  choice.addEventListener("click",() => {
    const userChoice = choice.getAttribute("id")
    playGame(userChoice);
  })
  // moduler programming
})