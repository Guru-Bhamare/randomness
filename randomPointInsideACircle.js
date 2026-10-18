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

    const world = {
        HEIGHT: 800,
        WIDTH: 800,
    }

    r.InitWindow(world.WIDTH, world.HEIGHT, "random");
    r.SetTraceLogLevel(r.LOG_NONE);

    const cosValues = {};

    for (let i = 0; i <= 300; i++) {
        const valX = Math.floor(calcRandomNumberInRange(0, 360));
        const valY = Math.floor(calcRandomNumberInRange(0, 360));

        const cosVal = convertToRadient(valX);
        const sinVal = convertToRadient(valY);

        cosValues[i] = { x: (Math.floor(400 + (200 * Math.cos(cosVal)))), y: (Math.floor(400 + (200 * Math.sin(sinVal)))) };

    }

    return { world, cosValues };
}

function draw(world) {
    r.ClearBackground(r.WHITE);

    for (const values of Object.values(world.cosValues)) {

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