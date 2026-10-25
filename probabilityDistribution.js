const r = require('raylib');
const m = require('./math')

function average(range, n) {
    let sumOfRandomNumbers = 0;
    for (let number = 0; number < n; number++) {
        sumOfRandomNumbers += Math.round(m.calcRandomNumberInRange(range.start, range.end));
    }

    return sumOfRandomNumbers / n;
}

function setup() {

    const screen = {
        HEIGHT: 800,
        WIDTH: 800,
        FPS: 60,
        title: "Probability Distribution",
    }

    const averageOfRandom = Math.round(average({ start: 0, end: 100 }, 7));

    r.SetTraceLogLevel(r.LOG_NONE);
    r.SetTargetFPS(screen.FPS)
    r.InitWindow(screen.WIDTH, screen.HEIGHT, screen.title);

    return { screen };
}

function draw(world) {

    r.ClearBackground(r.WHITE);

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
