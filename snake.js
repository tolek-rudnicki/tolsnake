var snake=[
    {
        x:1,
        y:0
    },
    {
        x:0,
        y:0
    }
]
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
function snakeMove ()
{
    const head=snake[0]
    snake.unshift(
        {
           x:head.x+1,
           y:0 
        }
    );
    snake.pop()
}