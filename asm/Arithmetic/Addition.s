	.global main	@ main function
main:
	MOV R1, #22		@ R1 = 12
	MOV R2, #10		@ R2 = 10
	ADD R0, R1, R2	@ R0 = R1 + R2
	BX LR			@ Return R0
