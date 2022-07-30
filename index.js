// document.querySelector("buuton").addEventListener("click",handleClick);

// function handleClick(){
//     alert("click");
// }

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i< numberOfDrumButtons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonInnerHTML = this.innerHTML;

        switch(buttonInnerHTML){
            case "H":
                var audio = new Audio("sounds/Happy Birthday.mp3");
                audio.play();
                break;

             case "a":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

                case "p":
                    var audio = new Audio("sounds/crash.mp3");
                    audio.play();
                    break; 
                    
                 case "y":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;

                case "B":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;

                case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;

                case "y":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;

                default: console.log(buttonInnerHTML)
        }
    })
}