let count, sWatch, doItOnce;

let bAlpha = 0;

let p0int = new Array(15);
let pSize = new Array(15);
let pColor = new Array(15);

let m = new Array (15);

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  background(0);
 
  for (let i = 0; i < 15; i++)
    {
      p0int[i] = new walker();
      pSize[i] = random(1, 5);
      
      if ( (floor(random(0, 2))) == 0)
        pColor[i] = "navy";
      else
        pColor[i] = "red";


      m[i] = floor(random(3));
    }

  count = 0;
  sWatch = 0;
  doItOnce = 0;

  angleMode(DEGREES);
  modParams();

}

function draw() 
{
  if (mouseIsPressed)
    {
      for (let i = 0; i < 15; i++)
        {
          background(255);
          pColor[i] = ('gold');
          p0int[i].resetCoordinates(mouseX, mouseY);
          sWatch = 0;
        }

      let mouse = floor(random(3));
      switch (mouse)
      {
        case 0: 
          resetPointSize();
          break;
        case 1: 
          resetColors();
          break;
        case 2:
          movePoints();
          break;
        
      }
    }
  else
    {
      background(30, 0, 0, 5*sin(bAlpha));
    }

  if (count % 60 == 0)
    {
      sWatch++;
      doItOnce = 1;
    }

    modParams();

  if(sWatch % 5 == 0 && doItOnce)
    {
      movePoints();
      resetPointSize();
      resetColors();
      
      doItOnce = 0;

    }
  count ++;
  bAlpha += 0.2;
}

function movePoints()
{
  if (random(1) < 0.5)
  {
      for(let i = 0; i < 15; i++)
      {
        m[i] = floor(random(3));
      }
  }
  else
  {
    for(let i = 0; i < 15; i++)
      {
        m[i] = 2;
      }
  }
}

function modParams()
{

  for (let i = 0; i < 15; i++)
    {
      p0int[i].move(m[i]);
      p0int[i].display(pSize[i], pColor[i]);
      p0int[i].keepInCanvas();

      pSize[i] += random(-1.1, 1);
    }

}

function resetPointSize()
{
  for(let i = 0; i < 15; i++)
  {
    pSize[i] = random(0, 2);
  }
}

function resetColors()
{
  for(let i = 0; i < 15; i++)
  {
    if ( (floor(random(0, 2))) == 0)
      pColor[i] = "navy";
    else
      pColor[i] = "red";

  }
}