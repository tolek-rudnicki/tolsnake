const size=20;
const food={
    x:0,
    y:0
}
function placeFood()
{
    food.x = Math.floor(Math.random() * size);
    food.y = Math.floor(Math.random() * size);
}