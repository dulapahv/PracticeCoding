	.global main
main:
	MOV R0, #22
	BL printf

@ Declare printf function to be linked with
.global printf
