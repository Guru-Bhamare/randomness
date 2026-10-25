const r = require('raylib');
const m = require('./math')

function average(range, n) {
    let sumOfRandomNumbers = 0;
    for (let number = 0; number < n; number++) {
        sumOfRandomNumbers += (m.calcRandomNumberInRange(range.start, range.end));
    }
    return sumOfRandomNumbers / n;
}

function setup() {
    const screen = {
        HEIGHT: 800,
        WIDTH: 1200,
        FPS: 60,
        title: "Probability Distribution",
    }


    const noOfPoints = 1000;
    const points = [];

    for (let point = 0; point < noOfPoints; point++) {
        const averageOfRandom = (average({ start: 1, end: 100 }, 3));
        points.push(averageOfRandom);
    }

    r.SetTraceLogLevel(r.LOG_NONE);
    r.SetTargetFPS(screen.FPS)
    r.InitWindow(screen.WIDTH, screen.HEIGHT, screen.title);

    return { screen, points };
}

function draw(world) {
    const points = world.points;

    r.ClearBackground(r.DARKBLUE);
    r.BeginDrawing();

    for (const point of points) {
        const x = (point / 100) * world.screen.WIDTH;
        r.DrawLine(x, 0, x, world.screen.HEIGHT, r.WHITE);
    }

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
