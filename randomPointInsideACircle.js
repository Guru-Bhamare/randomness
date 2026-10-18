const r = require('raylib');

function setup() {

    const world = {
        HEIGHT: 400,
        WIDTH: 400,
    }

    r.InitWindow(world.WIDTH, world.HEIGHT, "a");

    return world;

}

function draw(world) {

    r.ClearBackground(r.WHITE);

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
