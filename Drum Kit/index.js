
var a = document.querySelectorAll(".drum").length;


for(var i = 0;i<a;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       hello(this.innerHTML);
       buttonpress(this.innerHTML);
    });
}
document.addEventListener('keydown', function(event) {
    const key = event.key; // "a", "1", "Shift", etc.
    hello(key);
    buttonpress(key);
});
function hello(e){
    switch(e){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;    
        case "s":
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;
        case "j":
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
            break;
        case "k":
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;
        case "l":
            var tom1 = new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;
        default:                 
    }
}
function buttonpress(e){
    var item = document.querySelector("."+e);
    item.classList.add("pressed");
    setTimeout(function(){
    document.querySelector("."+e).classList.remove("pressed");
    },100);
}

