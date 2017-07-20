function rayon()
{
	var ray = prompt("Merci de renseigner le rayon:", "0");
	var num = parseInt(ray);
	if (isNaN(num))
	{
		alert("saisie errone");
		return (num);
	}
	else
		return (2 * num * 3.14);
}	