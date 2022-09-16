	.global main
main:
	MOV R4, #12
	MOV R5, #10
	MOV R0, R4		@ Pass R0 to function `sum`
	MOV R1, R5		@ Pass R1 to function `sum`
	BL sum
sum:				@ Entry point of function `sum`
	ADD R0, R0, R1	@ R0 = R0 + R1
	B end
end:
	BX LR
