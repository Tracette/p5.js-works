let character;
let obstacles = [];
let lastAddTime = 0;
let imgPlayer = [];
let imgVirus = [];
let imgObstacles = [];
let imgBackground;
let imgInstruction;
let imgPlaybutton;
let imgGameover;
let groundX = 0;
let collideOb = 0;
let index = 1;
let virus = [];
let score = 25;
let bgm;
let jumpMusic;
let gameoverMusic;
let sceneNum = 1;


function setup() {
  createCanvas(700, 450);
  character = new Character();
  
  //create "play" button
  button1 = createImg('01buttons/playbutton.png', "the play button");
  button1.position(width/2 -30, height/2 +20);
  button1.size(148/2,81/2);

  //create"restart" button
  button2 = createImg('01buttons/restartbutton.png', "the restart button");
  button2.position(width/2 -50, height/2);
  button2.size(226/2,102/2);
}

function draw() {
  
  switch(sceneNum) {
    case 1:
      instructScreen();
      break;
      
    case 2:
      sceneNumChange()
      gamePlayScreen();
      break;
      
    case 3:
      gameOverScreen();
      break;
  }
  
}


function restart(){
  sceneNum = 1;
  lastAddTime= 0; 
  score= 25; 
  obstacles = [];
  virus = [];
  collideOb = 0;
}

function sceneNumChange(){
  if (sceneNum == 1){
    sceneNum =2;
    bgm.play();
    bgm.setVolume(0.4);
  } else if (sceneNum == 3) {
    sceneNum = 1;
    gameoverMusic.stop();
  } else if (score == 0){
    bgm.stop();
    gameoverMusic.play();
    gameoverMusic.setVolume(0.4);
    sceneNum = 3;
  }
}

function keyPressed() {
  if (key == " ") {
    character.jump();
    jumpMusic.play();
    jumpMusic.setVolume(0.1);
  }
}

function preload(){
  for (let i=1; i<=5; i++){
    var str1="04character/Player"+i+".png";
    imgPlayer[i]=loadImage(str1);
  }
  
  for (let j=1; j <=3; j++){
    let str2 ="02obstacles/o"+j+".png";
    imgObstacles[j] = loadImage(str2);
  }
  
  for (let k=1; k <=2; k++){
    let str3 ="03virus/virus"+k+".png";
    imgVirus[k] = loadImage(str3);
  }
  
  imgBackground = loadImage('background.png');
  imgInstruction = loadImage('Instruction.png')
  bgm = loadSound('05songs/backgroundMusic.mp3');
  jumpMusic = loadSound('05songs/jumpMusic.mov');
  gameoverMusic = loadSound('05songs/gameover.mp3');
  imgGameover = loadImage('gameover.png');
  
}

function addObstacle(){
  let interval = random(800, 4000);
  if (millis() - lastAddTime > interval) {
    if (int(interval)%2 == 0){
      obstacles.push(new Obstacles());
    }
    else{
      virus.push(new Virus());
    }
    lastAddTime = millis();
  }
}

function backgroundPicture(){
  if(groundX>(-1)*(imgBackground.width)/4){
    groundX -= 3;
  }
  else{
    groundX = 0;
    image(imgBackground, groundX, 0,imgBackground.width/2,height);
  }
  
}

function printScore(){
  textAlign(CENTER);
  fill(50);
  textSize(15);
  text("Score" + score,width/2,height/9);
}

function instructScreen(){
  background(150);  
  image(imgBackground,groundX,0,imgBackground.width/2,height);
  push();
  imageMode(CENTER);
  image(imgInstruction,width/2,height/2,imgInstruction.width/2,imgInstruction.height/2);
  pop();
  button1.show();
  button1.mousePressed(sceneNumChange);
  button2.hide();
  restart();
}

function gamePlayScreen(){
  background(200);
  button1.hide();
  button2.hide();
  backgroundPicture();
  image(imgBackground,groundX,0,imgBackground.width/2,height);
  // push();
  // pop();
  character.move();
  character.show();
  addObstacle();
  character.update();
  if (frameCount%15 == 0) index++;
  for (let o of obstacles) {
    o.move();
    o.show();
    character.addScore(o);
    
    if (character.hits(o)) {
      collideOb = 1;
      bgm.stop();
      gameoverMusic.play();
      gameoverMusic.setVolume(0.4);
      sceneNum = 3;
    }
  }
  
  for (let v of virus){
    v.update();
    v.move();
    v.show();
    character.addScore(v);
    
    if (character.hits(v)){
      gameoverMusic.play();
      gameoverMusic.setVolume(0.4);
      collideOb = 1;
      bgm.stop();
      sceneNum = 3;
    }
  }
  printScore();
  
}

function gameOverScreen(){
  background(15);
  push();
  imageMode(CENTER); image(imgGameover,width/2,height/2,imgGameover.width/2,imgGameover.height/2);
  pop();
  button1.hide();
  button2.show();
  button2.mousePressed(sceneNumChange);
}