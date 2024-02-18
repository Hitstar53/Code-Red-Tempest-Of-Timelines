var text = new Array(
    "This is Agent C from the future.\nSomething has been into the systems of TPA (Temporal Protection Authority).", 
    "We still don't know if it's a deed of a person or something else. All we have is this code: \nu005400520024",
    "But this is horrifying. The thing is trying to change major historical events.",
    "And also, don't get surprised if you don't find the history as you know it, because it is not as you know it.",
    "It is not as you know it. . ."
);
var speed = 75; 
var index = 0;
var length = text[0].length; 
var textPos = 0; 
var contents = ''; 
var txt = text[0];
function typewriter(){
    contents =  ' ';
    var destination = document.getElementById("typedtext");
    destination.innerHTML = contents + text[index].substring(0, textPos);
    if ( textPos++ == length ) {
        setTimeout("showButtons()", 1000);
    } else {
        setTimeout("typewriter()", speed);
    }
}
function showButtons(){
    document.getElementById("buttons").style.display = "flex";
}
function dontShowButtons(){
    document.getElementById("buttons").style.display = "none";
}
function nextText(){
    textPos = 0;
    index++;
    if ( index != text.length ) {
        length = text[index].length;
        dontShowButtons();
        typewriter();
    }
    if (index==text.length) {
        document.getElementById("replay").setAttribute("onclick", "window.location.reload()");
        // document.getElementById("next").onclick = "";
    }
}
function rePlay(){
    textPos = 0;
    typewriter();
}
typewriter();