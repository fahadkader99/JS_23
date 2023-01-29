
document.getElementById("Demo 1").innerHTML="This is now Dynamic text message by - JS"
document.getElementById("Demo 2").innerHTML="Hello from JavaScript !"
document.getElementById("btn2").onclick=displayDate;


function displayDate(){

document.getElementById("myDate").innerHTML=Date();

}