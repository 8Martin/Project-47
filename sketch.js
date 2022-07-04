var form,game;
var b,bImg,intro,introImg;
var gameState = 0;
var plant,plantImg;
var walle,walle1Img,walle2Img;
var wa,waImg,trash,trashImg;//GIF//
var t1,t2,t3,t4,m1,m2,m3,m4,m5,m6,tireImg,metalImg,cooperImg,Tscore=0,cube = 0,c;// CUBES MADE//
var junk1, junk2, junk3,junk1Img,junk2Img;
var sound;
var eve,eveImg,walle_cImg;
function preload() {
  bImg = loadImage("Disney Pixar.png");
  plantImg = loadImage("plant.png");
  walle1Img = loadAnimation("WALLE_side.png");
  walle2Img = loadAnimation("WALLE_side2.png");
  waImg = loadImage("trash_cube.png");
  trashImg = loadAnimation("b1.gif","b2.gif","b3.gif");
  cubeImg = loadImage("cube_1.png");
  eveImg = loadImage("EVE.png");
  walle_cImg = loadAnimation("wall_e.png")
  m1 = loadSound("bot_m.mp3");//MUSIC//
  sound = loadSound("music.mp3");
  //WASTE//
  tireImg = loadImage("tire.png");
  metalImg = loadImage("m1.png");
  cooperImg = loadImage("mm1.png")
  junk1Img = loadImage("junk_1.png");
  junk2Img = loadImage("junk_2.png");
  //WASTE//
}

function setup(){
  canvas = createCanvas(1100,700);
  
  b = createSprite(550,348,20,20);
  b.addImage("b1",bImg);
  b.scale = 1.1;

//GIF//
  trash = createSprite(4050,340,30,30);
  trash.addAnimation("tr1",trashImg);
  trash.scale = 2.5; 
 //GIF//  

  //IN THE SERVE STATE//
  wa = createSprite(4300,580,30,30);
  wa.addAnimation("wa1",waImg);
  wa.scale = 0.6;
  
  //IN THE PLAY STATE//

  junk2 = createSprite(7990,420,10,10)
  junk2.addImage("j2",junk2Img);
  junk2.scale = 1.8;

  junk1 = createSprite(3800,480,10,10)
  junk1.addImage("j1",junk1Img);
  junk1.scale = 1.5;

  eve = createSprite(2000,500,30,30);
  eve.addImage("e1",eveImg);
  eve.scale = 0.8;

  walle = createSprite(100,6000,30,30);
  walle.addAnimation("walle1",walle1Img);
  walle.addAnimation("walle2",walle2Img);
  walle.addAnimation("walle3",walle_cImg);
  walle.scale = 0.6;

  plant = createSprite(9800,610,20,20);
  plant.addImage("p1", plantImg);
  plant.scale = 0.6;

  t1 = createSprite(8000,650,50,50);
  t1.addImage("t1",tireImg);
  t1.scale = 0.2;
  t2 = createSprite(9500,650,50,50);
  t2.addImage("t2",tireImg);
  t2.scale = 0.2;
  t3 = createSprite(9100,600,50,50);
  t3.addImage("t3",tireImg);
  t3.scale = 0.2;
  t4 = createSprite(8300,600,50,50);
  t4.addImage("t4",tireImg);
  t4.scale = 0.2;

  m1 = createSprite(8400,650,50,50);
  m1.addImage("m1",metalImg);
  m1.scale = 1;
  m1.setCollider("rectangle",0,0,95,90);
  m2 = createSprite(6950,650,50,50);
  m2.addImage("m2",metalImg);
  m2.scale = 1;
  m2.setCollider("rectangle",0,0,95,90);
  m3 = createSprite(6100,600,50,50);
  m3.addImage("m3",metalImg);
  m3.scale = 1;
  m3.setCollider("rectangle",0,0,95,90);
  m4 = createSprite(9830,600,50,50);
  m4.addImage("m4",metalImg);
  m4.scale = 1;
  m4.setCollider("rectangle",0,0,95,90);
  m5 = createSprite(5530,640,50,50);
  m5.addImage("m5",cooperImg);
  m5.scale = 1;
  m5.setCollider("rectangle",0,0,95,90);
  m6 = createSprite(7300,580,50,50);
  m6.addImage("m6",cooperImg);
  m6.scale = 1;
  m6.setCollider("rectangle",0,0,95,90);
  
 
 //IN THE PLAY STATE//
  game = new Game()
  game.start();

}

function draw(){
   background("black");
 
   //IN THE SERVE STATE//
   if(gameState === 1){
    b.x = 2000;
    wa.x = 430; 
    trash.x = 450;
   }

   if(gameState === 2){
    wa.x = 4300; 
    walle.y = 600;
    trash.x = 4500;
    junk1.x = 380;
    junk2.x = 799;
    t1.x = 800;
    t2.x = 980;
    t3.x = 950;
    t4.x = 860;
    m1.x = 840;
    m2.x = 695;
    m3.x = 610;
    m4.x = 983;
    m5.x = 553;
    m6.x = 730;
    plant.x = 980;
   background("#BA8160")

    if(keyDown("LEFT_ARROW")){
      walle.x = walle.x-8;
      walle.changeAnimation("walle2");
    }
    if(keyDown("RIGHT_ARROW")){
      walle.x = walle.x+8;
      walle.changeAnimation("walle1");   
    }
    Collected(t1);
    Collected(t2);
    Collected(t3);
    Collected(t4);
    Collected(m1);
    Collected(m2);
    Collected(m3);
    Collected(m4);
    Collected(m5);
    Collected(m6);
   
  }
  if(gameState === 3){
    createCanvas(1100,600)
    background("black");
    walle.y = 500;
    walle.x = 300;
    eve.x = 650;
    t1.destroy();
    t2.destroy();
    t3.destroy();
    t4.destroy();
    m1.destroy();
    m2.destroy();
    m3.destroy();
    m4.destroy();
    m5.destroy();
    m6.destroy();
    junk1.x = 3800;
    junk2.x = 7990;
    plant.x = 2000;
    walle.changeAnimation("walle3");
    walle.scale = 1;
  }
 
   drawSprites();

   if(gameState === 2){
    fill ("yellow")
    textSize(30);
    text("Trash collected inside : "+Tscore +" %" , 370,30)
    fill ("yellow")
    textSize(30);
    text("Cubes converted : "+cube  , 20,30)
   }
 if(gameState === 3){
  fill("yellow")
  textSize(50);
  text("Choose Character",380,130);
 }
    
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function Collected(a){
  if(walle.isTouching(a)){
    Tscore = Tscore+10;
    a.destroy();
  }
}
/*function Allert (){
   swal({
      title: `Awesome!`,
      text: "You Have Collected The Plant! ",
      imageUrl:
        "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    });
  
}*/