// var music = document.querySelectorAll(".drum").length;
// for( var i = 0; i<music; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click" , function () {
//         var buttonInnerhtml = this.buttonInnerhtml;
//         makeSound(buttonInnerhtml);
//     })
// }

// document.addEventListener("keydown"), function(event) {
//     console.log(event.key);
//     makeSound(event.key);
    
// }

// function makeSound(key){
//     switch (key) {
//         case "w":
//             var song1 = new Audio("Drumkit-practice-main/sounds/crash.mp3");
//             song1.play();
//             break;

//         case "a" :
//             var song2 = new Audio("Drumkit-practice-main/sounds/dheere song.mp3");
//             song2.play();
//             break;

//         case "s" :
//             var song3 = new Audio("Drumkit-practice-main/sounds/kick-bass.mp3");
//             song3.play("");
//             break;

//         default:
//             console.log("click the correct Area");
//     }
// }


var noOfButtons=document.querySelectorAll(".drum").length;
for(var i=0; i<noOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        console.log("you clicked");
       var saveInnerhtmldata = this.innerHTML
       sounds(saveInnerhtmldata);
    })
}
  document.addEventListener("keydown",function(event){
            console.log(event.key);
            sounds(event.key);
       })
         function sounds(key){
       switch(key){
    case "s":
    var audioElement1 = new Audio("./sounds/kanmoodi-thirakkumpothu-bgm-by-dinu-infinity-219007.mp3");
        audioElement1.play();
    break;
    case "a":
    var audioElement2 = new Audio("./sounds/teasertittle-music-kamalesh-siddu-14012.mp3");
        audioElement2.play();
    break;
    case "d":
    var audioElement3 = new Audio("./sounds/love_bgm_no_copyright_music-113843.mp3");
        audioElement3.play();
    break;
    case "w":
    var audioElement4 = new Audio("./sounds/teasertittle-music-kamalesh-siddu-14012.mp3");
        audioElement4.play();
    break;
    default:
        console.log("plz press the correct key.")
       }
    }






