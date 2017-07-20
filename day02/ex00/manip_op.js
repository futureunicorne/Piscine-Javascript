function	operand()
{
	var b = 2;

	a = b++; alert("b++ = " + (b));
	a = 0; b = 2;
	a = ++b; alert("++b = " + b);
	a = 0; b = 2;
	a = b--; alert("b - - = " + b);
	a = 0; b = 2;
	a = --b; alert("- -b = " + b);
}