const r = require('raylib');

function setup() {
    const screen = {
        HEIGHT: 400,
        WIDTH: 400,
    }

    const start = { x: 0, y: 0 }
    const end = { x: 0, y: 0 }

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, "random");

    return { screen, start, end };
}

function draw(world) {
    r.ClearBackground(r.BLUE);

    r.DrawLineEx(world.start, world.end, 3, r.WHITE);

    r.BeginDrawing();
    r.EndDrawing();
}

function update(world) {
    const randomX = Math.random() * world.screen.WIDTH;

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
