
var trex;
var trex_running;
var ground;
var groundimg;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
groundimg = loadImage("ground2.png");
}


function setup(){
  createCanvas(600,200)

  //create a trex sprite
  trex = createSprite(50, 17``, 30, 40);
  trex.addAnimation("running", trex_running);
 trex.scale=.4
//ground
ground=createSprite(300,200, 600, 28);
ground.addImage("ground", groundimg);
ground.velocityX= -2;  

}

function draw(){
  background(200);
  console.log(ground.x);

  if (keyDown("space")){
    trex.velocityY = -10 
  }

  if(ground.x< 0){
    ground.x = width/2
  }
  drawSprites();
trex.velocityY += 0.5;
trex.collide(ground);

}
