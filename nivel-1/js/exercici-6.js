// Reemplaça la paraula blau per la paraula verd del següent text Tinc un cotxe de color blau. 
var frase = "Tinc un cotxe de color blau."
frase = frase.replace("blau","verd");
alert(frase);

// Després intenta fer-ho remplaçant les o per les u.
frase = "Tinc un cotxe de color blau."
frase = frase.replace(/[o]/gi,'u');
alert(frase);