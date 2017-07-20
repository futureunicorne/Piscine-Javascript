function	addition(tab)
{
	if (tab.length === 0)
		alert("Tableau vide");
	var i = 0;
	var res = 0;
	while (i < tab.length)
	{
		res = res + tab[i];
		i++;
	}
	return (res);
}

function	afficher()
{
	var tab = [-2, 1, 4];

	alert(addition(tab));
	//alert(addition(tab[tab.length - 2]));
}