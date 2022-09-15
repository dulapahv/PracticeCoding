	.data
	@ Define all the strings and variables
	.balign 4
	get_A: .asciz "A: "
	
	.balign 4
	get_B: .asciz "B: "
	
	@ printf and scanf use %d in decimal numbers
	.balign 4
	pattern: .asciz "%d"
	
	@ Declare and initialize variables
	.balign 4
	A: .word 0
	
	.balign 4
	B: .word 0
	
	@ Output message pattern
	.balign 4
	A_greater: .asciz "A is greater than B"
	
	.balign 4
	B_greater: .asciz "B is greater than A"
	
	.text
	
	@ main function
	.global main

main:
	@ Print A:
	LDR R0, addr_get_A
	BL printf
	
	@ Get A from user via keyboard
	LDR R0, addr_pattern
	LDR R1, addr_A
	BL scanf
	
	@ Print A:
	LDR R0, addr_get_B
	BL printf
	
	@ Get B from user via keyboard:
	LDR R0, addr_pattern
	LDR R2, addr_B
	BL scanf
	
	@ Compare A and B
	CMPGE R1, R2
	MOV R0, R1
	BLE end
else:
	MOV R0, R2
end:
	BX lr
	
	
@ Define pointer variables
addr_get_A: .word get_A
addr_get_B: .word get_B
addr_pattern: .word pattern
addr_A: .word A
addr_B: .word B

@ Declare printf and scanf functions to be linked with
.global printf
.global scanf
