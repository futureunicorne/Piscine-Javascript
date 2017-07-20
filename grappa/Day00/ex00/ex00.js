function validateForm()
{
	if (document.getElementById('myField').value == '')
	{
		document.writeln('<div id="myFieldError">');
		document.writeln('</div>');
		document.getElementById('myFieldError').innerHTML = "LE CHAMPS  EST VIDE";
		return false;
	}
	else
	{
		document.writeln('<div id="myFieldTrue">');
		document.writeln('</div>');
		document.getElementById('myFieldTrue').innerHTML = "LE CHAMPS  EST REMPLI";
		return false;
	}
}

function afficher()
{
	document.writeln('<form id="myForm" onsubmit="return validateForm()">');
	document.writeln('<div>');
	document.writeln('<label for="myField">Champion :</label>');
	document.writeln('<input type="text" id="myField" size="40">');
	document.writeln('</div>');
	document.writeln('<input type="submit" id="myField">');
	document.writeln('</form>');

	document.getElementById('myField').value="Veuillez saisir votre texte";

}