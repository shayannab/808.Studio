//when the letters r clicked on screen
numberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {var buttonClicked=this.innerHTML;
        makeSound(buttonClicked);
        buttonAnimation(buttonClicked);
        
    });
}
//when letters are presseed on the keyboard
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
//function which is carried out when the letters are clicked or pressed
function makeSound(key){
    switch(key){
        case "w":
            var audio=new Audio("sounds/crash.mp3");   
            audio.play();
            break;
        case "a":   
            var audio=new Audio("sounds/kick-bass.mp3");   
            audio.play();
            break;
    
        case "s":
            var audio=new Audio("sounds/snare.mp3");   
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-1.mp3");   
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/tom-2.mp3");   
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/tom-3.mp3");   
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/tom-4.mp3");   
            audio.play();
            break;
        default:
            console.log(key);
        }
}
function buttonAnimation(currentkey){
    var activebutton=document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function() {
        activebutton.classList.remove("pressed");
    }, 100);
}