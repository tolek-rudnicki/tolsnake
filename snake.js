const snake = [
    { x: 1, y: 0 },
    { x: 0, y: 0 },
];
const size = 20;
const food = { x: 0, y: 0 };

function placeFood() {
    food.x = Math.floor(Math.random() * size);
    food.y = Math.floor(Math.random() * size);
}

function snakeMove() {
    const oldHead = snake[0]

    // add new head to snake
    const newHead = { x: oldHead.x + 1, y: 0 };
    snake.unshift(newHead);

    // check if head not on food, then pop the tail
    if (true) {
        snake.pop();
    }
}
