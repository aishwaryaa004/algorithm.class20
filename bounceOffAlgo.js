var fixedRect;
var movingRect;


function setup() {
  createCanvas(1000,1000); 
  fixedRect= createSprite(400,100,50,80)
  fixedRect.shapeColor="red"
  fixedRect.debug="true"
  movingRect= createSprite(400,800,80,30)
  movingRect.shapeColor="red"
  movingRect.debug="true"
  movingRect.velocityY=-5
  fixedRect.velocityY=5

}

function draw() {
  background(255,255,255);  
 
  
  //console.log(fixedRect.x-movingRect.x)
  if(movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2){
        movingRect.velocityY=movingRect.velocityY*(-1)
        fixedRect.velocityY=fixedRect.velocityY*(-1)
    }
  

  drawSprites();
}