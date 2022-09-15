	.global main
main:
	MOV R1, #2
	MOV R2, #4
	MOV R0, #0
	CMP R1, R2		@ If (between R1 and R2)
	BGT end			@ R2 > R1? if true, go to next line, else go to `end`
	MOV R0, #1
end:
	BX LR
