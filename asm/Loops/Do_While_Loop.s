	.global main
main:
	MOV R0, #0
do:
	ADD R0, R0, #1		@ R0++
	CMP R0, #10			@ Compare R0 with 10
	BLT do				@ If R0 <= 10? If true, go to `do`, else go to next line 
end:
	BX LR
