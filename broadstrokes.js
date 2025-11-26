let brushes = [];

let numParticles;

let backCol;

let count = 0;
function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  backCol = 0;
  background(backCol);

   numParticles = random(10, 300);

  for (let i = 0; i < numParticles; i++)
    {
      brushes.push(new particle(width/2, height/2, random(1, 7), 7));
    }


}

function draw() {


for (let i = 0; i < numParticles; i++)
  {
    brushes[i].display();
    brushes[i].update();
  }

  count += 1;

  if (count % (60*15) == 0)
    {

      backCol = 1 - backCol;
      background(backCol*255); 

      for (let i = 0; i < numParticles; i++)
        {
          brushes.pop();
        }

        numParticles = random(50, 300);

        for (let i = 0; i < numParticles; i++)
          {
            brushes.push(new particle(width/2, height/2,  7, 7));
          }
    }

}
