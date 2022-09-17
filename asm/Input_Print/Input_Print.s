	.data
	.balign 4							@ Request 4 bytes of space
	prompt: .asciz "Height: "			@ String for input prompt

	.balign 4							@ Request 4 bytes of space
	pattern: .asciz "%d"				@ Pattern for scanf

	.balign 4							@ Request 4 bytes of space
	answer: .asciz "Your height: %d\n"	@ String for output message

	.balign 4							@ Request 4 bytes of space
	number: .word 0						@ Variables to store user input

	.balign 4							@ Request 4 bytes of space
	lr_bu: .word 0						@ Variables to holds the address to return to when a subroutine call completes (LR)

	.text								@ Text segment

	.global main						@ Main function
	.func main							@ Tell libc where fn main is located (when using libc function)
main:
	@ Backup the value inside Link Register (LR)
	LDR R1, addr_lr_bu					@ R1 = Address of lr_bu
	STR LR, [R1]						@ Store the address into R1 -> R1 into addr_lr_bu -> variables lr_bu

	@ Load and print question
	LDR R0, addr_prompt					@ R0 = Address of addr_prompt
	BL printf							@ Print the question

	@ Define pattern to scanf and where to store number
	LDR R0, addr_pattern				@ R0 = Address of pattern
	LDR R1, addr_number					@ R1 = Address of number to store input (scanf(%d, &number))
	BL scanf							@ Read input

	@ Print the message with number
	LDR R0, addr_answer					@ R0 = Address of output message
	LDR R1, addr_number					@ R1 = Address of stored number
	LDR R1, [R1]						@ R1 = Dereference R1 (value of number)
	BL printf							@ Print output message

	@ Load the value of lr_bu to LR
	LDR LR, addr_lr_bu					@ LR = Address of lr_bu
	LDR LR, [lr]						@ LR = Dereference LR (value of addr_lr_bu -> lr_bu)
	BX LR								@ Return to kernel


@ Define pointer variables
addr_prompt: 	.word prompt
addr_pattern: 	.word pattern
addr_answer: 	.word answer
addr_number: 	.word number
addr_lr_bu: 	.word lr_bu

@ Declare printf and scanf functions to be linked with
.global printf
.global scanf
