const r = require('raylib');

function calcVertices(v1, v2) {

    const addV1andV2 = r.Vector2Add(v2, v1);

    const pointA = { x: 100, y: 100 }
    const pointB = r.Vector2Add(pointA, v1);
    const pointC = r.Vector2Add(pointA, v2);
    const pointD = r.Vector2Add(addV1andV2, pointA);

    return { pointA, pointB, pointC, pointD };
}

function randPointsInParallelogram(v1, v2, pointA, noOfPoints) {
    const circleCoordinates = [];
    for (let i = 0; i < noOfPoints; i++) {

        const scaledV1 = r.Vector2Scale(v1, Math.random())
        const scaledV2 = r.Vector2Scale(v2, Math.random())

        const sumOfScaledV1andV2 = r.Vector2Add(scaledV1, scaledV2)
        circleCoordinates.push(r.Vector2Add(pointA, sumOfScaledV1andV2));
    }
    return circleCoordinates;
}

function setup() {

    const screen = {
        HEIGHT: 800,
        WIDTH: 800,
    }

    r.InitWindow(screen.WIDTH, screen.HEIGHT, "");
    r.SetTargetFPS(60);

    const noOfPoints = 1000;
    const v1 = { x: 400, y: 120 }
    const v2 = { x: 105, y: 400 }


    const { pointA, pointB, pointC, pointD } = calcVertices(v1, v2);

    const points = {
        a: pointA,
        b: pointB,
        c: pointC,
        d: pointD,
    }

    const circleCoordinates =
        randPointsInParallelogram(v1, v2, pointA, noOfPoints);

    return { screen, points, circleCoordinates };
}

function drawParallelogram(p) {

    r.DrawLineV(p.a, p.b, r.RED);
    r.DrawLineV(p.b, p.d, r.RED);
    r.DrawLineV(p.d, p.c, r.RED);
    r.DrawLineV(p.c, p.a, r.RED);
}

function drawRandPointsInParallelogram(circleCoordinates) {
    for (const element of circleCoordinates) {
        r.DrawCircle(element.x, element.y, 5, r.YELLOW)
    }
}

function draw(world) {

    r.ClearBackground(r.WHITE);

    const p = world.points;

    drawParallelogram(p);
    drawRandPointsInParallelogram(world.circleCoordinates);

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
