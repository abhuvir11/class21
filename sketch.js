var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1 = createSprite(400,650,50,80);
  gameobject1.shapeColor = "purple"
  gameobject2 = createSprite(600,200,50,80);
  gameobject2.shapeColor = "purple"
  gameobject3 = createSprite(200,700,70,70);
  gameobject3.shapeColor = "purple"
  gameobject4 = createSprite(500,200,70,70);
  gameobject4.shapeColor = "purple"

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( istouching(movingRect,gameobject2)){
  movingRect.shapeColor = "red";
  gameobject2.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  gameobject2.shapeColor = "green";
 }
  drawSprites();
}

