var n = document.querySelectorAll(".drum").length;

for(i=0 ; i< n ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
       var button = this.innerHTML;
       isPressed(button);
       clickAnimation(button);
       
    
    })
    
    }
    
    
    document.addEventListener("keypress",function(event){
    
        isPressed(event.key);
        clickAnimation(event.key);
    
    }
    )
    function isPressed(key)
    {
        switch(key)
        {
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
    
             default:console.log("clicked");
        }
    }

function clickAnimation(key){

    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
 
    setTimeout(function(){
 
        activeButton.classList.remove("pressed");
    },1000)
 
 }