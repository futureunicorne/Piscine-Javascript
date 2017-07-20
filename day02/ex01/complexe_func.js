function	surface_cercle()
{
	var ask = prompt("Merci de renseigner le rayon : ", 0);
	ask = parseInt(ask);
	if (isNaN(ask))
		return ("saisie incorrect");
	ask *= ask;
	return (ask * Math.PI);
}