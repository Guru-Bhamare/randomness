const r = require('raylib');

function convertToRadient(degree) {
    return degree * Math.PI / 180;
}

function calcRandomNumberInRange(x1, x2) {
    const diff = x2 - x1;
    const randomDiff = diff / 100 * (Math.random() * 100);
    return randomDiff + x1;
}

function setup() {

    const screen = {
        HEIGHT: 800,
        WIDTH: 800,
    }

    const noOfPoints = 3000;

    r.SetConfigFlags(r.FLAG_WINDOW_HIGHDPI);
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, "random");

    const cosValues = {};
    const constCircleRadius = 100;

    for (let i = 0; i <= noOfPoints; i++) {
        const valX = Math.floor(calcRandomNumberInRange(0, 360));
        const radius = Math.floor(calcRandomNumberInRange(0, constCircleRadius));

        const cosVal = convertToRadient(valX);
        const sinVal = convertToRadient(valX);

        cosValues[i] = {
            x: (Math.floor(screen.WIDTH / 2 + (radius * Math.cos(cosVal)))),
            y: (Math.floor(screen.HEIGHT / 2 + (radius * Math.sin(sinVal)))),
            r: radius,
        };

    }

    return { screen, cosValues, constCircleRadius };
}

function draw(world) {
    r.ClearBackground(r.WHITE);
    console.log(world.constCircleRadius);
    r.DrawCircleLines(world.screen.WIDTH / 2, world.screen.HEIGHT / 2, world.constCircleRadius, r.RED);

    for (const values of Object.values(world.cosValues)) {
        r.DrawCircle(values.x, values.y, 3, r.YELLOW);
    }
    r.BeginDrawing();
    r.EndDrawing();
}

function update(world) { }

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