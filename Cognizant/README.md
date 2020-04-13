## Exploit Cognizant v 4.13 

Target search <br />
GHDB : 
<br />allintitle: "Digital operations fabric"
<br />inurl: cognizant.com/#/login
	
<br />
<br />

## Weak Encryption/Decryption Logic
Target uses weak CryptoJS AES CBC encryption logic and has plaintext IV and key values showing javascript. Any attacker can be encrypt/decrypt this same logic after checking out the javascript code; eg. (chrome/firefox/IE) console.
<br />

#### Encryption :
![image](https://github.com/f0ferror/CVE/blob/master/Cognizant/Encrypt_decrypt/poc_screenshot/weak_encryption_PoC.png)
<br />

#### Decryption : 
![image](https://github.com/f0ferror/CVE/blob/master/Cognizant/Encrypt_decrypt/poc_screenshot/weak_decryption_PoC.png)
<br />
<br />

Download encryption/decryption script locally and test encryption/decryption logic 
<br /><br />##### github : git clone https://github.com/f0ferror/CVE/tree/master/Cognizant/Encrypt_decrypt
<br />
![image](https://github.com/f0ferror/CVE/blob/master/Cognizant/Encrypt_decrypt/poc_screenshot/cryptojs_code.png)

<br /><br /><br />
### Auth Bypass
This exploit require to have access to application beforehand. 
 
  

for more information, read https://CVE/..


## References 
https://cryptojs.gitbook.io/docs/
