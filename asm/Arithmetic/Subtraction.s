	.global main	@ main function
main:
	MOV R2, #22		@ R2 = 22
	MOV R1, #10		@ R1 = 10
	SUB R0, R2, R1	@ R0 = R2 - R1
	BX LR
