import {expandSnake,onSnake} from './snake.js';
import { getRandomGrid } from './RandomGrid.js';
let food=getNewFoodPosition();
let expansionRate=1;
export function update(){
    if(onSnake(food)){
        expandSnake(expansionRate);
        food = getNewFoodPosition();
    }
}
export function draw(gameBoard){
    const foodElement=document.createElement("div");
    foodElement.classList.add("food");
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    gameBoard.appendChild(foodElement);
}
function getNewFoodPosition() {
    let newFoodPosition 
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition=getRandomGrid();
    }
    return newFoodPosition;
}
