var fixedRect;
var movingRect;


function setup() {
  createCanvas(800,400); 
  fixedRect= createSprite(200,200,50,80)
  fixedRect.shapeColor="red"
  fixedRect.debug="true"
  movingRect= createSprite(400,200,80,30)
  movingRect.shapeColor="red"
  movingRect.debug="true"
}

function draw() {
  background(255,255,255);  
  movingRect.x= World.mouseX;

  movingRect.y= World.mouseY;
  console.log(fixedRect.x-movingRect.x)

  if(fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 && 
    movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 &&
    fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2 &&
    movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor="blue"
    movingRect.shapeColor="blue"
  }
  else{ fixedRect.shapeColor="red"
       movingRect.shapeColor="red"
  }

  drawSprites();
}