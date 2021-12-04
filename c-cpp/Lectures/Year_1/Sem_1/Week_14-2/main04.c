#include "dyn_string.h"

#include <stdio.h>
#include <string.h>

#include <stdlib.h>
#include <ctype.h>

#define MAX_STUDENT_NAME 19

struct St_rec {
    int id;
    char name[MAX_STUDENT_NAME + 1];
    int score;
};

typedef struct St_rec Student_rec;

void parse_student_rec(
    Student_rec* rec, const char* data, size_t len)
{
    const char* cur = data;
    const char* end = data + len;
    for (int i = 0; i < len; ++i) {
        if (data[i] == ',') {
            end = data + i + 1;
            break;
        }
    }

    rec->id = atoi(cur);

    for (cur = end; isspace(*cur); ++cur)
        ;
    end = data + len;
    size_t n = end - cur;
    for (int i = cur - data; i < len; ++i) {
        if (data[i] == ',') {
            end = data + i + 1;
            n = end - cur - 1;
            break;
        }
    }

    if (MAX_STUDENT_NAME < n)
        n = MAX_STUDENT_NAME;
    strncpy(rec->name, cur, n);
    rec->name[n] = 0;

    cur = end;
    rec->score = atoi(cur);
}

int main(int argc, char** argv)
{
    const char* in_fname = "./students000.txt";
    if (argc > 1) {
        in_fname = argv[1];
    }

    FILE* ifile = fopen(in_fname, "r");

    Student_rec rec[10];
    const size_t max_n = sizeof(rec) / sizeof(*rec);
    size_t n = 0;

    String* line = string_new();
    while (!feof(ifile)) {
        if (read_line_string(ifile, line) != 0) {
            fprintf(stderr, "error reading line input\n");
            goto fin;
        }

        if (line->len == 0)
            break;

        if (n >= max_n)
            break;
        parse_student_rec(rec + n, line->str, line->len);
        ++n;
    }

    for (size_t i = 0; i < n; ++i) {
        fprintf(
            stdout, "%d,%s,%d\n",
            rec[i].id, rec[i].name, rec[i].score);
    }

fin:
    string_delete(line);
    fclose(ifile);
    return 0;
}