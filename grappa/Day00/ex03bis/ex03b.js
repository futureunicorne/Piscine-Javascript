function jeu(res)
{
	var res = parseInt(document.getElementById('nbr').value);

	if (isNaN(res))
	{
		alert("Votre saisie est incorrecte");
		return ;
	}
	if (res === tmp)
	{
		alert("Bravo vous avez trouvez, le nombre etait bien " + tmp + " ,vous avez trouvez en " + i + " coup");
		return true;
	}
	else if (res > tmp)
	{
		document.getElementById('nbrinfo').innerHTML = 'C est moins';
	}
	else
	{
		document.getElementById('nbrinfo').innerHTML = 'C est plus';
	}
	i++;
	return false;
}

var tmp = Math.floor(Math.random() * 101);
var i = 0;
