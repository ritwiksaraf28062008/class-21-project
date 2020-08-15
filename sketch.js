var bullet , wall , weight , speed;
var deformation;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet  = createSprite(50,200,50,20);
  wall =  createSprite(1500,200,thickness,height/2);
  bullet.velocityX = speed;
  deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness);
}

function draw() {
  background(0);  
 

  if(wall.x - bullet.x < (bullet.width+wall.width)/2){

    bullet.velocityX = 0;
    bullet.x = wall.x - 25;

    console.log(deformation);

  if(deformation>=10){
    bullet.shapeColor = "red";
  }

  if(deformation<10){
    bullet.shapeColor = "green";
  }

}
  drawSprites();
}
