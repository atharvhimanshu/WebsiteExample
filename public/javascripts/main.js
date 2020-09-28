


//var allData;

async function loadData ()
{
   await fetch("http://api.covid19api.com/summary")
   .then(response => response.json())
   .then(data => {
     console.log(data.Global)
     allData=data.Global

     document.getElementById("totalCases").innerHTML= allData.TotalConfirmed
   document.getElementById("totalRecovered").innerHTML= allData.TotalRecovered
   document.getElementById("totalDeaths").innerHTML= allData.TotalDeaths

   })
   console.log(allData)
   
  //document.getElementById("usanewcases").innerHTML = "+" + usaNewCase;

  setInterval(CoronaDailyUpdate, 1000);
}



var usaNewCase = 0;
var usaNewdeath = 0;
var usaNewRecovered = 0;
var IndiaNewCase = 0;
var IndiaNewDeaths = 0;
var IndiaNewRecovered = 0;
var right = 0;
var stepUp = true


function CoronaDailyUpdate()
{     
      
  

  usaNewCase = usaNewCase + 100;
  usaNewdeath = usaNewdeath + 1;
  usaNewRecovered = usaNewRecovered + 99;
  IndiaNewCase = IndiaNewCase + 200; 
  IndiaNewDeaths = IndiaNewDeaths + 2;
  IndiaNewRecovered = IndiaNewRecovered + 298;




if(right>=1000 )
{
  
  console.log("first : " + right);
  stepUp = false;
}
else if(right<200)
{

  stepUp = true;
  console.log("second : " + right);
}

    if(stepUp)
    {
      right=right+100;
      console.log("third : " + right);
    }
    else
    {
      right=right-100;
      console.log("fourth : " + right);
    }













  document.getElementById("usanewcases").innerHTML = "+" + right;
  document.getElementById("usanewdeaths").innerHTML = "+" + usaNewdeath;
  document.getElementById("usanewrecovered").innerHTML = "+" + usaNewRecovered;

  document.getElementById("Indianewcases").innerHTML = "+" + IndiaNewCase;
  document.getElementById("Indianewdeaths").innerHTML = "+" + IndiaNewDeaths;
  document.getElementById("Indianewrecovered").innerHTML = "+" + IndiaNewRecovered;

}







window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "Down": // IE/Edge specific value
      case "ArrowDown":
        // Do something for "down arrow" key press.
       
        break;
      case "Up": // IE/Edge specific value
      case "ArrowUp":
        // Do something for "up arrow" key press.
        player2Clicked()
        break;
      case "Left": // IE/Edge specific value
      case "ArrowLeft":
        // Do something for "left arrow" key press.
        break;
      case "Right": // IE/Edge specific value
      case "ArrowRight":
        // Do something for "right arrow" key press.
        break;
      case "Enter":
        // Do something for "enter" or "return" key press.
        break;
      case "Esc": // IE/Edge specific value
      case "Escape":
        // Do something for "esc" key press.
        break;

        case "w":
            player1Clicked();

      default:
        return; // Quit when this doesn't handle the key event.
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);

function okClicked() {
    //alert("atharv has clicked");
    document.getElementById("title").style.color = "red";

    document.getElementById("title").innerHTML = "I killed 1 bot they are to noob"
}



function startgame()
{
   document.getElementById("thename").innerHTML = "we came in plane"
}


var player1Score = 0;
var player2Score = 0;

function player1Clicked() {
    player1Score = player1Score + 1;

    document.getElementById("player1ScoreValue").innerHTML = player1Score
}

function player2Clicked()
{
player2Score = player2Score + 1;

document.getElementById("player2ScoreValue").innerHTML = player2Score
}







































