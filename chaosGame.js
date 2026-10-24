
const r = require('raylib');

function setup() {

    const screen = {
        HEIGHT: 800,
        WIDTH: 800,
        FPS: 60,
        title: "Chaos Game"
    }

    const triangleVertices = [
        { x: 600, y: 500 },
        { x: 300, y: 250 },
        { x: 100, y: 500 }
    ]

    let point = { x: 300, y: 300 };

    const scaledDownBy2 = {

        x: ((point.x - triangleVertices[2].x) / 2) + triangleVertices[2].x,
        y: (point.y - triangleVertices[2].y) / 2 + triangleVertices[2].y,
    }

    const triangle = {
        point: scaledDownBy2,
        vertices: triangleVertices,

    }

    r.SetTargetFPS(screen.FPS)
    r.InitWindow(screen.WIDTH, screen.HEIGHT, screen.title);

    return { screen, triangle };

}

function draw(world) {

    const vertices = world.triangle.vertices;
    const point = world.triangle.point;

    r.ClearBackground(r.WHITE);

    r.DrawCircle(point.x, point.y, 3, r.DARKGREEN);
    r.DrawTriangleLines(vertices[0], vertices[1], vertices[2], r.RED);

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
