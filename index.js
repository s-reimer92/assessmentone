var ch1Img = null;
var ch2Img = null;
var ch3Img = null;
var zoomImg = null;
var zoomheight = 70;
var zoomwidth = 100;
var pagenum = null;




//Change circle pictures
document.getElementById("BG1").addEventListener("click",function(){
    document.getElementById("ch1").style.backgroundImage = "url(i1.jpg)"
    document.getElementById("ch2").style.backgroundImage = "url(i2.jpg)"
    document.getElementById("ch3").style.backgroundImage = "url(i3.jpg)"
    ch1Img = "url(i1.jpg)"
    ch2Img = "url(i2.jpg)"
    ch3Img = "url(i3.jpg)"
    pagenum = 1;

});
document.getElementById("BG2").addEventListener("click",function(){
    document.getElementById("ch1").style.backgroundImage = "url(i4.jpg)"
    document.getElementById("ch2").style.backgroundImage = "url(i5.jpg)"
    document.getElementById("ch3").style.backgroundImage = "url(i6.jpg)"
    ch1Img = "url(i4.jpg)"
    ch2Img = "url(i5.jpg)"
    ch3Img = "url(i6.jpg)"
    pagenum = 2;

});
document.getElementById("BG3").addEventListener("click",function(){
    document.getElementById("ch1").style.backgroundImage = "url(i7.jpg)"
    document.getElementById("ch2").style.backgroundImage = "url(i8.jpg)"
    document.getElementById("ch3").style.backgroundImage = "url(i9.jpg)"
    ch1Img = "url(i7.jpg)"
    ch2Img = "url(i8.jpg)"
    ch3Img = "url(i9.jpg)"
    pagenum = 3;
});
document.getElementById("BG4").addEventListener("click",function(){
    document.getElementById("ch1").style.backgroundImage = "url(i10.jpg)"
    document.getElementById("ch2").style.backgroundImage = "url(i11.jpg)"
    document.getElementById("ch3").style.backgroundImage = "url(i12.jpg)"
    ch1Img = "url(i10.jpg)"
    ch2Img = "url(i11.jpg)"
    ch3Img = "url(i12.jpg)"
    pagenum = 4;
});

//Change zoom
document.getElementById("ch1").addEventListener("mouseenter", function(){
    document.getElementById("zoom").style.backgroundImage = ch1Img;
    zoomImg = ch1Img;
});
document.getElementById("ch2").addEventListener("mouseenter", function(){
    document.getElementById("zoom").style.backgroundImage = ch2Img;
    zoomImg = ch2Img;
});
document.getElementById("ch3").addEventListener("mouseenter", function(){
    document.getElementById("zoom").style.backgroundImage = ch3Img;
    zoomImg = ch3Img;
});

//Display zoom controls
document.getElementById("zoom").addEventListener("click",function(){
    document.getElementById("zoomcontrols").style.display = "block";
});


//Zoom in/out
document.getElementById("plus").addEventListener("click",function(){
    zoomheight = zoomheight + 7
    zoomwidth = zoomwidth + 10
    document.getElementById("zoom").style.height = zoomheight+"%"
    document.getElementById("zoom").style.maxHeight = zoomheight+"%"
    document.getElementById("zoom").style.width = zoomwidth+"%"
    document.getElementById("zoom").style.maxWidth = zoomwidth+"%"
});
document.getElementById("minus").addEventListener("click",function(){
    zoomheight = zoomheight - 7
    zoomwidth = zoomwidth - 10
    document.getElementById("zoom").style.height = zoomheight+"%"
    document.getElementById("zoom").style.maxHeight = zoomheight+"%"
    document.getElementById("zoom").style.width = zoomwidth+"%"
    document.getElementById("zoom").style.maxWidth = zoomwidth+"%"
});

//Previous/Next Buttons
document.getElementById("next").addEventListener("click",function(){
    if (pagenum == 1) {
        document.getElementById("ch1").style.backgroundImage = "url(i4.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(i5.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(i6.jpg)";
        ch1Img = "url(i4.jpg)";
        ch2Img = "url(i5.jpg)";
        ch3Img = "url(i6.jpg)";
        pagenum = 2;
    }
    else if (pagenum == 2) {
        document.getElementById("ch1").style.backgroundImage = "url(i7.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(i8.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(i9.jpg)";
        ch1Img = "url(i7.jpg)";
        ch2Img = "url(i8.jpg)";
        ch3Img = "url(i9.jpg)";
        pagenum = 3;
    }
    else if (pagenum == 3) {
        document.getElementById("ch1").style.backgroundImage = "url(i10.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(i11.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(i12.jpg)";
        ch1Img = "url(i10.jpg)";
        ch2Img = "url(i11.jpg)";
        ch3Img = "url(i12.jpg)";
        pagenum = 4;
    }
    else if (pagenum == 4) {
        document.getElementById("ch1").style.backgroundImage = "url(i1.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(i2.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(i3.jpg)";
        ch1Img = "url(i1.jpg)";
        ch2Img = "url(i2.jpg)";
        ch3Img = "url(i3.jpg)";
        pagenum = 1;
    }
});
document.getElementById("previous").addEventListener("click",function(){
    if (pagenum == 3) {
        document.getElementById("ch1").style.backgroundImage = "url(i4.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(i5.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(i6.jpg)";
        ch1Img = "url(i4.jpg)";
        ch2Img = "url(i5.jpg)";
        ch3Img = "url(i6.jpg)";
        pagenum = 2;
    }
    else if (pagenum == 4) {
        document.getElementById("ch1").style.backgroundImage = "url(i7.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(i8.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(i9.jpg)";
        ch1Img = "url(i7.jpg)";
        ch2Img = "url(i8.jpg)";
        ch3Img = "url(i9.jpg)";
        pagenum = 3;
    }
    else if (pagenum == 1) {
        document.getElementById("ch1").style.backgroundImage = "url(i10.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(i11.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(i12.jpg)";
        ch1Img = "url(i10.jpg)";
        ch2Img = "url(i11.jpg)";
        ch3Img = "url(i12.jpg)";
        pagenum = 4;
    }
    else if (pagenum == 2) {
        document.getElementById("ch1").style.backgroundImage = "url(i1.jpg)";
        document.getElementById("ch2").style.backgroundImage = "url(i2.jpg)";
        document.getElementById("ch3").style.backgroundImage = "url(i3.jpg)";
        ch1Img = "url(i1.jpg)";
        ch2Img = "url(i2.jpg)";
        ch3Img = "url(i3.jpg)";
        pagenum = 1;
    }
});

