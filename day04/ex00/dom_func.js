function modif_paragraphe()
{
	var line = document.getElementById("premier");
	var text = "Premier paragraphe <b>corrige</b>";
	line.innerHTML = text;
}

function	centrage_h1()
{
	res = (document.getElementsByTagName("h1"))[0];
	res.setAttribute("align", "Center");

}