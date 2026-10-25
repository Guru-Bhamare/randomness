const r = require('raylib');

function calcRandomNumberInRange(x1, x2) {
    const diff = x2 - x1;
    const randomDiff = diff / 100 * (Math.random() * 100);
    return randomDiff + x1;
}

function square(x) {
    return x * x;
}

function getDistance(c1, c2) {
    return (((square(c2.x - c1.x)) + square(c2.y - c1.y)) ** 0.5)
}

function setup() {

    const screen = {
        HEIGHT: 1200,
        WIDTH: 1200,
        FPS: 60,
        title: "Monte carlo Estimation"
    }

    const square = {
        side: 800,
        x: 150,
        y: 150,
        points: 10000,
    }

    square.startPoint = { x: square.x, y: square.y, height: square.side, width: square.side };

    const circle = {
        x: square.x + square.side / 2,
        y: square.y + square.side / 2,
        radius: 150,
    }


    const randomPointsInSquare = [];


    let pointsInCirlce = 0;

    for (let point = 0; point < square.points; point++) {

        const randomPointX = Math.round(calcRandomNumberInRange(square.x, square.x + square.side));
        const randomPointY = Math.round(calcRandomNumberInRange(square.y, square.y + square.side));

        const randomPoints = { x: randomPointX, y: randomPointY };

        if (getDistance(randomPoints, circle) < circle.radius) {
            pointsInCirlce++;
        }

        randomPointsInSquare.push({ x: randomPointX, y: randomPointY })
    }


    const oneRandomPointArea = (square.side * square.side) / square.points;

    console.log(oneRandomPointArea * pointsInCirlce);

    r.SetTraceLogLevel(r.LOG_NONE)
    r.InitWindow(screen.WIDTH, screen.HEIGHT, screen.title);
    r.SetTargetFPS(screen.FPS);

    return { screen, square, circle, randomPointsInSquare };

}

function draw(world) {

    const s = world.square;
    const c = world.circle;


    r.ClearBackground(r.WHITE);

    r.DrawCircle(c.x, c.y, c.radius, r.DARKBLUE);
    r.DrawRectangleLinesEx(s.startPoint, 5, r.SKYBLUE);

    for (const point of world.randomPointsInSquare) {
        r.DrawCircle(point.x, point.y, 5, r.DARKGRAY)
    }
    r.BeginDrawing();
    r.EndDrawing();

}

function update(world) {

}

function loop(world) {
    while (!r.WindowShouldClose()) {

        draw(world);
        update(world);

    }

}

function tearDown() {
    r.CloseWindow();
}

function main() {
    const world = setup();
    loop(world);
    tearDown();

}

main();
