const size=20;
const food={
    x:0,
    y:0
}
function placeFood()
{
    food.x=Math.random () *size;
    food.y=Math.random () *size;
}