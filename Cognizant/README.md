This vulnerability hasn't been tagged with CVE#, currently waiting for CVE.org -  

## Target Search 

**Target** : Cognizant v4.13 <br />
**GHDB** : 
<br />-allintitle: "Digital operations fabric"
 
<br />

## Weak Encryption/Decryption Logic
Cognizant provides Digital Operation Fabric platform which helps customers to easily manage data and operate https://www.cognizant.com/cognizant-digital-operations
On recent web platform, "Digital Operation Fabric" product version 4.13 has hard-coded IV and Key values on one of web application javascript(login.controller.js) e.g. https://*.*/dofui/app/components/login/login.controller.js 
Target uses simple AES CBC encryption with hard-coded key and IV value on login form and stores encrypted values in log files internally(eg. \LogFiles\DOFAPI\FDIC370_17.03.2020.log or \LogFiles\ADMINAPI\FDIC370_20.03.2020.log)

This allows malicious user easily decrypt/encrypt username and password value. This may allow attacker for bruteforcing, username enumeration etc. 
To test the WEAK encryption/decryption simply on Internet Browser, you can run developer menu by CTRL+SHIFT+I(Inspect Element) or press [F12] on Chrome/Firefox.
You can go to [console] tab and copy and paste below script and run. Please see more details on PoC github. https://github.com/f0ferror/CVE/tree/master/Cognizant
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


<br />
<br /><br />
<br />
## References 
https://cryptojs.gitbook.io/docs/
