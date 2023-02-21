var player, player_idle, player_moving;
var playerHP = 10;
var playerDMG = 1;
var playerDef = 0;
var slashRight, slashRightIMG;
var jump = false;

function preload() {
  player_idle = loadImage("pixil-frame-0.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  player = createSprite(width/2, height/2, 50, 50);
  player.addImage("idle", player_idle);
  player.scale = 2;
  player.debug = true
}



function draw() {
  background(0,128,0);  
  if (playerHP > 0) {
    if (keyDown("up")) {
      player.y -= 5
      camera.y -=5
    }
    if (keyDown("down")) {
      player.y += 5
      camera.y +=5
    }
    if (keyDown("right")) {
      player.x += 5
      camera.x +=5
    }
    if (keyDown("left")) {
      player.x -= 5
      camera.x -=5
    }
  }
  if (keyDown("space") && jump == false) {
    player.scale += 3;
    jump = true;
    
  }
  if(jump = true) {
      player.scale -= 0.1;
    if (player.scale < 2) {
      player.scale = 2;
      jump = false
    }
    if (keyDown("x")) {
      slash;
    }
    }
  drawSprites();
}