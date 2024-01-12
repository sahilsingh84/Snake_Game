import { snakeSpeed,update as updateSnake,draw as drawSnake,getSnakeHead,snakeIntersection} 
from "./snake.js";
import {update as updateFood,draw as drawFood} 
from "./food.js";
import {outSideGrid} from "./RandomGrid.js";
var lastVisit=0;
let gameOver=false;
const gameBoard=document.querySelector(".game-board");
function main(currentTime){
    if(gameOver){
       if(confirm("You lost.Press OK to restart.")){
        window.location = './'
       }
       return
    }
    requestAnimationFrame(main);
    var timeSinceLastVisitInSecond=(currentTime-lastVisit)/1000;
    if(timeSinceLastVisitInSecond < 1 / snakeSpeed) return;
    
    console.log("chala");
    lastVisit=currentTime;
   
    update();
    draw();
    
}
requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML="";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}
function checkDeath(){
    gameOver = snakeIntersection() || outSideGrid(getSnakeHead());
    return gameOver;
}