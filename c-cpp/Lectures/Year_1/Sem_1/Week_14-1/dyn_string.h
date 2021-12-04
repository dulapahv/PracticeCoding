#ifndef DYN_STRING_H
#define DYN_STRING_H

#include <stdio.h>
#include <stddef.h>

typedef struct Str String;

String* string_new(void);
void string_delete(String* s);

size_t string_length(String* s);
String* string_copy(const String* s);
String* string_concat(String* s1, const String* s2);
int string_compare(const String* s1, const String* s2);

int read_line_string(FILE* f, String* s);

struct Str {
    char* str;
    size_t len;
    size_t size;
};

#endif /* DYN_STRING_H */