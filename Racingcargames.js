const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Car object
const car = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 80,
    width: 50,
    height: 80,
    speed: 5
};

// Game loop
function gameLoop() {
    moveCar();
    drawGame();
    requestAnimationFrame(gameLoop);
}

// Handle keyboard input
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
    // Left arrow key
    if (event.keyCode === 37 && car.x > 0) {
        car.x -= car.speed;
    }

    // Right arrow key
    if (event.keyCode === 39 && car.x < canvas.width - car.width) {
        car.x += car.speed;
    }
}

// Move the car based on keyboard input
function moveCar() {
    // Move car up (decrease y position) for a sense of speed
    car.y -= car.speed;

    // Reset car position if it goes off the top of the canvas
    if (car.y < -car.height) {
        car.y = canvas.height;
    }
}

// Draw the game
function drawGame() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the car
    ctx.fillStyle = '#00F';
    ctx.fillRect(car.x, car.y, car.width, car.height);
}

// Start the game loop
gameLoop();
