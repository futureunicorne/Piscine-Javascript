function boucle2()
{
	var i = 0;
	var length = prompt("Merci de definir la taille du tableau :", 0);
	var val = parseInt(length);
	var tab = [];
	while (i < val)
	{
		res = prompt("merci de remplir les cases une a une :", 0);
		val2 = parseInt(res);
		tab[i] = val2 * val2;
		i++
	}
	alert(tab);
}

function boucle1()
{
	var tab = [12, 3, 9];
	var i = 0;
	while (i < tab.length)
	{
		tab[i] *= tab[i];
		i++;
	}
	alert(tab);
}