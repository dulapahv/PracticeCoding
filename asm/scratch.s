; Hello World x86 Assembly
; Linux System Call Method

section .data
 
msg     db  'Hello world!',0xA
len     equ $ - msg  
 
section     .text
global      _start      ;must be declared for linker (ld)
 
_start:                 ;tell linker entry point
 
    mov     edx,len		;length of string arg
    mov     ecx,msg		;string arg
    mov     ebx,1       ;file descriptor (stdout)
    mov     eax,4       ;system call number (sys_write)
    int     0x80        ;call kernel
 
    mov     eax,1       ;system call number (sys_exit)
    int     0x80        ;call kernel