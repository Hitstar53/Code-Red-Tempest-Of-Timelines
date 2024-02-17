var text = new Array(
    "This is Agent C from the future.\nSomething has been into the systems of TPA (Temporal Protection Authority).", 
    "We still don't know if it's a deed of a person or something else. All we have is this code: ",
    "But this is horrifying. The thing is trying to change major historical events.",
    "And also, don't get surprised if you don't find the history as you know it, because it is not as you know it.",
    "It is not as you know it. . ."
);
var speed = 75; 
var index = 0;
var length = text[0].length; 
var textPos = 0; 
var contents = ''; 
function typewriter(){
    contents =  ' ';
    var destination = document.getElementById("typedtext");
    destination.innerHTML = contents + text[index].substring(0, textPos);
    if ( textPos++ == length ) {
        textPos = 0;
        index++;
        if(index==text.length){
            setTimeout("appear()", 3000);
            setTimeout("showButtons()", 4000);
        }
        if ( index != text.length ) {
            if(index==2){
                appear();
                setTimeout("disappear()", 1000);
            }
            length = text[index].length;
            setTimeout("typewriter()", 1000);
        }
    } else {
        setTimeout("typewriter()", speed);
    }
}
function appear(){
    document.getElementById("code").style.display = "block";
}
function showButtons(){
    document.getElementById("buttons").style.display = "flex";
}
function disappear(){
    document.getElementById("code").style.display = "none";
}
typewriter();