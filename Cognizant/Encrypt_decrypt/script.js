
//$(document).ready(initialize);

function initialize() {
  $('#textInput').val('Enter Some Text Here');
}

function encrypt() {
  var plainText = $('#textInput').val();
   
  var key = CryptoJS.enc.Utf8.parse('7061737323313233'); 
  var iv = CryptoJS.enc.Utf8.parse('7061737323313233'); 
  var plain = CryptoJS.enc.Utf8.parse(plainText);
  
  var encryption = CryptoJS.AES.encrypt(plain, key, 
	{ 
		 keySize: 128 / 8, 
		 iv: iv, 
		 mode: CryptoJS.mode.CBC,
		 padding: CryptoJS.pad.Pkcs7 
	}); 
	 

  var Encrypted_txt = encryption.ciphertext.toString(CryptoJS.enc.Base64);
  var Decrypt_text = plainText

  $('#key').html(key.toString());
  $('#iv').html(iv.toString());

  $('#plainText').html(plainText);
  $('#cipherText').html(Encrypted_txt);
  $('#decrypted').html(Decrypt_text);
  
  
}

function decrypt(){
  var plainText = $('#entextInput').val();
   
  var key = CryptoJS.enc.Utf8.parse('7061737323313233'); 
  var iv = CryptoJS.enc.Utf8.parse('7061737323313233'); 
  
  var encryptionm = CryptoJS.AES.decrypt(plainText, key, 
	{ 
		 keySize: 128 / 8, 
		 iv: iv, 
		 mode: CryptoJS.mode.CBC,
		 padding: CryptoJS.pad.Pkcs7 
	}); 
	 

  var Encrypted_txt = plainText;
  var Decrypt_text = encryptionm.toString(CryptoJS.enc.Utf8)

  $('#key').html(key.toString());
  $('#iv').html(iv.toString());

  $('#plainText').html(plainText);
  $('#cipherText').html(Encrypted_txt);
  $('#decrypted').html(Decrypt_text);
  

}



