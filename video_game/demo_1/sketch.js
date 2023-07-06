let player;
let bImg, bgm; 
let button1;
let button2;
let animation;
let sceneNum = 0;
let score = 100;
let trains = [];
let trainsNum = 150;
let kills = [];
let killsNum = 50;
let virus = [];
let virusNum = 150;
let bImgX = 0;
let trainImg = [];
let dogImg, virusImg, killImg, jailImg, playerImg,coverImg;



function preload(){
  playerImg = loadImage('player.png');
  coverImg = loadImage('cover.png');
  dogImg = loadImage('dog.png');
  virusImg = loadImage('virus.png');
  jailImg = loadImage('jail.png');
  killImg = loadImage('kill.png');
  bcImg = loadImage('bc.png');
  bgm = loadSound('bgm.mov');
  animation = createVideo(['animation.mp4']);
}




function setup() {
  
  
  createCanvas(700, 450);
  //hide the html video loader
  animation.hide();
  animation.play();
  
  player = new Player();
  
  //create "play" button
  button1 = createImg('playbutton.png');
  button1.position(width/2 - 50, height/2 +100);
  button1.size(370/3,155/3);

  
  button2 = createButton('play again');
  button2.position(width/2 -50, height/2);
  button2.size(100,50);
  
  //create new dog obstacles
  for (let i = 0; i < trainsNum; i++ ){
    trains[i] = new Train();
  }
  
  //create new virus
  for (let i = 0; i < trainsNum; i++ ){
    virus[i] = new Virus();
  }
  
  //create new kill obstacles
  for (let i = 0; i < killsNum; i++ ){
    kills[i] = new Kill();
  }
}



function draw() {
  
  
    switch(sceneNum) {
    case 0:
      scene0();
      break;
      
    case 1:
      scene1();
      break;
      
    case 2:
      scene2();
      break;
      
    case 3:
      scene3();
      break;
  }
  

}

function sceneNumChange(){
  if (sceneNum == 1){
    bgm.play();
    sceneNum = 2;
  } else if (sceneNum == 3) {
    sceneNum = 0;       
  }
}



function keyPressed() {
  if (key == ' '){ 
    player.jump();
  } 
}

function reset(){
    for (let i = 0; i < trainsNum; i++ ){
    trains[i] = new Train();
  }
    for (let i = 0; i < trainsNum; i++ ){
    virus[i] = new Virus();
  }
    for (let i = 0; i < killsNum; i++ ){
    kills[i] = new Kill();
  }
  player.x = player.r;
}

function scene0() {
  image(animation, 0, 0, width, height);
  button1.hide();
  button2.hide();
  if (animation.time() / animation.duration() === 1 && sceneNum == 0){
      sceneNum = 1;
    }
  
  print('scene 0');

}




function scene1() {
  background(255);
  image(bcImg, bImgX, 0, 1770, height);
  push();
  imageMode(CENTER);
  image(coverImg,width/2,height/2,250,150);
  pop();

  button1.show();
  button1.mousePressed(sceneNumChange);
  button2.hide();
  print('scene 1');
  reset();
}



function scene2() {
  background(255);
  bImgX = bImgX - 0.4;
  image(bcImg, bImgX, 0, 1770, height);
  push();
  player.show();
  player.move();
  pop();
  button1.hide();
  button2.hide();
  print('scene 2');

  
  
  for (let i = 0; i < trainsNum; i++){
    if ((i % 30) == 0){
    trains[i].show();
    trains[i].move();
    virus[i].move();
    virus[i].show();
    if (player.hits(trains[i])){
      // score -= 1 ; 
      sceneNum = 3;
      }
  }
  
}
  
   for (let i = 0; i < killsNum; i++){
    if ((i % 20) == 0){
    kills[i].show();
    kills[i].move();
    if (player.hits(kills[i])){
      // score -= 1 ; 
      sceneNum = 3;
      }
  }
  
}
  
}

function scene3() {
  push()
  background(0);
  pop();
  button1.hide();
  button2.show();
  button2.mousePressed(sceneNumChange);
  console.log('scene 3');
  bgm.stop();


}

