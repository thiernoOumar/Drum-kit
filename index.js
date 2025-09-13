document.addEventListener("keydown", function (event) {
    getKey(event.key);
    flashingButton(event.key)
});

for (i=0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        getKey(text);
        flashingButton(text)
    });
}

function getKey(pressedKey) {
    
    switch (pressedKey) {
            case "w":
                var tom1 = new Audio(src='./sounds/tom-1.mp3');
                tom1.play();
            break;

            case "a":
                var tom2 = new Audio(src='./sounds/tom-2.mp3');
                tom2.play();
            break;

            case "s":
                var tom3 = new Audio(src='./sounds/tom-3.mp3');
                tom3.play();
            break;

            case "d":
                var tom4 = new Audio(src='./sounds/tom-4.mp3');
                tom4.play();
            break;

            case "j":
                var snare = new Audio(src='./sounds/snare.mp3');
                snare.play();
            break;

            case "k":
                var crash = new Audio(src='./sounds/crash.mp3');
                crash.play();
            break;
            
            case "l":
                var kick = new Audio(src='./sounds/kick-bass.mp3');
                kick.play();
            break;

            default: console.log(pressedKey);
        }        
}

function flashingButton (actualKey) {
   var activeKey = document.querySelector("." + actualKey);
  
   activeKey.classList.add("pressed");
  
   setTimeout(function () {
    activeKey.classList.remove("pressed");
   }, 100);
}