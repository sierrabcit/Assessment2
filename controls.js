var colorPick = document.getElementById("colorPick");
var preview = document.getElementById("preview");
var range1 = document.getElementById("range1");
var range2 = document.getElementById("range2");
var range3 = document.getElementById("range3");
var range4 = document.getElementById("range4");

//LEVEL 2A
document.getElementById("colorPick").addEventListener("change", function() {
    preview.style.backgroundColor = colorPick.value;
});
//LEVEL 2B
document.getElementById("number").addEventListener("click", function() {
    changeImg("number");
});
document.getElementById("range").addEventListener("click", function() {
    changeImg("range");
});

//LEVEL 2C

range1.addEventListener("change", function() {
    document.getElementById("hair").style.width = range1.value+"%";
});
range2.addEventListener("change", function() {
    document.getElementById("eyes").style.width =
    range2.value+"%";
});
range3.addEventListener("change", function() {
    document.getElementById("nose").style.width = range3.value+"%";
});
range4.addEventListener("change", function() {
    document.getElementById("mouth").style.width =
    range4.value+"%";
});
function changeImg(typeofImg) {
    range1.type= typeofImg;
    range2.type= typeofImg;
    range3.type= typeofImg;
    range4.type= typeofImg;
}
//LEVEL 4A
document.getElementById("plus").addEventListener("click", function() {
    createNew();
}); 

//LEVEL 4B
document.getElementById("random").addEventListener("click", function() {
    randomFace();
});
//LEVEL 5A
var num = 0;
function createNew() {
    num++;
    var newDiv = document.createElement("div");
    newDiv.className = "divCopy";
    /*newDiv.style.width = 50;
    newDiv.style.height = 50;*/
    newDiv.style.backgroundColor = document.getElementById("preview").style.backgroundColor;
    newDiv.id = num;
    newDiv.addEventListener("click", function () {
        removeDiv(newDiv.id);
    });
    var saveImage1 = document.createElement("img");
    var saveImage2 = document.createElement("img");
    var saveImage3 = document.createElement("img");
    var saveImage4 = document.createElement("img");
    
    saveImage1.src = document.getElementById("hair").src;
    saveImage1.className = "items";
    saveImage1.style.cssText = document.getElementById("hair").style.cssText;
    newDiv.appendChild(saveImage1);
    
    saveImage2.src = document.getElementById("eyes").src;
    saveImage2.className = "items";
    saveImage2.style.cssText = document.getElementById("eyes").style.cssText;
    newDiv.appendChild(saveImage2);

    saveImage3.src = document.getElementById("nose").src;
    saveImage3.className = "items";
    saveImage3.style.cssText = document.getElementById("nose").style.cssText;
    newDiv.appendChild(saveImage3);
    
    saveImage4.src = document.getElementById("mouth").src;
    saveImage4.className = "items";
    saveImage4.style.cssText = document.getElementById("mouth").style.cssText;
    newDiv.appendChild(saveImage4);
    
    document.getElementById("display").appendChild(newDiv);

}
function randomFace() {
    var img1 = Math.round(Math.random()*2)+1;
    var img2 = Math.round(Math.random()*2)+1;
    var img3 = Math.round(Math.random()*2)+1;
    var img4 = Math.round(Math.random()*2)+1;
    var R = Math.round(Math.random()*255);
    var G = Math.round(Math.random()*255);
    var B = Math.round(Math.random()*255);
    var showHair = Math.round(Math.random()*70); //width
    var showEyes = Math.round(Math.random()*40);
    //width
    var showNose = Math.round(Math.random()*30);
    //width
    var showMouth = Math.round(Math.random()*35);
    
    document.getElementById("preview").style.backgroundColor = "rgb("+R+","+G+","+B+")";
    
    document.getElementById("hair").src="img/hair" + img1 +".png";
    document.getElementById("eyes").src="img/eyes" + img2 +".png";
    document.getElementById("nose").src="img/eyes" +
    img3 +".png";
    document.getElementById("mouth").src="img/eyes" +
    img4 +".png";
    
    document.getElementById("hair").style.width = showHair +"%";
    document.getElementById("eyes").style.width = showEyes +"%";
    document.getElementById("nose").style.width = showNose +"%";
    document.getElementById("mouth").style.width = showMouth + "%";
    
    document.getElementById("range1").value = showHair;
    document.getElementById("range2").value = showEyes;
    document.getElementById("range3").value = showNose;
    document.getElementById("range4").value = showMouth;
}
//LEVEL 5B
function changeType(type) {
    document.getElementById("range1").type = type;
    document.getElementById("range2").type = type;
    document.getElementById("range3").type = type;
    document.getElementById("range4").type = type;
}
//LEVEL 6
document.getElementById("autoCreate").addEventListener("click", function() {
    var int = setInterval(function() {
        randomFace();
        createNew();
    },500);
    document.getElementById("stopCreate").addEventListener("click", function() {
        clearInterval(int);
    });
});
