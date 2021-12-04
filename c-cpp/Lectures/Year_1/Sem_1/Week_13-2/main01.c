#include <stdio.h>

const double PI = 22.0 / 7;

// traditional way to define constant in C
// #define PI 3.1415

// double cal_sphere_volume(void); // C and C++
// double cal_sphere_volume(); // C++ only
//    double d = cal_sphere_volume(); // How the function is used

double cal_sphere_volume(double r)
{
    return 4.0 / 3 * PI * r * r * r;
}

int main(void)
{
    FILE* fp = fopen("./table.html", "w+");

    fprintf(fp, "<table>\n");
    fprintf(fp, "<tr>\n");
    fprintf(fp, "<td>A</td>\n");
    fprintf(fp, "<td>B</td>\n");
    fprintf(fp, "<td>C</td>\n");
    fprintf(fp, "<td>D</td>\n");
    fprintf(fp, "<td>E</td>\n");
    fprintf(fp, "</tr>\n");

    for (int i = 0; i < 100; ++i) {
        double r = i * 0.1;
        if (i % 10 == 0) {
            fprintf(fp, "<tr>\n");
        }

        fprintf(fp, "<td>%9.4f</td>", cal_sphere_volume(r));
        // fprintf(fp, "<td>%d</td>", i % 10);

        if (i % 10 == 9) {
            fprintf(fp, "</tr>\n");
        }
    }

    fprintf(fp, "</table>\n");

    fclose(fp);
    return 0;
}

int main0(void)
{
    FILE* fp = fopen("./table.txt", "w+");

    for (int i = 0; i < 100; ++i) {
        double r = i * 0.1;
        if (i % 10 != 0) {
            fprintf(fp, " ");
        }

        // fprintf(fp, "%9.4f", cal_sphere_volume(r));
        fprintf(fp, "%d", i % 10);

        if (i % 10 == 9) {
            fprintf(fp, "\n");
        }
    }

    fclose(fp);
    return 0;
}