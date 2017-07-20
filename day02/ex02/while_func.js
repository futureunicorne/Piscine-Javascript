function	afficher()
{	
	var msg = prompt("Merci de saisir la chaine de caractere");

	while (msg.indexOf("\"") == -1)
		msg = prompt("Merci de saisir la chaine de caractere :");
	alert("La chaine est : \"" + msg + "\"");
}
