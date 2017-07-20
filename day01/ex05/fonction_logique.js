function	soustrait(x)
{
	var res = x - 2;
	if (res >= 0)
		return (res);
	else
		return ("Nombre négatif!"); 
}

function	affiche()
{

	var tab = [];
	var val = 3;
	var i = 0;
	while (i < val)
	{
		res = prompt("Choose Number", 0);
		tab[i] = parseInt(res);
		i++;
	}
	i = 0;
	while (i < val)
	{
		alert(soustrait(tab[i]));
		i++;
	}
}