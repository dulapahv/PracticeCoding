#include <raylib.h>
// Navigate to Makefile directory
// mingw32-make
int main() {
    const int screenWidth = 800;
    const int screenHeight = 450;

    InitWindow(screenWidth, screenHeight, "Raylib Test");
    SetTargetFPS(60);

    while (!WindowShouldClose()) {
        BeginDrawing();
        ClearBackground(RAYWHITE);

        static float rotation = 0.0f;
        rotation += 0.5f;

        DrawRectangle(100, 100, 100, 200, RED);
        DrawRectangleV(Vector2{300, 200}, Vector2{100, 30}, BLUE);
        DrawRectangleRec(Rectangle{200, 200, 100, 100}, GREEN);
        DrawRectanglePro(Rectangle{200, 200, 100, 100}, Vector2{50, 50}, rotation, YELLOW);

        DrawCircle(400, 300, 64, ORANGE);

        DrawTriangle(Vector2{100, 0}, Vector2{0, 10}, Vector2{20, 30}, PURPLE); // Starts at (100,0) then go to x = 0 and y decrease by 10. 
        //Then go to x = 20 and y decreases by 30 (compared to second vector).

        DrawRectangleLines(250, 250, 100, 100, BLACK);
        DrawRectangleLinesEx(Rectangle{275, 275, 100, 100}, 10, BLACK);

        static float timer = 0.0f;
        static int sides = 0;
        timer += GetFrameTime();
        if (timer > 0.5f) {
            timer = 0.0f;
            sides++;
        }

        DrawPoly(Vector2{300, 300}, sides % 12, 30, 0.0, BLUE);

        EndDrawing();
    }
}l