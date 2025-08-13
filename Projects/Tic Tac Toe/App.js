const btns = document.querySelectorAll(".btn");
const winnerMsg = document.querySelector(".winner");
const resultBox = document.querySelector(".result");

let turnO = true;
const winPatterns = [
  [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

btns.forEach((btn) => {
   btn.addEventListener("click", () => {
    if(turnO){
      btn.innerText="O";
      turnO = false;
    }
    else{
      btn.innerText="X";
      turnO = true;
    }
    btn.disabled = true; 
     checkWinner()
  });
});
 const showResult = (winner) => {
 winnerMsg.innerText = `${winner} , is the winner`;
 resultBox.classList.remove("hide");
 disable();
 }
 const disable = () =>{
  for(let b of btns){
    b.disabled = true;
  }
 }
const checkWinner = () => {
  for (let pattern of winPatterns ){
let pos1 = btns[pattern[0]].innerText;
let pos2 = btns[pattern[1]].innerText;
let pos3 = btns[pattern[2]].innerText;


  if (pos1 !== "" && pos2!== "" && pos3!== "") {
      if(pos1 === pos2 && pos2 === pos3)
      {
       console.log( `${pos1},"is the winner`);
    showResult(pos1);
    }
  }
}}
 const resetGame = () =>{
   turnO = true;
 }
