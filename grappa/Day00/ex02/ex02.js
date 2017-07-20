function calcule()
{
	var cpt = parseInt(prompt("Combien de nombre voulez vous calculer"));
	if (isNaN(cpt))
	{
		alert("saisie incorect");
		return false;
	}
	var i = 0;
	var res = 0;
	var tmp = 0;

	while (i < cpt)
	{
		tmp = parseInt(prompt("Entrer un nombre :"));
		if (isNaN(tmp))
		{
			console.log(tmp);
			return false;
		}
		res += tmp;
		i++;
	}
	console.log(res);
}