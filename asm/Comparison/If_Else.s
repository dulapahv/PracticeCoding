	.global main
main:
	MOV R1, #2
	MOV R2, #4
	CMP R1, R2		@ If (between R1 and R2)
	BGT else		@ R2 > R1? if true, go to next line, else go to `else`
	MOV R0, #1
	B end			@ go to end
else:
	MOV R0, #0
end:
	BX LR
