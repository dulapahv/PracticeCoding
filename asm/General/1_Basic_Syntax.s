; An assembly program can be divided into three sections:
; 1. data (section.data)
; 2. bss (section.bss)
; 3. text

; 1. data (section.data)
; - used for declaring initialized data or constants. This data does not change at runtime.
; - declare various constant values, file names, or buffer size, etc., in this section

; 2. bss (section.bss)
; - used for declaring variables

; 3. text
; - used for keeping the actual code
; - must begin with the declaration global _start, which tells the kernel where the program execution begins.
; The syntax is:
; section.text
;   global _start

; _start:
;   [code]


; Assembly Language Statements
; Assembly language programs consist of three types of statements:
; 1. Executable instructions or instructions
; 2. Assembler directives or pseudo-ops
; 3. Macros

; 1. Executable instructions or instructions
; - tell the processor what to do
; - each instruction consists of an operation code (opcode)
; - each executable instruction generates one machine language instruction

; 2. Assembler directives or pseudo-ops
; - tell the assembler about the various aspects of the assembly process.
; - are non-executable and do not generate machine language instructions.

; 3. Macros
; - a text substitution mechanism.


; Syntax of Assembly Language Statements
; [label] mnemonic [operands] [;comment]

; The fields in the square brackets are optional.
; A basic instruction has two parts, the first one is the name of the instruction (or the mnemonic), 
; which is to be executed, and the second are the operands or the parameters of the command.

; Example:
; INC COUNT         ; Increment the memory variable COUNT
; MOV TOTAL, 48     ; Transfer the value 48 in the memory variable TOTAL
; ADD AH, BH        ; Add the content of the BH register into the AH register
; AND MASK1, 128    ; Perform AND operation on the variable MASK1 and 128
; ADD MARKS, 10     ; Add 10 to the variable MARKS
; MOV AL, 10        ; Transfer the value 10 to the AL register