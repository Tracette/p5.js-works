// class Life {
//   constructor(){
//     this.img = imgLife[3]; 
//     this.x = width/2;
//     this.y = height /18;
//     this.w = this.img.width/3;
//     this.h = this.img.height/6;
//     this.lastUpdateTime = millis();
//     this.index = 0;

//   }

//   show(){
//     image(this.img, this.x, this.y, this.w, this.h);
//   }
  
//   update(){
//     let currentTime = millis();
//     if (collideVi > 0 && currentTime - this.lastUpdateTime >= 5000){
//         if(currentTime - this.lastUpdateTime >= 5000 )
//           collideVi --;
//           this.lastUpdateTime = currentTime;
//           this.img = imgLife[ 3 - collideVi];
//     }
    
//     //this.img = imgLife[3 - collideVi];
//   }
//  }


class Life {
  constructor() {
    this.x = width / 2;
    this.y = height / 18;
    this.w = imgLife[3].width / 3;
    this.h = imgLife[3].height / 6;
    this.lastUpdateTime = millis();
    this.collisionCount = 0;
    this.index = 3;
  }

  show() {
    image(imgLife[this.index], this.x, this.y, this.w, this.h);
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



