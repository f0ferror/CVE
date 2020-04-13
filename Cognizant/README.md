## Exploit Cognizant v 4.13 
*Weak Encryption/Decryption
*/Weak_Encryption_Decryption

*Auth_Bypass/Prive_Esc
*/..working
*Target search 
GHDB : allintitle: "Digital operations fabric"
	inurl: cognizant.com/#/login
	
### Weak Encryption/Decryption with CryptoJS AES Logic
Target uses weak encryption/decryption mechanism. also has plaintext IV and key value showing on login.controller.*.js javascript.
easily check with internet explorer(chrome/firefox/IE) console
encryption : 
![image](https://github.com/f0ferror/CVE/blob/master/Cognizant/Encrypt_decrypt/poc_screenshot/weak_encryption_PoC.png)

decryption : 
![image](https://github.com/f0ferror/CVE/blob/master/Cognizant/Encrypt_decrypt/poc_screenshot/weak_decryption_PoC.png)


### Auth Bypass
This exploit require to have access to application beforehand. 
 
  

for more information, read https://CVE/..


## References 
https://cryptojs.gitbook.io/docs/
