function calculer()
{
	var a = "1";
	var b = "2";
	var c = a + b;

	document.writeln("  a: ("+typeof(a)+") <br/>");
	document.writeln("  b: ("+typeof(b)+") <br/>");
	document.writeln("  c: ("+typeof(c)+") == " + c);
	document.writeln("<br/>");

	a = parseInt(a);
	b = parseInt(b);
	c = a + b;

	document.writeln("  a: ("+typeof(a)+") <br/>");
	document.writeln("  b: ("+typeof(b)+") <br/>");
	document.writeln("  c: ("+typeof(c)+") == " + c);
}