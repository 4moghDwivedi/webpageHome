class particle{
    constructor(posX, posY, valW, valH){

        this.x = posX;
        this.y = posY;

        this.w = valW;
        this.h = valH;

        this.r = random(0, 255);
        this.g = random(0, 255);
        this.b = random(0, 255);

        this.a = [random(0, 30), random(0, 30), random(0, 30)];

        //for x
        this.nPos1 = random(500);

        //for y
        this.nPos2 = random(1000, 5000);

        this.rotPos = [random(0, 360), random(0, 360), random(0, 360)];

        this.finalX = [];
        this.finalY = [];
        this.finalW = [];
        this.finalH = [];

        for(let i = 0; i < 3; i++)
        {
            this.finalX.push(this.x + random(-0.1, 0.1));
            this.finalY.push(this.y + random(-0.1, 0.1));
            this.finalW.push(this.w * random(0.1, 2));
            this.finalH.push(this.h * random(0.1, 5));
        }

    }

    display()
    {
        if(frameCount > 60)
        {
            angleMode(DEGREES);
            for (let i = 0; i < 3; i++)
                {
                    
                    if(random(100) < 99) noStroke();
                    else{
                        stroke("silver");
                        strokeWeight(0.05);
                    }
                    fill(this.r * random(0.9, 1), this.g* random(0.9, 1), this.b* random(0.9, 1), this.a[i] * random(0, 1));
                    ellipse(this.finalX[i], this.finalY[i], this.finalH[i], this.finalW[i]);
                    
                }
        }

    }

    update()
    {
        let nSpeed = random(0.0001, 0.005);

        let xNoise = noise(this.nPos1 += nSpeed);
        let yNoise = noise(this.nPos2 += nSpeed);

        let xMove = map(xNoise, 0, 1, 0, width);
        let yMove = map(yNoise, 0, 1, 0, height);

        this.x = xMove;
        this.y = yMove;

        for(let i = 0; i < 3; i++)
            {

                this.finalX[i] = this.x + random(-1, 1);
                this.finalY[i] = this.y + random(-1, 1);
                this.finalW[i] = this.w * random(0.00001, (random(0.0001, 10)));
                this.finalH[i] = this.h * random(0.00001, (random(0.0001, random(1, 5))));
            }
    }

}