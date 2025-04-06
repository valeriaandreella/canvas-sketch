const canvasSketch = require('canvas-sketch');

const settings = 
{
  //dimensions: [ 1000,1000 ]
  dimensions: 'A4',
  units: 'mm',
  pixelsPerInch: 300
};

const sketch = () => {
  return ({ context, width, height }) => 
  {
   //CANVAS
    context.fillStyle = "#fafafa";
    context.fillRect(0, 0, width, height);

      for(let i=0; i < 10; i++){
        for(let j=0; j < 10; j++){
        context.beginPath();
        context.arc(i * 20 + 10, j * 20 + 10, 5, 0, Math.PI * 2); //cerchio
        context.fillStyle = 'rgb(201, 40, 83)';
        context.fill();
        context.closePath();
      }
    }
    
  };
};

canvasSketch(sketch, settings);
