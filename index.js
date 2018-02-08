var myImg = document.getElementById("ava");
var hor = 0;
var ver = 0;
var size = 100;
var extrahor = 100;
var extrasize = 20;
var counter = 0;

document.getElementById("menu").addEventListener("click", function(){
    document.getElementById("menu").style.right = "0px";
})

document.getElementById("left").addEventListener("click", function(){
    hor -= 7;
    document.getElementById("center").style.left = hor+"px";
})

document.getElementById("up").addEventListener("click", function(){
    ver += 7;
    document.getElementById("center").style.bottom = ver+"px";
})

document.getElementById("down").addEventListener("click", function(){
    ver -= 7;
    document.getElementById("center").style.bottom = ver+"px";
})

document.getElementById("right").addEventListener("click", function(){
    hor += 7;
    document.getElementById("center").style.left = hor+"px";
})

document.getElementById("plus").addEventListener("click", function(){
    size += 1;
    myImg.style.height = size+"%"
})

document.getElementById("minus").addEventListener("click", function(){
    size -= 1;
    myImg.style.height = size+"%"
})

document.getElementById("avatar1").addEventListener("click", function(){
    myImg.src = "pics/ava1.png";
})

document.getElementById("avatar2").addEventListener("click", function(){
    myImg.src = "pics/ava2.png"
})

myImg.addEventListener("click", function(){
    document.getElementById("avatarbutts").style.display = "none"
    document.getElementById("left").style.display = "none"
    document.getElementById("up").style.display = "none"
    document.getElementById("down").style.display = "none"
    document.getElementById("right").style.display = "none"
})

document.getElementById("header").addEventListener("click", function(){
    document.getElementById("avatarbutts").style.display = "block"
    document.getElementById("left").style.display = "block"
    document.getElementById("up").style.display = "block"
    document.getElementById("down").style.display = "block"
    document.getElementById("right").style.display = "block"
})

document.getElementById("image1").addEventListener("click", function(){
    counter = 1;
    document.getElementById("img1").style.display = "block"
})

document.getElementById("image2").addEventListener("click", function(){
    counter = 2;
    document.getElementById("img2").style.display = "block"
})

document.getElementById("image3").addEventListener("click", function(){
    counter = 3;
    document.getElementById("img3").style.display = "block"
})

document.getElementById("left1").addEventListener("click", function(){
    extrahor += 7;
    if (counter = 1) {
        document.getElementById("img1").style.right = extrahor+"px";
    }
    if (counter = 2) {
        document.getElementById("img2").style.right = extrahor+"px";
    }
    if (counter = 3) {
        document.getElementById("img3").style.right = extrahor+"px";
    }
})

document.getElementById("up1").addEventListener("click", function(){
    ver += 7;
    if (counter = 1) {
        document.getElementById("img1").style.bottom = ver+"px";
    }
    if (counter = 2) {
        document.getElementById("img2").style.bottom = ver+"px";
    }
    if (counter = 3) {
        document.getElementById("img3").style.bottom = ver+"px";
    }
})

document.getElementById("down1").addEventListener("click", function(){
    ver -= 7;
    if (counter = 1) {
        document.getElementById("img1").style.bottom = ver+"px";
    }
    if (counter = 2) {
        document.getElementById("img2").style.bottom = ver+"px";
    }
    if (counter = 3) {
        document.getElementById("img3").style.bottom = ver+"px";
    }
})

document.getElementById("right1").addEventListener("click", function(){
    extrahor -= 7;
    if (counter = 1) {
        document.getElementById("img1").style.right = extrahor+"px";
    }
    if (counter = 2) {
        document.getElementById("img2").style.right = extrahor+"px";
    }
    if (counter = 3) {
        document.getElementById("img3").style.right = extrahor+"px";
    }
})

document.getElementById("plus1").addEventListener("click", function(){
    extrasize += 1;
    if (counter = 1) {
        document.getElementById("img1").style.height = extrasize+"%"
    }
    if (counter = 2) {
        document.getElementById("img2").style.height = extrasize+"%"
    }
    if (counter = 3) {
        document.getElementById("img3").style.height = extrasize+"%"
    }
})

document.getElementById("minus1").addEventListener("click", function(){
    extrasize -= 1;
    if (counter = 1) {
        document.getElementById("img1").style.height = extrasize+"%"
    }
    if (counter = 2) {
        document.getElementById("img2").style.height = extrasize+"%"
    }
    if (counter = 3) {
        document.getElementById("img3").style.height = extrasize+"%"
    }
})