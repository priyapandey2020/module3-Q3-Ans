var spriteRect;

function setup() {
  createCanvas(600,600);
  spriteRect = createSprite(400,200,40,40);
  spriteRect.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  spriteRect.x = World.mouseX;
  spriteRect.y = World.mouseY;
  drawSprites();
}
