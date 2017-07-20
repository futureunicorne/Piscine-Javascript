function jeu()
{
	var tmp = Math.floor(Math.random() * 101);
	var res = parseInt(prompt("Tentez votre chance :"));
	var i = 1;


	while (isNaN(res) === false)
	{
		if (res === tmp)
		{
			alert("Bravo vous avez trouvez, le nombre etait bien " + tmp + " ,vous avez trouvez en " + i + " coup");
			return true;
		}
		else if (res > tmp)
			res = parseInt(prompt("C est moins :"));
		else
			res = parseInt(prompt("C est plus :"));
		i++;
	}
	alert("Votre saisie est incorrecte");
}