var jaxon,jaxonImg
var pathImg, path
var left_boundary, right_boundary
var coin, coinImg, coinscore
var power,powerImg


function preload(){
 
  jaxonImg=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");
  powerImg=loadImage("power.png");
  coinImg=loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;


  jaxon=createSprite(200,200,50,170);
  jaxon.addAnimation("running",jaxonImg);
 jaxon.scale=0.08;

 // power=createSprite(200,80,100,100);
  //power.addImage(powerImg);
  //power.scale=0.5;


  //coin=createSprite(200,200,80,90);
 // coin.addImage(coinImg);
  //coin.scale=0.3


  //coin=createSprite(100,200,80,90);
  //coin.addImage(coinImg);
  //coin.scale=0.3


  //coin=createSprite(300,200,80,90);
  //coin.addImage(coinImg);
  //coin.scale=0.3;


  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
 left_boundary.visible=false;
right_boundary.visible=false;
}

function draw() {
  background(0);

  textSize(10);

 // text('coin Score', 1,200);
 // textSize(10);
 // text('0', 20,230);

  path.velocityY=5;

  jaxon.x=World.mouseX;

  if(path.y>400) {
  path.y=height/2 ;
 // if(jaxon.isTouching(coin)) {
  //coinscore = coinscore+1;
 //}
  
}
  jaxon.collide(left_boundary);
  jaxon.collide(right_boundary);
  edges=createEdgeSprites();
  jaxon.collide(edges[3]);
drawSprites();
}
