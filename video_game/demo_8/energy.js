// class Energy{
//   constructor(){
//     this.x = width/18;
//     this.y = height/18;
//     this.img = imgEnergy[3];
//     this.w = this.img.width/3;
//     this.h = this.img.height/12;
//   }
  
//   show(){
//     image(this.img,this.x,this.y,this.w,this.img.h);
//   }
  
//   update(){
//     this.img = imgEnergy[3 - collideOb];
//   }
// }

class Energy {
  constructor() {
    this.x = width / 4;
    this.y = height / 18;
    this.w = imgEnergy[3].width / 2.3;
    this.h = imgEnergy[3].height / 2.3;
    this.lastUpdateTime = millis();
    this.collisionCount = 0;
    this.index = 3;
  }

  show() {
    image(imgEnergy[this.index], this.x, this.y, this.w, this.h);
  }

  update() {
    let currentTime = millis();
    
    if (collideVi > this.collisionCount) {
      this.collisionCount = collideVi;
      this.index = 3 - this.collisionCount;
      this.lastUpdateTime = currentTime;
    } else if (currentTime - this.lastUpdateTime >= 5000 && this.index < 3) {
      this.index++;
      this.lastUpdateTime = currentTime;
    }
  }
}
