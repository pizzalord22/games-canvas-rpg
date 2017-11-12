var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "blue";

function draw(x_start, y_start, x_end, y_end) {
    ctx.beginPath();
    ctx.moveTo(x_start, y_start);
    ctx.lineTo(x_end, y_end);
    ctx.stroke();
}

function draw_square(x_start, y_start, size) {
    draw(x_start, y_start, x_start, y_start - size);
    draw(x_start, y_start - size, x_start + size, y_start - size);
    draw(x_start + size, y_start - size, x_start + size, y_start);
    draw(x_start, y_start, x_start + size, y_start)
}

function draw_triangle(x_start, y_start, size) {
    draw(x_start, y_start - size, x_start + (size / 2), y_start - (size / 2) - size);
    draw(x_start + size, y_start - size, x_start + (size / 2), y_start - (size / 2) - size);
}

function draw_door(x_start, y_start, size) {
    draw(x_start + size * 0.75, y_start, x_start + size * 0.75, y_start - size * 0.4);
    draw(x_start + size * 0.75, y_start - size * 0.4, x_start + size, y_start - size * 0.4);
    draw(x_start + size * 0.8, y_start - size * 0.15, x_start + size * 0.85, y_start - size * 0.15);
    draw(x_start + size * 0.8, y_start - size * 0.25, x_start + size * 0.80, y_start - size * 0.35);
    draw(x_start + size * 0.8, y_start - size * 0.35, x_start + size * 0.95, y_start - size * 0.35);
    draw(x_start + size * 0.95, y_start - size * 0.35, x_start + size * 0.95, y_start - size * 0.25);
    draw(x_start + size * 0.8, y_start - size * 0.25, x_start + size * 0.95, y_start - size * 0.25);
}

function draw_house(x_start, y_start, size) {
    draw_square(x_start, y_start, size);
    draw_triangle(x_start, y_start, size);
    draw_door(x_start, y_start, size);
}

function initial() {
    draw_house(0, 400, 50);
    draw_house(60, 400, 50);
    draw_house(120, 400, 50);
    draw_house(180, 400, 50);
    draw_house(240, 400, 50);
    draw_house(300, 400, 50);
}

initial();