
var images = new Array;
images[0] = "res/conference.png";
images[1] = "res/itr_poster.png";
images[2] = "res/bugs.png";

var hrefs = new Array;
hrefs[0] = "conference.html";
hrefs[1] = "events.html";
hrefs[2] = "events.html";

var captions = new Array;
captions[0] = "USAM's undergraduate research conference - it will take place on March 4, 2017";
captions[1] = "Intent to Register 2017 and Applied Math information session";
captions[2] = "A seminar talk by guest speaker Tyler Pattenden discussing how prophage provide a safe haven for adaptive exploration in temperate viruses";

var currentimage = 0;
var play = true;




function clickCounter()
{
	if(typeof(Storage) !== "undefined")
	{
		if (localStorage.clickcount == 0)
		{
			localStorage.clickcount = Number(localStorage.clickcount) + 1;
		}
		else
		{
			localStorage.clickcount=1;
		}
		document.getElementById("result").innerHTML= + localStorage.clickcount + " people have liked this page.";
	}
	else
	{
		document.getElementById("result").innerHTML = "Your browser does not support web storage.";
	}
}

function setselected(image)
{
	for (var i = 1; i < images.length + 1; i++)
	{
		var e = document.getElementById("pb"+i);
		var s = e.className;

		if (s.includes("selected"))
		{		
			document.getElementById("pb"+i).className = s.replace(" selected", " ");;
		}
	}

	var e = document.getElementById("pb"+image);

	e.className = e.className + " selected";
	
}

function changeimage(image)
{
	currentimage = image;
	document.getElementById("picture_frame").style.backgroundImage = "url("+images[currentimage]+")";
	document.getElementById("picture_link").href=hrefs[currentimage]; 
	document.getElementById("caption").innerHTML = captions[currentimage];
	play = false;

	setselected(currentimage + 1);
	
}

function playphotos(image)
{
	if (!play)
		return;

	currentimage = image;
	document.getElementById("picture_frame").style.backgroundImage = "url("+images[currentimage]+")";
	document.getElementById("picture_link").href=hrefs[currentimage]; 
	document.getElementById("caption").innerHTML = captions[currentimage];

	setselected(currentimage + 1);

	if (currentimage == images.length - 1)
		currentimage = 0;
	else
		currentimage++;

	if (play)
		setTimeout("playphotos("+currentimage+")", 3500);
}

playphotos(currentimage);