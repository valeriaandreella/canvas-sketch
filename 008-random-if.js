const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

const settings = 
{
  //dimensions: [ 1000,1000 ]
  dimensions: 'A4',
  units: 'mm',
  pixelsPerInch: 200
};

const sketch = () => {
  return ({ context, width, height }) => 
  {
   //CANVAS
    context.fillStyle = "#fafafa";
    context.fillRect(0, 0, width, height);

   
    for(let i=0; i<100; i++) {
      for(let j=0; j<100; j++) {
      const x = random.range(10, width);
      const y = random.range(10, height);
      context.beginPath();
      context.rect(i * x, j * y, Math.random() * 30, Math.random() * 10);
      //context.strokeStyle = "rgb(32, 8, 84)";
      const rosso = random.range(0, 255);
      const verde = random.range(0, 255);
      const blu = random.range(0, 255);

      context.strokeStyle = 'rgb(' + rosso + ',' + verde + ',' + blu + ')';
      //context.strokeStyle = 'rgb(32, 25, 90)';
      //context.strokeStyle = 'rgb(rosso, verde, blu)';
      context.lineWidth = Math.random()*2;
      //context.fillStyle = "rgb(00,"+(i*20)+",0)";
      //context.fill();
      //context.stroke();

    
      if (i > 7) { 
        context.strokeStyle = 'rgb(22, 28, 195)';
      } else {
        context.strokeStyle = 'rgb(255, 0, 0)';
      }        
      //context.strokeStyle = 'black';
      context.stroke();
      }
    }   
    
  };
};

canvasSketch(sketch, settings);
