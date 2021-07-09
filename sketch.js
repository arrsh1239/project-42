var canvas, backgroundImage;
var issImage, spacebgImage, spacecraftImage1, spacecraftImage2, spacecraftImage3, spacecraftImage4
var iss, spacecraft
var hasDocked = false
function preload(){
issImage = loadImage("Docking-undocking/iss.png");
spacebgImage = loadImage("Docking-undocking/spacebg.jpg")
spacecraftImage1 = loadImage("Docking-undocking/spacecraft1.png")
spacecraftImage2 = loadImage("Docking-undocking/spacecraft2.png")
spacecraftImage3 = loadImage("Docking-undocking/spacecraft3.png")
spacecraftImage4 = loadImage("Docking-undocking/spacecraft4.png")
}

function setup() {
  createCanvas(600,350);
  iss = createSprite(330, 130);
  iss.addImage(issImage)
  iss.scale = 0.25

  spacecraft = createSprite(285, 240)
  spacecraft.addImage(spacecraftImage1)
  spacecraft.scale = 0.15
}

function draw() {
  background(spacebgImage);
  spacecraft.addImage(spacecraftImage1)
  if(!hasDocked){
     spacecraft.x = spacecraft.x + random(-1,1) 
  
    if (keyDown("UP_ARROW")) {
      spacecraft.y = spacecraft.y - 2
   
  }
  if (keyDown("DOWN_ARROW")) {
     spacecraft.addImage(spacecraftImage1)
  }
  if (keyDown("RIGHT_ARROW")) {
    spacecraft.x = spacecraft.x + 2
    spacecraft.addImage(spacecraftImage4)
  }
  if (keyDown("LEFT_ARROW")) {
    spacecraft.x = spacecraft.x - 2
    spacecraft.addImage(spacecraftImage3)  
  }
}
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x - 10)){
    hasDocked = true
    textSize(25)
    fill ("white")
    text ("Docking Successful",200,300)
  }

  drawSprites();
}