let blockSize = 25; //canvas size
let total_row = 17; //total row nr
let total_col = 17; //total col nr
let board;
let context;

//location of snake
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

//set the total number of rows and columns
let speedX = 0; //snake speed in X coordinate
let speedY = 0; //snake speed in Y coordinate

let snakeBody = [];

let foodX;
let foodY;

let gameOver = false;

function resetGame() {
    location.reload();
}

window.onload = function () {
    //set board height and width
    board = document.getElementById("board");
    board.height = total_row * blockSize; //425
    board.width = total_col * blockSize;  //425
    context = board.getContext("2d");

    placeFood();
    
    // for movements
    document.addEventListener("keyup", changeDirection);

    //set snake speed
    setInterval(update, 1000/10);
}

function update() {
    if (gameOver) {
        return;
    }
    //background of a game
    context.fillStyle = "green";
    context.fillRect(0, 0, board.height, board.width);

    //set food color + position
    context.fillStyle = "yellow";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if( snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        // console.log(snakeBody);
        placeFood();
    }

    //body of snake will grow
    for (let i = snakeBody.length -1; i>0; i--){
        //it will store previous part of snake to the current part
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "white";
    //updating snake position in X coordinates
    snakeX += speedX * blockSize;
    //updating snake position in Y coordinates
    snakeY += speedY * blockSize; 
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i< snakeBody.length; i++){
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    if ( snakeX < 0 || snakeX > total_col * blockSize
        || snakeY < 0 || snakeY > total_row * blockSize ){
            //out of bound condition
            gameOver = true;
            alert("Game Over");
        }

        for (let i = 0; i < snakeBody.length; i++){
            if( snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]){
                // console.log(snakeBody[i][0], snakeBody[i][1])

                //snake eats own body
                gameOver = true;
                alert("Game Over");
            }
        }
}
// [ [00, 01], [10, 11], [20, 21] ]

function changeDirection(e) {
    if (e.code == "ArrowUp" && speedY != 1){
        //if up arrow key pressed with this condition
        //snake will not move in the opposite direction
        speedX = 0;
        speedY = -1;
    }
    else if (e.code == "ArrowDown" && speedY != -1){
        speedX = 0;
        speedY = 1;
    }
    else if (e.code == "ArrowLeft" && speedX != 1){
        speedX = -1;
        speedY = 0;
    }
    else if (e.code == "ArrowRight" && speedX != -1){
        speedX = 1;
        speedY = 0;
    }
    
}


function placeFood() {
    //in x coordinates.
    foodX = Math.floor(Math.random() * total_col) * blockSize;

    //in y coordinates.
    foodY = Math.floor(Math.random() * total_row) * blockSize;
}
