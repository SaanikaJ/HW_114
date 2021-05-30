function preload(){

}

function setup(){
    canvas = document.getElementById("myCanvas").innerHTML = createCanvas(600, 480);
    canvas.position(10, 160);
}

function draw(){

}

function take_snapshot(){
    save("filtered_image.png");
} 