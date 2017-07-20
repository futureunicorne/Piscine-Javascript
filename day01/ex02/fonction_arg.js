function multiplie(x)
{
	if (!x)
		x = 8;
	console.log(x);
	return (3 * x);
}

function affiche()
{
	var a = 3;
	var b = 2;

	alert(multiplie(a));
	alert(multiplie(b));
	alert(multiplie());
}