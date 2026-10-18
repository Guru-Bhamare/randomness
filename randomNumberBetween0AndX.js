const r = require('raylib');

function setup() {

    const world = {
        HEIGHT: 400,
        WIDTH: 400,
    }

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.WIDTH, world.HEIGHT, "random");

    return world;

}

function draw(world) {

    r.ClearBackground(r.WHITE);

    const randomX = Math.random() * world.WIDTH;
    console.log(randomX);

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
