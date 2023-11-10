console.log("I'm working");

var fruit = "apples are wonderful";
console.log(fruit);

var year = 2023;
console.log(year);

window.onload = function(){
    $(".title").css("color", "red");
    $(".green-box").click(changeColor);

    $(".rock").click(openDialogue);
    $(".dialogue").click(closeDialogue);
    $(".seed").hover(seedGrow, seedShrink);

    $(".rock").draggable();

    for(var i=0; i < 100; i++){
var worm = $('<img class="worm"src="images/worm.png">');

var randTop= Math.random() * window.innerHeight;
var randLeft= Math.random() * window.innerWidth;


    $(worm).css("top", randTop + "px");
    $(worm).css("left",randLeft + "px");

    $("body").append(worm);
    }
    
    setInterval(wormMove, 5000);


}

function changeColor(){
    $(".green-box").css("height", "500px");
    $(".green-box").css("width", "500px");
    $(".green-box").css("left", "800px");
    $(".green-box").css("background", "purple");
}

function openDialogue(){
    $(".dialogue").css("display", "block");
}

function closeDialogue(){
    $(".dialogue").css("display", "none");
}

function seedGrow(){
    $(".seed").attr("src", "images/sunflower.png");
$(".seed").css("width", "300px");
$(".seed").css("top", "60%");
$(".seed").css("left", "65%"); /*these values will differ based on your CSS cooridnates */
}

function seedShrink(){
    $(".seed").attr("src", "images/seed.jpg");
    $(".seed").css("width", "10%");
    $(".seed").css("top", "70%");
    $(".seed").css("left", "70%"); /*set to original seed image with seed coordinates for when you hover off */
}

function wormMove(){
    $(".worm").each(function(){
        var randTop= Math.random() * window.innerHeight;
        var randLeft= Math.random() * window.innerWidth;
        
            $(this).css("top", randTop + "px");
            $(this).css("left", randLeft + "px");
    })
        
    

}