let cornerLtBox = document.getElementById("corner-lt-box");
let topBox = document.getElementById("top-box"); 
let cornerRtBox = document.getElementById("corner-rt-box");
let leftBox = document.getElementById("left-box");
let centerBox = document.getElementById("center-box");
let rightBox = document.getElementById("right-box");
let cornerLbBox = document.getElementById("corner-lb-box");
let bottomBox = document.getElementById("bottom-box");
let cornerRbBox = document.getElementById("corner-rb-box");
let winnerMessage = document.getElementById("winner-message")
let test = 
[[],[],[],
[],[],[],
[],[],[]];
let turns = 1;
let win = false;
function addMark(clicked){
    const clickedBox = clicked.target;
    const clickedIndex = Array.from(clickedBox.parentNode.children).indexOf(clickedBox)

    if(turns % 2 != 0 && this.children.length < 1 && win == false){
            let cross = document.createElement("div");
            cross.classList.add("cross");
            this.appendChild(cross)
            test[clickedIndex].push("x")
            turns +=1
            whoWins();
            
    } else if (turns % 2 == 0 && this.children.length < 1 && win == false){
        if(this.children.length < 1){
            let circle = document.createElement("div");
            circle.classList.add("circle");
            this.appendChild(circle);
            turns +=1;
            test[clickedIndex].push("o");
            whoWins();
            }
    }


}
function whoWins(){
    if(turns < 10 && win == false){
        if(test[0] == "x" && test[1] == "x" && test[2] == "x" || test[3] == "x" && test[4] == "x" && test[5] == "x" || test[6] == "x" && test[7] == "x" && test[8] == "x"){
            winnerMessage.textContent += "X is the Winner!"
            win = true;
        } else if(test[0] == "x" && test[3] == "x" && test[6] == "x" || test[1] == "x" && test[4] == "x" && test[7] == "x" || test[2] == "x" && test[5] == "x" && test[8] == "x") {
            winnerMessage.textContent += "X is the Winner!"
            win = true;
        } else if(test[0] == "x" && test[4] == "x" && test[8] == "x" || test[2] == "x" && test[4] == "x" && test[6] == "x"){
            winnerMessage.textContent += "X is the Winner!"
            win = true;
        } else if(test[0] == "o" && test[1] == "o" && test[2] == "o" || test[3] == "o" && test[4] == "o" && test[5] == "o" || test[6] == "o" && test[7] == "o" && test[8] == "o"){
            winnerMessage.textContent += "O is the Winner!"
            win = true;
        } else if(test[0] == "o" && test[3] == "o" && test[6] == "o" || test[1] == "o" && test[4] == "o" && test[7] == "o" || test[2] == "o" && test[5] == "o" && test[8] == "o") {
            winnerMessage.textContent += "O is the Winner!"
            win = true;
        } else if(test[0] == "o" && test[4] == "o" && test[8] == "o" || test[2] == "o" && test[4] == "o" && test[6] == "o"){
            winnerMessage.textContent += "O is the Winner!"
            win = true;
        }
    } else {
        winnerMessage.textContent += "It's a Draw..."
    }
}
cornerLtBox.addEventListener("click", addMark);
topBox.addEventListener("click", addMark);
cornerRtBox.addEventListener("click", addMark);
leftBox.addEventListener("click", addMark);
centerBox.addEventListener("click", addMark);
rightBox.addEventListener("click", addMark);
cornerLbBox.addEventListener("click", addMark);
bottomBox.addEventListener("click", addMark);
cornerRbBox.addEventListener("click", addMark);