const grid_size=21;
export function getRandomGrid(){
    return{
        x: Math.floor(Math.random() * grid_size)+1,
        y: Math.floor(Math.random() * grid_size)+1
    }
}
export function outSideGrid(pos){
    return(
        pos.x < 1 || pos.x > grid_size || pos.y < 1 || pos.y > grid_size
    )
    
}