function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    randomSmileys(1000);
}

function randomSmileys(count) {
    // If there are no more smileys to draw
    // Stop
    if(count === 0) return;
    // Draw a random smiley
    let x = random(width);
    let y = random(height);
    let diameter = random(10, 150);
    // Call smiley function with random values
    smiley(x, y, diameter);
    // Draw remaining smileys
    randomSmileys(count - 1);
}

// How to draw smiley face
function smiley(x, y, diameter) {
    // Head
    circle(x, y, diameter);
    // Left eye
    circle(x - diameter / 4, y - diameter / 4, diameter / 4);
    // Right eye
    circle(x + diameter / 4, y - diameter / 4, diameter / 4);
    // Smile
    arc(x, y + diameter / 10, 
        diameter * 0.75, diameter * 0.5,
        0, 180);
}