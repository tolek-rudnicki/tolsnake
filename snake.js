const snake = [
    { x: 2, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 0 },
];
const size = 20;
const food = { x: 0, y: 0 };

function placeFood() {
    food.x = Math.floor(Math.random() * size);
    food.y = Math.floor(Math.random() * size);
}

function snakeMove(mx,my) {
    const oldHead = snake[0]

    // add new head to snake
    const newHead = { x: oldHead.x + mx, y: oldHead.y + my };
    snake.unshift(newHead);

    // check if head not on food, then pop the tail
    if (newHead.x!=food.x || newHead.y!=food.y) {
        snake.pop();
    } else {
        placeFood();
    }
    // detect if newHead is on body if yes take the player to game_over.html
    for (let index = 1; index < snake.length; ++index) {
        const body = snake[index];
        if (body.x == newHead.x && body.y == newHead.y) {
            window.location.href = "game_over.html"
        }
    }    
}
