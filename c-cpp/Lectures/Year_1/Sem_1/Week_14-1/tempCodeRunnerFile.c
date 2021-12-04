#include "dyn_string.h"

#include <stdlib.h>

String* string_new()
{
    String* s = (String*)malloc(sizeof(String));
    if (s) {
        s->str = NULL;
        s->len = 0;
        s->size = 0;
    }
    return s;
}

void string_delete(String* s)
{
    if (s) {
        free(s->str);
        free(s);
    }
}

size_t string_length(String* s)
{
    return s? s->len: 0;
}

#define DEFAULT_STR_GROWTH 5

static char* str_realloc(char* str, size_t len)
{
    if (str == NULL) { // "malloc" here is not needed nowadays
        return (char*)malloc(len);
    }
    return (char*)realloc(str, len);
}

static int str_grow(String* s, size_t new_size)
{
    if (s->size < new_size) {
        size_t new_sz = s->size + DEFAULT_STR_GROWTH;
        if (new_sz < new_size) {
            new_sz = new_size;
        }

        char* new_str = str_realloc(s->str, new_sz);
        if (new_str == NULL) {
            return -1;
        }

        s->str = new_str;
        s->size = new_sz;
    }
    return 0;
}

int read_line_string(FILE* f, String* s)
{
    if (str_grow(s, 1) != 0) {
        return -1;
    }

    size_t nc = 0;
    for (int c; (c = fgetc(f)) != EOF;) {
        if (str_grow(s, nc + 2) != 0) {
            return -1;
        }

        s->str[nc++] = c;
        if (c == '\n')
            break;
    }

    if (s->str) {
        s->str[nc] = '\0';
        s->len = nc;
    }
    return 0;
}