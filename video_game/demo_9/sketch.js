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
let imgGround;
let imgBuildings;
let imgClouds;
let imgSky;
let imgStars;
let imgInstruction = [];
let imgPlaybutton;
let imgGameover;
let imgCover;
let imgCover2;
let imgDogScreen;
let imgQuarantineScreen;
let imgCovidScreen;
let imgCollision;
let animation;
let animationEnded = false;
let groundX = 0;
let buildingX = 0;
let skyX = 0;
let cloudX = 0;
let starX = 0;
let collideOb = 0;
let collideVi = 0;
let index = 1;
let virus = [];
let score = 3;
let bgm;
let jumpMusic;
let gameoverMusic;
let recordMusic;
let collisionMusic;
let mouseClickMusic;
let sceneNum = 0;
let lastCollidedObstacleIndex;
let collisionHappened = false;
let collisionTime = 0;
let subtitleInstance;
let gameplayStartTime;
let instructionNumber = 1;
let initialSpeed = 7;
let acceleration = 0.01;

function setup() {
  createCanvas(700, 450);

  //create character
  character = new Character();

  //create energy
  energy = new Energy();

  //create life
  life = new Life();

  //create "play" button
  button1 = createImg("01buttons/playbutton.png", "the play button");
  button1.position(width / 2 - 55, height / 2 + 115);
  button1.size(148 / 1.6, 81 / 1.6);

  //create "start" button
  button2 = createImg("01buttons/startbutton.png", "the play button");
  button2.position(width / 2 - 45, height / 2 + 65);
  button2.size(148 / 1.6, 81 / 1.6);

  //create"arrow" button
  button3 = createImg("01buttons/arrowbutton.png", "the next page button");
  button3.position(width / 2 - 25, height / 2 + 75);
  button3.size(88 / 2, 67 / 2);

  button3.mousePressed(() => {
    instructionNumber++;
    mouseClickMusic.play();
    mouseClickMusic.setVolume(0.3);
    if (instructionNumber > 3) {
      instructionNumber = 3;
      button3.hide();
      button2.show();
    }
  });

  //create"restart" button
  button4 = createImg("01buttons/restartbutton.png", "the restart button");
  button4.position(width / 2 - 30, height - 90);
  button4.size(176 / 2, 156 / 2);

  //hide the html video loader
  animation.hide();
  animation.play();

  // When the video ends, set animationEnded to true
  animation.onended(() => {
    animationEnded = true;
  });

  //create subtitles
  subtitleInstance = new Subtitle(subtitleData);
}

//create 8 different scenes;
function draw() {
  switch (sceneNum) {
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
function restart() {
  sceneNum = 2;
  lastAddTime = 0;
  score = 3;
  obstacles = [];
  virus = [];
  collideOb = 0;
  collideVi = 0;
  energy = new Energy();
  life = new Life();
  gameplayStartTime = millis();
  instructionNumber = 1;
  subtitleInstance.reset();
  gameplayStartTime = null;
}

//create conditions for switching between different scenes
function sceneNumChange() {
  if (sceneNum == 1) {
    sceneNum = 2;
    bgm.play();
    bgm.setVolume(0.4);
  } else if (sceneNum == 2) {
    sceneNum = 3;
    bgm.play();
    recordMusic.play();
    bgm.setVolume(0.4);
  } else if (score == 0) {
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
    jumpMusic.setVolume(0.06);
  }
}

//load all the media
function preload() {
  //load the character images;
  for (let i = 1; i <= 5; i++) {
    var str1 = "04character/Player" + i + ".png";
    imgPlayer[i] = loadImage(str1);
  }

  //load the obstacle images;
  for (let j = 1; j < 4; j++) {
    let str2 = "02obstacles/o" + j + ".png";
    imgObstacles[j] = loadImage(str2);
  }

  //load the virus images;
  for (let k = 1; k <= 2; k++) {
    let str3 = "03virus/virus" + k + ".png";
    imgVirus[k] = loadImage(str3);
  }

  //load the energy images;
  for (let l = 0; l < 4; l++) {
    let str4 = "08energy/energy" + l + ".png";
    imgEnergy[l] = loadImage(str4);
  }

  //load the life images;
  for (let m = 0; m < 4; m++) {
    let str5 = "09life/life" + m + ".png";
    imgLife[m] = loadImage(str5);
  }

  //load the instructionpage images;
  for (let n = 1; n < 4; n++) {
    let str6 = "06images/instructionpage" + n + ".png";
    imgInstruction[n] = loadImage(str6);
  }

  //load the other images;
  imgGround = loadImage("11background/ground.png");
  imgBuildings = loadImage("11background/buildings.png");
  imgClouds = loadImage("11background/clouds.png");
  imgSky = loadImage("11background/sky.png");
  imgStars = loadImage("11background/stars.png");
  imgCollision = loadImage("06images/collision2.png");
  imgGameover = loadImage("06images/gameover.png");
  animation = createVideo("07animations/demo.mp4");
  imgCover = loadImage("06images/cover.png");
  imgCover2 = loadImage("06images/instructionpage0.png");
  imgDogScreen = loadImage("10restartscreen/dog.png");
  imgQuarantineScreen = loadImage("10restartscreen/quarantine.png");
  imgCovidScreen = loadImage("10restartscreen/covid.png");

  //load the sounds and musics;
  bgm = loadSound("05songs/backgroundMusic1.mp3");
  jumpMusic = loadSound("05songs/jumpMusic.mov");
  gameoverMusic = loadSound("05songs/gameover.mp3");
  recordMusic = loadSound("05songs/record.mp3");
  collisionMusic = loadSound("05songs/collision.mp3");
  mouseClickMusic = loadSound("05songs/click.mp3");
}

//create obstacles
function addObstacle() {
  // Convert to seconds
  let elapsedTime = (millis() - gameplayStartTime) / 1000.0;
  let currentSpeed = initialSpeed + acceleration * elapsedTime;

  let interval = random(800, 3000);
  if (millis() - lastAddTime > interval) {
    // Generates a random floating-point number between 0 and 1.
    let randomNumber = random(1);

    if (randomNumber < 0.75) {
      // 75% chance to create an Obstacle
      let obstacleIndex = ceil(randomNumber * 4); // Generates a random integer between 1 and 3.
      obstacles.push(new Obstacles(obstacleIndex, currentSpeed)); // Create a new Obstacle with the given index
    } else {
      // 25% chance to create a Virus
      let newVirus = new Virus(currentSpeed);
      virus.push(newVirus); // Create a new Virus
    }

    lastAddTime = millis();
  }
}

//make the background in gamePlayScreen move
function backgroundMove() {
  let elapsedTime = (millis() - gameplayStartTime) / 1000.0;
  let speed = initialSpeed + acceleration * elapsedTime;

  if (groundX > (-1 * imgGround.width) / 4) {
    groundX -= speed;
  } else {
    groundX = 0;
    image(imgGround, groundX, 0, imgGround.width / 2, height);
  }
  
  if (buildingX > (-1 *imgBuildings.width) / 4){
    buildingX -= speed /2;
  } else {
    buildingX = 0;
    image(imgBuildings,buildingX,0,imgBuildings.width /2, height);
  }
  
  if (cloudX > (-1 * imgClouds.width) / 4) {
    cloudX -= speed /3;
  } else {
    cloudX = 0;
    image(imgClouds, cloudX, 0, imgClouds.width / 2, height);
  }
  
  if (skyX > (-1 *imgSky.width) / 4){
    skyX -= speed /4;
  } else {
    skyX = 0;
    image(imgSky,skyX,0,imgSky.width /2, height);
  }
  
  if (starX > (-1 *imgStars.width) / 4){
    starX -= speed /5;
  } else {
    starX = 0;
    image(imgStars,starX,0,imgStars.width /2, height);
  }
  

}

function animationScreen() {
  image(animation, 0, 0, width, height);
  button1.hide();
  button2.hide();
  button3.hide();
  button4.hide();

  // If the animation hasn't ended, play it
  if (!animationEnded) {
    animation.play();
  } else {
    // If the animation has ended, move to the next scene
    sceneNum = 1;
  }
}

function homepageScreen() {
  image(imgCover, 0, 0, imgCover.width / 2, height);
  button1.show();
  button1.mousePressed(() => {
    mouseClickMusic.play();
    mouseClickMusic.setVolume(0.3);
    sceneNumChange();
  });
  button2.hide();
  button3.hide();
  button4.hide();
}

function instructScreen() {
  image(imgCover2, 0, 0, width, height);
  push();
  imageMode(CENTER);
  image(
    imgInstruction[instructionNumber],
    width / 2,
    height / 2,
    imgInstruction[instructionNumber].width / 2,
    imgInstruction[instructionNumber].height / 2
  );
  pop();
  button1.hide();
  button4.hide();

  // Show the "arrow" button unless instructionNumber is 3
  if (instructionNumber < 3) {
    button3.show();
    button2.hide();
  } else {
    button3.hide();
    button2.show();
  }

  // Start button functionality
  button2.mousePressed(() => {
    mouseClickMusic.play();
    mouseClickMusic.setVolume(0.3);
    sceneNumChange();
  });
}

function gamePlayScreen() {
  // Initialize gameplayStartTime if it hasn't been set yet
  if (!gameplayStartTime) {
    gameplayStartTime = millis();
  }

  button1.hide();
  button2.hide();
  button3.hide();
  button4.hide();
  
  //show the background images and make them move
  background(255)
  backgroundMove();
  image(imgSky, skyX, 0, imgSky.width / 2, height);
  image(imgStars, starX, 0, imgStars.width / 2, height);
  image(imgClouds, cloudX, 0, imgClouds.width / 2, height);
  image(imgBuildings, buildingX, 0, imgBuildings.width / 2, height);
  image(imgGround, groundX, 0, imgGround.width / 2, height);
  
  //show game elements
  energy.show();
  energy.update();
  life.show();
  life.update();
  character.move();
  character.show();
  addObstacle();
  character.update();
  if (frameCount % 15 == 0) index++;

  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].move();
    obstacles[i].show();

    if (character.hits(obstacles[i])) {
      character.collideTime = millis();
      collideOb += 1;
      collisionMusic.play();
      collisionMusic.setVolume(0.4);
      collisionHappened = true;
      collisionTime = millis();
      score -= 1;

      // Assuming 'type' stores which obstacle image it is rest of the code ...
      lastCollidedObstacleIndex = obstacles[i].index;

      // This will remove the obstacle from the array
      obstacles.splice(i, 1);

      // Update the collision time
      character.collideTime = millis();

      if (collideOb == 3) {
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
      collisionMusic.play();
      collisionMusic.setVolume(0.4);
      collisionHappened = true;
      collisionTime = millis();

      // This will remove the obstacle from the array
      virus.splice(i, 1);

      // Update the collision time
      character.collideTime = millis();

      if (collideVi == 3) {
        bgm.stop();
        recordMusic.stop();
        gameoverMusic.play();
        gameoverMusic.setVolume(0.4);
        sceneNum = 4;
      }
    }
  }
  // Show for 500 milliseconds after collision
  if (collisionHappened && millis() - collisionTime < 500) {
    image(imgCollision, 0, 0, 700, 450);
  } else {
    // Reset the collision flag after displaying the image
    collisionHappened = false;
  }

  // Convert milliseconds to seconds
  let elapsedTime = (millis() - gameplayStartTime) / 1000.0;
  let currentSubtitle = subtitleInstance.getSubtitle(elapsedTime);
  if (currentSubtitle) {
    fill(255, 90);
    textSize(10);
    push();
    textAlign(CENTER, CENTER);
    // Display at the bottom center of the screen
    text(currentSubtitle, width / 2, 20);
    pop();
  }

  sceneNumChange();
}

function gameOverScreen() {
  background(15);

  push();
  imageMode(CENTER);
  image(
    imgGameover,
    width / 2,
    height / 2,
    imgGameover.width / 2,
    imgGameover.height / 2
  );
  pop();
  button1.hide();
  button2.hide();
  button3.hide();
  button4.show();
  button4.mousePressed(() => {
    mouseClickMusic.play();
    mouseClickMusic.setVolume(0.3);
    restart();
    sceneNum = 1;
    gameoverMusic.stop();
    recordMusic.stop();
  });
}

function dogScreen() {
  background(50);
  image(imgDogScreen, 0, 0, imgDogScreen.width / 2, imgDogScreen.height / 2);
  button1.hide();
  button2.hide();
  button3.hide();
  button4.show();
  button4.mousePressed(() => {
    mouseClickMusic.play();
    mouseClickMusic.setVolume(0.3);
    restart();
    sceneNum = 1;
    gameoverMusic.stop();
    recordMusic.stop();
  });
}

function quarantineScreen() {
  background(50);
  image(
    imgQuarantineScreen,
    0,
    0,
    imgQuarantineScreen.width / 2,
    imgQuarantineScreen.height / 2
  );
  button1.hide();
  button2.hide();
  button3.hide();
  button4.show();
  button4.mousePressed(() => {
    mouseClickMusic.play();
    mouseClickMusic.setVolume(0.3);
    restart();
    sceneNum = 1;
    gameoverMusic.stop();
    recordMusic.stop();
  });
}

function testScreen() {
  background(50);
  image(
    imgCovidScreen,
    0,
    0,
    imgCovidScreen.width / 2,
    imgCovidScreen.height / 2
  );
  button1.hide();
  button2.hide();
  button3.hide();
  button4.show();
  button4.mousePressed(() => {
    mouseClickMusic.play();
    mouseClickMusic.setVolume(0.3);
    restart();
    sceneNum = 1;
    gameoverMusic.stop();
    recordMusic.stop();
  });
}
