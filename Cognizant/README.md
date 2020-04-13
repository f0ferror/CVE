## Exploit Cognizant v 4.13 

Target search 
GHDB : 
allintitle: "Digital operations fabric"
inurl: cognizant.com/#/login
	
<br />
<br />

## Weak Encryption/Decryption Logic


Target uses weak CryptoJS AES CBC encryption logic and has plaintext IV and key values showing javascript. Any attacker can be encrypt/decrypt this same logic after checking out the javascript code; eg. (chrome/firefox/IE) console
Encryption : 
![image](https://github.com/f0ferror/CVE/blob/master/Cognizant/Encrypt_decrypt/poc_screenshot/weak_encryption_PoC.png)

Decryption : 
![image](https://github.com/f0ferror/CVE/blob/master/Cognizant/Encrypt_decrypt/poc_screenshot/weak_decryption_PoC.png)


Download encryption/decryption script locally and test encryption/decryption logic <br />
github : git clone https://github.com/f0ferror/CVE/tree/master/Cognizant/Encrypt_decrypt
![image](https://github.com/f0ferror/CVE/blob/master/Cognizant/Encrypt_decrypt/poc_screenshot/cryptojs_code.png)


### Auth Bypass
This exploit require to have access to application beforehand. 
 
  

for more information, read https://CVE/..


## References 
https://cryptojs.gitbook.io/docs/
