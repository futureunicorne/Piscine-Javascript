function jourDeLaSemaine()
{
	var toaday = new Date;
	var jour = toaday.getMonth();
	var jour_francais;
	switch(jour) 
	{
		case 0 : jour_francais="Janvier";break;
		case 1 : jour_francais="Fevrier";break;
		case 2 : jour_francais="Mars";break;
		case 3 : jour_francais="Avril";break;
		case 4 : jour_francais="Mai";break;
		case 5 : jour_francais="Juin";break;
		case 6 : jour_francais="Juillet";break;
		case 7 : jour_francais="Aout";break;
		case 8 : jour_francais="Septembre";break;
		case 9 : jour_francais="Octobre";break;
		case 10 : jour_francais="Novembre";break;
		case 11 : jour_francais="Decembre";break;
		default : jour_francais="it's not exist";break;

	}
	alert("nous sommes en " + jour_francais);
}