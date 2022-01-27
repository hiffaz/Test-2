// TASKS
// Step 1: Create an infinite background using road.png.
// Step 2: Create boy sprite and add animation (boy1 to boy7) to it.
// Step 3: When the space key is pressed, make the boy jump. Jump sound should be heard.
// Step 4: Create an invisible ground for the boy to collide.
// Step 5: Jumping in the air should be avoided.
// Step 6: Spawn the birds randomly.

var ground,Img
var boy,boyImg,jumpsound
var iground
var birds_image
// var bird
function preload(){
Img = loadImage("road.jpg");
boyImg = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png","boy7.png")
jumpsound = loadSound("jump.mp3")
bird_image = loadImage("bird.png")
}

function setup(){
  createCanvas(800,800)
 ground = createSprite(250,180,900,20)
  ground.addImage("Running",Img)
  ground.velocityX = -4
  boy = createSprite(80,280,20,30);
  boy.addAnimation("Animation",boyImg)
  boy.scale = 0.3

iground = createSprite(280,330,800,20)
 
  

iground.visible = false

}

function draw(){
  // background(0);
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  if(keyDown("space")&& boy.y >=120){
    boy.velocityY=-12 
  jumpsound.play()
  }
  boy.velocityY = boy.velocityY + 0.8
  boy.collide(iground)
  boy.setCollider("rectangle",0,0,boy.width,boy.height) 
  spawnBirds();
  
  drawSprites();

}

function spawnBirds() {
  if (frameCount % 60 === 0) {
    bird = createSprite(600, 100, 40, 10);
    bird.y = Math.round(random(10, 60));
    bird.addImage(bird_image);
    bird.scale = 0.3;
    bird.velocityX = -3;


    bird.lifetime = 134;


    bird.depth = boy.depth;
    boy.depth = boy.depth + 1;
  
  }
}
