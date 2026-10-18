const r = require('raylib');

function setup() {
    const screen = {
        HEIGHT: 800,
        WIDTH: 800,
    }

    const circleX = 0
    const circleY = 0;

    const rect = {
        x: 400,
        y: 400,
        width: 300,
        height: 300,
    }

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, "random");

    return { screen, circleX, circleY, rect };
}

function calcRandomNumberInRange(x1, x2) {
    const diff = x2 - x1;
    const randomDiff = diff / 100 * (Math.random() * 100);
    return randomDiff + x1;
}

function draw(world) {
    r.ClearBackground(r.BLUE);

    r.DrawCircle(world.circleX, world.circleY, 5, r.WHITE);
    r.DrawRectangleLines(world.rect.x, world.rect.y, world.rect.width, world.rect.height, r.WHITE);

    r.BeginDrawing();
    r.EndDrawing();
}

function update(world) {
    const randomX = calcRandomNumberInRange(world.rect.x, world.rect.x + world.rect.width);
    const randomY = calcRandomNumberInRange(world.rect.y, world.rect.y + world.rect.width);

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
