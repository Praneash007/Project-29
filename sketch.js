function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

let value = 0;

function draw() {
  fill(value);
  rect(25,25,50,50);
  background(255,255,255);
  
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);


  slingShot = new Slingshot(this.polygon,{x:100,y:200});
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  drawSprites();
  mouseDragged();
  mousePressed();
  fly();
}

fly(){
  this.sling.bodyA = null;
}


function mousePressed(){
  if (value === 0) {
    value = 225;
 } else {
     value = 0;
 }
}

function mouseDragged(){
  value = value + 5;
  if (value >  255){
    value = 0;
  }
}
