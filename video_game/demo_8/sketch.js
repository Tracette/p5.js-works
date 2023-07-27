let character;
let energy;
let life;
let obstacles = [];
let lastAddTime = 0;
let imgPlayer = [];
let imgVirus = [];
let imgObstacles = [];
let imgEnergy = [];
let imgLife = [];
let imgBackground;
let imgInstruction;
let imgPlaybutton;
let imgGameover;
let imgCover;
let animation;
let animationEnded = false;
let groundX = 0;
let collideOb = 0;
let collideVi = 0;
let index = 1;
let virus = [];
let score = 3;
let bgm;
let jumpMusic;
let gameoverMusic;
let recordMusic;
let sceneNum = 0;
let lastCollidedObstacleIndex;




function setup() {
  createCanvas(700, 450);
  
  //create character
  character = new Character();
  
  //create energy
  energy = new Energy();
  
  //create life
  life = new Life();
  
  //create "play" button
  button1 = createImg('01buttons/playbutton.png', "the play button");
  button1.position(width/2 -55, height/2 +115);
  button1.size(148/1.6,81/1.6);
  
  //create "start" button
  button2 = createImg('01buttons/startbutton.png', "the play button");
  button2.position(width/2 -55, height/2 +125);
  button2.size(148/1.6,81/1.6);

  //create"restart" button
  button4 = createImg('01buttons/restartbutton.png', "the restart button");
  button4.position(width/2 -50, height/2);
  button4.size(226/2,102/2);
  
  
  //hide the html video loader
  animation.hide();
  animation.play();
  
  // When the video ends, set animationEnded to true
  animation.onended(() => {
    animationEnded = true;
  });
}


  //create 8 different scenes;
function draw() {
  
  switch(sceneNum) {
      
    case 0:
      animationScreen();
      break;
    
    case 1:
      homepageScreen();
      break;
      
    case 2:
      instructScreen();
      break;
      
    case 3:
      gamePlayScreen();
      break;
      
    case 4:
      gameOverScreen();
      break;
    
    case 5:
      dogScreen();
      break;

    case 6:
      quarantineScreen();
      break;

    case 7:
      testScreen();
      break;
      
  }
  
}

  //reset the variables when the game restarts
function restart(){
  sceneNum = 2;
  lastAddTime= 0; 
  score = 3;
  obstacles = [];
  virus = [];
  collideOb = 0;
  collideVi = 0;
  energy = new Energy();
  life = new Life();
}


  //create conditions for switching between different scenes
function sceneNumChange(){
    if (sceneNum == 1){
        sceneNum = 2;
        bgm.play();
        bgm.setVolume(0.4);
    } else if (sceneNum == 2){
        sceneNum = 3;
        bgm.play();
        recordMusic.play();
        bgm.setVolume(0.4);
    } else if (score == 0){
        bgm.stop();
        recordMusic.stop();
        gameoverMusic.play();
        gameoverMusic.setVolume(0.4);
        sceneNum = lastCollidedObstacleIndex + 4;
    }
}




  //When players press space, they can jump
function keyPressed() {
  if (key == " ") {
    character.jump();
    jumpMusic.play();
    jumpMusic.setVolume(0.1);
  }
}

  //load all the images
function preload(){
  for (let i=1; i<=5; i++){
    var str1="04character/Player"+i+".png";
    imgPlayer[i]=loadImage(str1);
  }
  
  for (let j=1; j < 4; j++){
    let str2 ="02obstacles/o"+j+".png";
    imgObstacles[j] = loadImage(str2);
  }
  
  for (let k=1; k <=2; k++){
    let str3 ="03virus/virus"+k+".png";
    imgVirus[k] = loadImage(str3);
  }
  
  for (let l=0; l < 4; l++){
    let str4 ="08energy/energy"+l+".png";
    imgEnergy[l] = loadImage(str4);
  }
  
  for (let m=0; m < 4; m++){
    let str5 ="09life/life"+m+".png";
    imgLife[m] = loadImage(str5);
  }
  
  imgBackground = loadImage('06images/background.png');
  imgInstruction = loadImage('06images/Instructionpage.png')
  bgm = loadSound('05songs/backgroundMusic.mp3');
  jumpMusic = loadSound('05songs/jumpMusic.mov');
  gameoverMusic = loadSound('05songs/gameover.mp3');
  recordMusic = loadSound('05songs/record.mp3');
  imgGameover = loadImage('06images/gameover.png');
  animation = createVideo('07animations/demo.mp4');
  imgCover = loadImage('06images/cover.png');
  
}

  //create obstacles
function addObstacle() {
  let interval = random(800, 4000);
  if (millis() - lastAddTime > interval) {
    let obstacleIndex = floor(random(3)) + 1;   // Generates a random integer between 1 and 3.

    if (obstacleIndex == 3) {  // Replace 3 with whatever condition you used to add a Virus instead of an Obstacle
      virus.push(new Virus());  // Create a new Virus (assuming your Virus class doesn't need an index)
    } else {
      obstacles.push(new Obstacles(obstacleIndex));  // Create a new Obstacle with the given index
    }

    lastAddTime = millis();
  }
}


  //make the background in gamePlayScreen move
function backgroundPicture(){
  if(groundX>(-1)*(imgBackground.width)/4){
    groundX -= 7;
  }
  else{
    groundX = 0;
    image(imgBackground, groundX, 0,imgBackground.width/2,height);
  }
  
}


  
function animationScreen() {
  image(animation, 0, 0, width, height);
  button1.hide();
  button2.hide();
  button4.hide();
  
  // If the animation hasn't ended, play it
  if (!animationEnded) {
    animation.play();
  } else {
  // If the animation has ended, move to the next scene
    sceneNum = 1;
  }
}


function homepageScreen(){
  //background(50);
  image(imgCover,0,0,imgCover.width/2,height);
  button1.show();
  button1.mousePressed(sceneNumChange);
  button2.hide();
  button4.hide();
  
}


function instructScreen(){  
  push();
  imageMode(CENTER);
  image(imgInstruction,width/2,height/2,imgInstruction.width/2,imgInstruction.height/2);
  pop();
  button1.hide();
  button2.show();
  button2.mousePressed(sceneNumChange);
  button4.hide();
  restart();
}


function gamePlayScreen(){
  button1.hide();
  button2.hide();
  button4.hide();
  backgroundPicture();
  image(imgBackground,groundX,0,imgBackground.width/2,height);
  energy.show();
  energy.update();
  life.show();
  life.update();
  character.move();
  character.show();
  addObstacle();
  character.update();
  if (frameCount%15 == 0) index++;
  
  for (let i = obstacles.length - 1; i >= 0; i--) {
  obstacles[i].move();
  obstacles[i].show();
    
  if (character.hits(obstacles[i])) {
    collideOb += 1;
    score -= 1;
    
    // Assuming 'type' stores which obstacle image it is rest of the code ...
    lastCollidedObstacleIndex = obstacles[i].index; 
    
    // This will remove the obstacle from the array
    obstacles.splice(i, 1);
    
    // Update the collision time
    character.collideTime = millis();
    
    if(collideOb == 3){
      bgm.stop();
      gameoverMusic.play();
      gameoverMusic.setVolume(0.4);
      sceneNum = 4;
    }
  }
}

  for (let i = virus.length - 1; i >= 0; i--) {
  virus[i].move();
  virus[i].show();
  virus[i].update();
    
  if (character.hits(virus[i])) {
    collideVi += 1;
    
    // This will remove the obstacle from the array
    virus.splice(i, 1); 
    
    // Update the collision time
    character.collideTime = millis();
    
    if(collideVi == 3){
      bgm.stop();
      recordMusic.stop();
      gameoverMusic.play();
      gameoverMusic.setVolume(0.4);
      sceneNum = 4;
    }
  }
}
  sceneNumChange();
}


function gameOverScreen(){
  background(15);
  push();
  imageMode(CENTER); image(imgGameover,width/2,height/2,imgGameover.width/2,imgGameover.height/2);
  pop();
  button1.hide();
  button2.hide();
  button4.show();
  button4.mousePressed(() => {
    sceneNum = 1;
    gameoverMusic.stop();
    recordMusic.stop();
});
}


function dogScreen(){
  background(50);
  button1.hide();
  button2.hide();
  button4.show();
  console.log('dog');
  button4.mousePressed(() => {
    sceneNum = 1;
    gameoverMusic.stop();
    recordMusic.stop();
});
}


function quarantineScreen(){
  background(50);
  button1.hide();
  button2.hide();
  button4.show();
  console.log('quarantine');
  button4.mousePressed(() => {
    sceneNum = 1;
    gameoverMusic.stop();
    recordMusic.stop();
});
}


function testScreen(){
  background(50);
  button1.hide();
  button2.hide();
  button4.show();
  console.log('covidtest');
  button4.mousePressed(() => {
    sceneNum = 1;
    gameoverMusic.stop();
    recordMusic.stop();
});
}