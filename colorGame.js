var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("winColor");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var mode = 6;
resetButton.addEventListener("click", function() {setGame(mode);}, false);
easyButton.addEventListener("click", switchEasy);
hardButton.addEventListener("click", switchHard);
setGame(mode);

function switchEasy()
{
	if (mode === 3)
	{
		return;
	}
	else
	{
		mode = 3;
		easyButton.classList.toggle("selected");
		hardButton.classList.toggle("selected");
		for (var i = 3; i < squares.length; i++)
		{
			squares[i].style.backgroundColor = "#232323"
		}
		setGame(mode);
	}
}

function switchHard()
{
	if (mode === 6)
	{
		return;
	}
	else
	{
		mode = 6;
		easyButton.classList.toggle("selected");
		hardButton.classList.toggle("selected");
		setGame(mode);	
	}
}

function setGame(num)
{
	colors = generateColorList(num)
	pickedColor = pickColor(num);
	colorDisplay.textContent = pickedColor;
	message.textContent = "";
	resetButton.textContent = "New Colors";
	for(var i = 0; i < num; i++)
	{
		squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener("click",
			function()
			{
				var clickedColor = this.style.backgroundColor;
				if (clickedColor === pickedColor)
				{
					h1.style.backgroundColor = pickedColor;
					message.textContent = "Correct!";
					resetButton.textContent = "Play Again?";
					changeColors(this.style.backgroundColor);
				}
				else
				{
					this.style.backgroundColor = "#232323";
					message.textContent = "Try Again";
				}
			});
	}
	h1.style.backgroundColor = "steelBlue";
}

function changeColors(color)
{
	for (var i = 0; i < mode; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(n)
{
	var num = Math.floor(Math.random()*n);
	return colors[num];
}

function generateColor()
{
	var r = Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);
	return "rgb(" + r +", " + g + ", " + b + ")";
}

function generateColorList(num)
{
	var arr = []
	for (var i = 0; i < num; i++)
	{
		arr[i] = generateColor();
	}
	return arr
}