const r = require('raylib');

function setup() {
    const screen = {
        HEIGHT: 400,
        WIDTH: 400,
    }

    const circleX = 0
    const circleY = 0;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, "random");

    return { screen, circleX, circleY };
}

function draw(world) {
    r.ClearBackground(r.BLUE);

    r.DrawCircle(world.circleX, world.circleY, 5, r.WHITE);

    r.BeginDrawing();
    r.EndDrawing();
}

function update(world) {
    const randomX = Math.random() * world.screen.WIDTH;
    const randomY = Math.random() * world.screen.HEIGHT;

    world.circleX = randomX;
    world.circleY = randomY;

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
