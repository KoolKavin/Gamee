var bk;
var wall
function preload(){
bk=loadImage("tower.png");
ninjaImg=loadImage("ninja.png");
obstacleImg=loadImage("obstacle.png")
leadImg = loadImage("ledge.png")
}

function setup(){
  createCanvas(600,600);

  tower=createSprite(300,300,400,400);
  tower.addImage(bk);
  tower.velocityY=2
 
  ninja=createSprite(300,200,20,20);
  ninja.addImage(ninjaImg);
  ninja.scale=0.15
  
  ground=createSprite(300,595,600,10);
  ground.shapeColor="black";

  wall = createSprite(595,300,10,600)
  wall.shapeColor = "Yellow"
  wall.visible = false
  obstaclesGroup = new Group()
  ledgeGroup = new Group()
 
}

function draw(){
  background(0);
 
  if(keyDown(LEFT_ARROW) && ninja.x>90){
    ninja.x -=10;
  }
  if(keyDown(RIGHT_ARROW) && ninja.x<500){
    ninja.x +=10;
  }
if(keyDown(UP_ARROW) ){
  ninja.velocityY=-10;
}
ninja.velocityY=ninja.velocityY+0.5

    if(tower.y>400){
      tower.y=300;
    }
if(obstaclesGroup.isTouching(ninja)){
  obstaclesGroup.destroyEach()
  ninja.destroy()
  tower.velocityY = 0
}
   ninja.collide(ledgeGroup)

   spawnObstacle();
   spawnLedge();
    drawSprites();
    textSize(20);
    fill("red");
    stroke("black")
  text("NINJA RUN",5,30)
  }

function spawnObstacle(){
if(frameCount%150===0){
  obstacle=createSprite(random(300,400),120,20,10)
  obstacle.addImage(obstacleImg)
  obstacle.scale = 0.15
  obstacle.velocityY = 7
  obstaclesGroup.add(obstacle)
}
}

function spawnLedge(){
  if(frameCount%300===0){
    lead = createSprite( 100,100, 20, 20)
    block = createSprite(100,90)
    block.width = 120
    block.height = 2
    lead.x=Math.round(random(200,400))
    block.x=lead.x
    block.visible = true
    block.velocityX = 1
    lead.addImage(leadImg)
    lead.velocityY = 1
    lead.scale = 0.3
    ledgeGroup.add(lead)
    
  }
}