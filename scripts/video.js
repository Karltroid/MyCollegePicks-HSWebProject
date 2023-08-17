var open = false;

function openvideo(id)
{
	document.getElementById(id).style.visibility = "visible";
}

function closevideo(id)
{
	document.getElementById(id).style.visibility = "hidden";
}

function opennav()
{
	if (open == true)
	{
		document.getElementById('my-picks').style.visibility = "hidden";
		open = false;
	}
	else
	{
		document.getElementById('my-picks').style.visibility = "visible";
		open = true;
	}
	
}