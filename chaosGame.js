
const r = require('raylib');

function calcRandomNumberInRange(x1, x2) {
    const diff = x2 - x1;
    const randomDiff = diff / 100 * (Math.random() * 100);
    return randomDiff + x1;
}

function coordinatesOfPoints(noOfPoints, triangleVertices) {

    let point = { x: 300, y: 300 };
    const points = [];
    for (let i = 0; i < noOfPoints; i++) {

        const randomVertice = triangleVertices[Math.round(calcRandomNumberInRange(0, 2))];

        const scaledDownBy2 = {
            x: ((point.x - randomVertice.x) / 2) + randomVertice.x,
            y: (point.y - randomVertice.y) / 2 + randomVertice.y,
        }

        point = scaledDownBy2;
        points.push(scaledDownBy2);
    }
    return points;
}

function setup() {

    const screen = {
        HEIGHT: 800,
        WIDTH: 800,
        FPS: 60,
        title: "Chaos Game"
    }

    const noOfPoints = 100000;

    const triangleVertices = [
        { x: 600, y: 500 },
        { x: 300, y: 250 },
        { x: 100, y: 500 }
    ]

    const points = coordinatesOfPoints(noOfPoints, triangleVertices)

    const triangle = {
        points,
        vertices: triangleVertices,
    }

    r.SetTraceLogLevel(r.LOG_NONE);
    r.SetTargetFPS(screen.FPS);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, screen.title);

    return { screen, triangle };

}

function draw(world) {

    const vertices = world.triangle.vertices;
    const points = world.triangle.points;

    r.ClearBackground(r.WHITE);

    for (const v of points) {
        r.DrawCircle(v.x, v.y, 5, r.DARKBLUE)
    }
    r.DrawTriangleLines(vertices[0], vertices[1], vertices[2], r.RED);
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
