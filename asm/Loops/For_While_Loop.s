	.global main
main:
	MOV R0, #0
for:
	CMP R0, #10		@ Compare R1 with 10
	BGT end			@ If R0 > 10? If true, go to `end`, else go to next line
	ADD R0, R0, #1	@ R1++
	B for			@ Branch back to label `for`
end:
	BX LR

@ for (int i = 0; i < 10; i++)

@ int i = 0;
@ while (i < 10)
@ 	i++;
