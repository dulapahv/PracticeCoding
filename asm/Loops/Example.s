@ Find summation of 0...10

	.global main
main:
	MOV R0, #0		@ Store sum
	MOV R1, #1		@ Store number of loops
for:
	CMP R1, #10		@ Compare between R1 and 10
	BGT end			@ If R1 > 10, go to `end`
	ADD R0, R0, R1	@ R0 += R1 (Sum of each number of loop)
	ADD R1, R1, #1	@ R1++ (Increment number of loop)
	B for			@ Branch back to label `for`
end:
	BX LR
