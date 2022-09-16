	.data
	.balign 4		@ Request 4 bytes of space
var_1: .word 12		@ var_1 = 12

	.balign 4		@ Request 4 bytes of space
var_2: .word 10		@ var_2 = 10

	.text			@ Text segment (not used yet, but required)

	.global main
main:
	LDR R3, addr_var_1	@ R3 = Address of var_1
	LDR R1, [R3]		@ R1 = Dereference R3 (value of var_1)
	LDR R3, addr_var_2	@ R3 = Address of var_2
	LDR R2, [R3]		@ R2 = Dereference R3 (value of var_2)
	ADD R0, R1, R2
	BX LR

@ Define pointer variables (Stores memory address)
addr_var_1: .word var_1
addr_var_2: .word var_2
