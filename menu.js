

//Menu open and close
document.getElementById("open").addEventListener("click",function(){
    document.getElementById("menu").style.left = "0px";
});
document.getElementById("close").addEventListener("click",function(){
    document.getElementById("menu").style.left = "-110px";
});

//change background
document.getElementById("makeBG").addEventListener("click", function(){
    document.getElementById("bg").style.backgroundImage = zoomImg;
});

//Reset background
document.getElementById("reset").addEventListener("click", function(){
    document.getElementById("bg").style.backgroundImage = null;
});

//show/hide app
document.getElementById("showApp").addEventListener("click",function(){
    document.getElementById("app1").style.display = "block";
});
document.getElementById("hideApp").addEventListener("click",function(){
    document.getElementById("app1").style.display = "none";
});