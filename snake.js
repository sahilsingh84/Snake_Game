import { getInputDirection } from "./input.js";
let newSegment=0;

export const snakeSpeed=5;
const snakeBody=[{x:11,y:11}];
export function update(){
    addSegment();
    const inputDirection=getInputDirection();
    for(let i=snakeBody.length-2; i>=0 ;i--){
          snakeBody[i+1]={...snakeBody[i]};
    }
    snakeBody[0].x+=inputDirection.x;
    snakeBody[0].y+=inputDirection.y;
   
}
export function getSnakeHead(){
     return snakeBody[0];
}

export function draw(gameBoard){
    snakeBody.forEach(segment=>{
        const snakeElement=document.createElement("div");
        snakeElement.style.gridRowStart=segment.y;
        snakeElement.style.gridColumnStart=segment.x;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    })
}
export function expandSnake(amount){
       newSegment+=amount;
}
export function onSnake(pos,{ignoreHead = false}= {}){
        return snakeBody.some((segment,index) =>{
            if(ignoreHead && index===0) return false
            return equalPosition(segment,pos);
        })
}
export function snakeIntersection(){
    return onSnake(snakeBody[0],{ignoreHead:true})
}
function equalPosition(seg,pos){
    return(seg.x===pos.x && seg.y===pos.y);
}
function addSegment(){
    for(let i=0;i<newSegment;i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]});
    }
    newSegment=0;
}