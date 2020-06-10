function installHandlers() {
    // snake direction controls
    window.addEventListener("keydown", function (event) {
        const direction = document.getElementById("direction");
        switch (event.keyCode) {
            case 39: if (direction.value != "left") direction.value = "right"; break;
            case 40: if (direction.value != "up") direction.value= "down"; break;
            case 37: if (direction.value != "right") direction.value = "left"; break;
            case 38: if (direction.value != "down") direction.value = "up"; break;
            case 32: 
                const run = document.getElementById("run");
                run.checked = !run.checked;
                if (run.checked) {
                    executeGameTick();
                }
                break;
            
        }
    });

    // game run control
    document.getElementById("run").addEventListener("change", function () {
        if (this.checked) {
            executeGameTick();
        }
    });

    // food placement control
    document.getElementById("randomize-food").addEventListener("click", function () {
        placeFood();
        console.log(food);
        drawBoard(size, snake, food);
        updateGameStats()
    });
}

function drawBoard(size, snake, food) {
    const board = document.getElementById("board");
    board.innerHTML = "";
    for (let y = 0; y < size; ++y) {
        const row = document.createElement("div");
        board.appendChild(row);
        for (let x = 0; x < size; ++x) {
        const field = document.createElement("span");
        field.id = "field-" + x + "-" + y;
        row.appendChild(field);
        }
    }
    // draw food
    document.getElementById("field-" + food.x + "-" + food.y).className = "food";
    // draw snake
    for (let i = 0; i < snake.length; ++i) {
        const body = snake[i];
        const fieldId = "field-" + body.x + "-" + body.y;
        console.log(fieldId);
        document.getElementById(fieldId).className = (i === 0 ? "head" : "tail");
    }
}

function updateGameStats() {
    document.getElementById("length").value = snake.length;
    document.getElementById("snake").value = snake.map(function ({x, y}) { return x + ":" + y }).join(", ");
    document.getElementById("food").value = food.x + ":" + food.y;
    localStorage.setItem("score",snake.length);
    // if snake length is biger than the best score in local storage run : 
    if (snake.length > localStorage.getItem("bestScore")) {
        localStorage.setItem("bestScore", snake.length);
    }
}

function executeGameTick() {
    if (!document.getElementById("run").checked) {
        return;
    }

    // move snake
    switch (document.getElementById("direction").value) {
        case "right": snakeMove(1, 0); break;
        case "down": snakeMove(0, 1); break;
        case "left": snakeMove(-1, 0); break;
        case "up": snakeMove(0, -1); break;
    }
    console.log(snake);

    // refresh board and stats
    drawBoard(size, snake, food);
    updateGameStats();

    // prepare execution of next game tick
    const sleep = 1000 / parseFloat(document.getElementById("pace").value);
    console.log("Next tick in " + sleep + "ms");
    setTimeout(executeGameTick, sleep);
}