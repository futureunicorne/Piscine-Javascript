function afficher() 
{
	var msg = "Bonjour";
	var width = prompt("Merci de saisir la largeur :", "0");
	var height = prompt("Merci de saisir la longeur :", "0");
	var num1 = parseInt(width);
	var num2 = parseInt(height);
	if (isNaN(num1)  || isNaN(num2))
	{
		alert("saisie errone");
		return;
	}
	alert("la surface du rectangle est de =" + width * height);
	alert("le perimetre du rectangle est de =" + ((width + height) * 2));
 }