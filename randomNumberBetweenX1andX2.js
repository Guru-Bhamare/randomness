const r = require('raylib');

function setup() {
    const screen = {
        HEIGHT: 800,
        WIDTH: 800,
    }

    const start = { x: 0, y: 0 }
    const end = { x: 0, y: 0 }

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, "random");

    return { screen, start, end };
}

function calcRandomNumberInRange(x1, x2) {
    const diff = x2 - x1;
    const randomDiff = diff / 100 * (Math.random() * 100);
    return randomDiff + x1;
}

function draw(world) {
    r.ClearBackground(r.BLUE);

    r.DrawLineEx(world.start, world.end, 3, r.WHITE);

    r.BeginDrawing();
    r.EndDrawing();
}

function update(world) {
    const randomX = calcRandomNumberInRange(30, 40);
    console.log(randomX);

    world.start = { x: randomX, y: 0 };
    world.end = { x: randomX, y: world.screen.HEIGHT }
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        update(world);
        draw(world);
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
