let character;
let obstacles = [];
let lastAddTime = 0;
let imgElppa = [];
let imgBird = [];
let imgObstacles = [];
let imgBackground;
let groundX = 0;
let collideOb = 0;
let index = 1;
let birds = [];
let score = 0;
let bgm;
let jumpMusic;
let tr = 255;


function setup() {
  createCanvas(615, 408);
  character = new Character();
  bgm.loop();
}

function draw() {
  background(200);
  backgroundPicture();
  image(imgBackground,groundX,0,imgBackground.width,height);
  push();
  instruction();
  pop();
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
      textAlign(CENTER);
      textSize(70);
      text("Game Over", width / 2, height / 2);
      bgm.stop();
      noLoop();
    }
  }
  
  for (let b of birds){
    b.update();
    b.move();
    b.show();
    character.addScore(b);
    
    if (character.hits(b)){
      collideOb = 1;
      textAlign(CENTER);
      textSize(70);
      text("Game Over", width / 2, height / 2);
      bgm.stop();
      noLoop();
    }
  }
  printScore();
}

function keyPressed() {
  if (key == " ") {
    character.jump();
    jumpMusic.play();
  }
}

function preload(){
  for (let i=1; i<=5; i++){
    var str1="04character/elppa"+i+".png";
    imgElppa[i]=loadImage(str1);
  }
  
  for (let j=1; j <=3; j++){
    let str2 ="02obstacles/c"+j+".png";
    imgObstacles[j] = loadImage(str2);
  }
  
  for (let k=1; k <=2; k++){
    let str3 ="03virus/bird"+k+".png";
    imgBird[k] = loadImage(str3);
  }
  
  imgBackground = loadImage('background2.png');
  
  bgm = loadSound('05songs/bgm.mp3');
  jumpMusic = loadSound('05songs/jump.mp3');
  
}

function addObstacle(){
  let interval = random(800, 4000);
  if (millis() - lastAddTime > interval) {
    if (int(interval)%2 == 0){
      obstacles.push(new Obstacles());
    }
    else{
      birds.push(new Bird());
    }
    lastAddTime = millis();
  }
}

function backgroundPicture(){
  if(groundX>(-1)*(imgBackground.width)/2){
    groundX -= 3;
  }
  else{
    groundX = 0;
    image(imgBackground, groundX, 0,imgBackground.width,height);
  }
  
}
function instruction(){
  tr -= 0.8;
  textAlign(CENTER);
  fill(255,tr);
  textSize(15);
  text("Press Space to Jump!" ,width/2,height- 50);
}

function printScore(){
  textAlign(CENTER);
  fill(50);
  textSize(15);
  text("Score" + score,width/2,height/9);
}