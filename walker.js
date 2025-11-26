class walker
{
  constructor()
  {
    // 0 = go left; 1 = go right; 2 = go up; 3 = go down
    // 4 = go N/W; 5 = go N/E; 6 = go S/W; 7 = go S/E
    this.dir = floor(random(0, 8));
    this.x = width / 2;
    this.y = height / 2;
    this.count = 0;
    this.sWatch = 0;
    this.doItOnce = 0;

    this.xTheta = 0;
    this.yTheta = 90;

    this.xDir = random(-2, 2);
    this.yDir = random(-2, 2);
  }

  display(sWeight, sColor)
  {
    strokeWeight(sWeight);
    stroke(sColor);
    point(this.x,this.y);
  }

  resetCoordinates(x, y)
  {
    this.x = x;
    this.y = y;
  }

  move(i)
  {
    //0 : random walk
    //1 : straight lines
    //2 : curved lines

    switch(i)
    {
      case 0: // random walk

        this.x += this.xDir;
        this.y += this.yDir;

        break;

      case 1: // straight lines

        if (this.count % 60 == 0) 
          {
            this.sWatch++;
            this.doItOnce = 1;
          }

        if(this.sWatch % 3 == 0 && this.doItOnce)
          {
            this.dir = floor(random(0, 8));
            this.doItOnce = 0;
          } 

        switch(this.dir)
        {
          case 0:
            this.x -= this.xDir;
            break;
      
          case 1:
            this.x += this.xDir;
            break;
      
          case 2:
            this.y += this.yDir;
            break;
      
          case 3:
            this.y -= this.yDir;
            break;

          case 4:
            this.y += this.yDir;
            this.x -= this.xDir;
            break;
          
          case 5:
            this.y += this.yDir;
            this.x += this.xDir;
            break;

          case 6:
            this.y -= this.yDir;
            this.x -= this.xDir;
            break;

          case 7:
            this.y -= this.yDir;
            this.x += this.xDir;
            break;

            
          }
        
        break;

      case 2: //curved lines
          this.x += this.xDir * sin(this.xTheta);
          this.y += this.yDir * sin(this.yTheta);

          this.xTheta+= random(2);
          this.yTheta+= random(2);
      
    }

    this.count ++;
  }

  keepInCanvas()
  {
    if((this.x > width) || (this.x < 0))
      this.xDir *= -1;
    if ((this.y > height) || (this.y < 0))
      this.yDir *= -1;
  }



}
