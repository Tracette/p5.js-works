class Life{
  constructor(){
    this.x = width/18;
    this.y = height/18;
    this.img = imgLife[3];
    this.w = imgLife[3].width / 2.2;
    this.h = imgLife[3].height / 2.2;
    this.index = 3;
    this.collisionCount = 0;
  }
  
  show(){
    image(imgLife[this.index], this.x, this.y, this.w, this.h);
  }
  
  update(){
    // Only reduce this.index if a new collision has occurred.
    if (collideOb > this.collisionCount) {
      this.index--;
      if (this.index < 0) this.index = 0;
    }

    // Update the collision count.
    this.collisionCount = collideOb;

    this.img = imgLife[this.index];
  }
}

