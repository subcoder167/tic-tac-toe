var name1;
var name2;
document.getElementById("player1").addEventListener('input', function() {
    document.getElementById("player1").value = document.getElementById("player1").value.toUpperCase();
    name1 = document.getElementById("player1").value;
});
document.getElementById("player2").addEventListener('input', function() {
    document.getElementById("player2").value = document.getElementById("player2").value.toUpperCase();
    name2 = document.getElementById("player2").value;
});

let currentPlayer = "X";
let score1 = 0;
let score2 = 0;
let winPlayer;
let cellsArray = document.querySelectorAll(".box");
var takenArray;
var mySound0 = new Audio("smb_kick.wav");
var mySound1 = new Audio("smb_coin.wav");
var mySound2 = new Audio("smb_vine.wav");
function play() {
    for(i = 0;i<cellsArray.length;i++){
        cellsArray[i].innerHTML = '';
        cellsArray[i].classList.remove("taken");
        takenArray = document.querySelectorAll(".taken");
    }
    document.querySelector(".tie").style.display = "none";
    document.querySelector(".start").style.display = "none";
    document.querySelector(".playArea").style.display = "flex";
    document.querySelector(".player1").style.display = "flex";
    document.querySelector(".player2").style.display = "flex";
    cellsArray.forEach(function(cell) {
        cell.addEventListener('click', function() {
            mySound0.play();
            cell.classList.add("taken");
            takenArray = document.querySelectorAll(".taken");
            console.log(takenArray);
            document.getElementById("pname1").innerHTML = name1 + "";
            document.getElementById("pname2").innerHTML = name2 + "";
            console.log(cell);
            if(!cell.innerHTML == '') {
                cell.onclick = false;
            }
            else{
                cell.innerHTML = currentPlayer;
                if ( currentPlayer == "X") {
                currentPlayer = "O";
                document.querySelector(".p2").style.display = "block";
                document.querySelector(".p1").style.display = "none"                    
                }
                else{
                currentPlayer = "X";
                document.querySelector(".p1").style.display = "block";
                document.querySelector(".p2").style.display = "none";
                }    
            }
        });
    });
}
function win() {
    document.querySelector(".playArea").addEventListener('click', function() {
        if ((!cellsArray[0].innerHTML == '') && (!cellsArray[1].innerHTML == '') && (cellsArray[0].innerHTML == cellsArray[1].innerHTML) && (cellsArray[1].innerHTML== cellsArray[2].innerHTML)) {
            winPlayer = cellsArray[0].innerHTML;
            score();
        }
        else if ((!cellsArray[3].innerHTML == '') && (!cellsArray[4].innerHTML == '') && (cellsArray[3].innerHTML == cellsArray[4].innerHTML) && (cellsArray[4].innerHTML== cellsArray[5].innerHTML)) {
            winPlayer = cellsArray[3].innerHTML;
            score();
        }
    
        else if ((!cellsArray[6].innerHTML == '') && (!cellsArray[7].innerHTML == '') && (cellsArray[6].innerHTML == cellsArray[7].innerHTML) && (cellsArray[7].innerHTML== cellsArray[8].innerHTML)){
            winPlayer = cellsArray[6].innerHTML;
            score();
        }

        else if((!cellsArray[0].innerHTML == '') && (!cellsArray[3].innerHTML == '') && (cellsArray[0].innerHTML == cellsArray[3].innerHTML) && (cellsArray[3].innerHTML== cellsArray[6].innerHTML)){
            winPlayer = cellsArray[0].innerHTML;
            score();
        }

        else if((!cellsArray[1].innerHTML == '') && (!cellsArray[4].innerHTML == '') && (cellsArray[1].innerHTML == cellsArray[4].innerHTML) && (cellsArray[4].innerHTML== cellsArray[7].innerHTML)){
            winPlayer = cellsArray[1].innerHTML;
            score();
        }

        else if((!cellsArray[2].innerHTML == '') && (!cellsArray[5].innerHTML == '') && (cellsArray[2].innerHTML == cellsArray[5].innerHTML) && (cellsArray[5].innerHTML== cellsArray[8].innerHTML)){
            winPlayer = cellsArray[2].innerHTML;
            score();
        }

        else if((!cellsArray[0].innerHTML == '') && (!cellsArray[4].innerHTML == '') && (cellsArray[0].innerHTML == cellsArray[4].innerHTML) && (cellsArray[4].innerHTML== cellsArray[8].innerHTML)){
            winPlayer = cellsArray[0].innerHTML;
            score();
        }

        else if((!cellsArray[2].innerHTML == '') && (!cellsArray[4].innerHTML == '') && (cellsArray[2].innerHTML == cellsArray[4].innerHTML) && (cellsArray[4].innerHTML== cellsArray[6].innerHTML)){
            winPlayer = cellsArray[2].innerHTML;
            score();
        }

        else {
            if(cellsArray.length == takenArray.length){
                mySound2.play();
                setTimeout(function() {
                for (var i = 0; i < cellsArray.length; i++) {
                    cellsArray[i].classList.remove('taken');
                    takenArray = document.querySelectorAll(".taken");
                  }                 
                  play();
                }, 600)
                document.querySelector(".playArea").style.display = "none";
                  document.querySelector(".tie").style.display = "block";
            }
        }
    })
}
function score() {
    mySound1.play();
    if (winPlayer == "X") {
        currentPlayer = "O";
        score1++;
        for (var i = 0; i < cellsArray.length; i++) {
            cellsArray[i].classList.remove('taken');
            takenArray = document.querySelectorAll(".taken");
          }
        document.getElementById("scr1").innerHTML = score1;
        document.getElementById("pname1").innerHTML += " WON";
    }
    else {
        currentPlayer = "X";
        score2++;
        document.getElementById("scr2").innerHTML = score2;
        document.getElementById("pname2").innerHTML += " WON";
    }
    setTimeout(function() {
        for(i = 0;i<cellsArray.length;i++){
            cellsArray[i].innerHTML = '';
        }
    },600)
}
document.querySelector(".start").addEventListener("click", function(){
    if((!document.getElementById("player1").value=='') && (!document.getElementById("player2").value=='')) {
        document.getElementById("player1").style.display = "none";   
        document.getElementById("player2").style.display = "none"; 
        document.getElementById("vs").style.display = "none"; 
        document.querySelector('.tic').style.display = "none";
        document.getElementById("pname1").innerHTML = name1;
        document.getElementById("pname2").innerHTML = name2;
        play();	
        win();
    }
    else{
    }
});
