

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








































