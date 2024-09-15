
var btn1 = document.getElementById("btn");
var bd = document.body;
btn1.className= "daymode";
bd.className = "daymode";
btn1.style.color="black";

function changemode(){
if (btn1.className === "darkmode") {
    btn1.className = "daymode"; 
    btn1.style.backgroundColor = "black"
    btn1.innerHTML = "day";
    bd.style.backgroundColor="white";
}
else if (btn1.className === "daymode" ) {
    btn1.className = "darkmode";
    btn1.style.backgroundColor="white"

    btn1.innerHTML = "night";
    bd.className = "darkmode"; 
    bd.style.backgroundColor="black";
}
}
