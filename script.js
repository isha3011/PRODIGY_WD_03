console.log("Tic Tac Toe");
let bgmusic = new Audio("music.mp3");
let click = new Audio("button-click.mp3");
let over = new Audio("gameover.wav");
let turn = "X";
let gameover = false;

//function to change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//function to declare the winner
const checkwinner = () => {
    let boxtext=document.getElementsByClassName('text')
    let wins=[
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' WON '
            gameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px";
            document.querySelector(".line").style.width = "20vw"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })

}

//game logic
//bgmusic.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let text = element.querySelector('.text');
    element.addEventListener('click', () => {
        if (text.innerText === '') {
            text.innerText = turn;
            turn=changeTurn();
            click.play();
            checkwinner();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            
        }
    })
})

//add reset property
reset.addEventListener('click', () =>{
    let boxs = document.querySelectorAll('.text');
    Array.from(boxs).forEach(element => {
        element.innerText=""
    });
    turn="X"
    gameover=false;
    document.querySelector(".line").style.width = "0"
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"


})