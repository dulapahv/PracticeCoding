	.global main
main:
	MOV R0, #0
for:
	CMP R0, #10		@ Compare R1 with 10
	BGE end			@ If 10 > R0?
	ADD R0, R0, #1	@ R1 += 1
	B for			@ Branch back to label `for`
end:
	BX LR

@ for (int i = 0; i < 10; i++)
