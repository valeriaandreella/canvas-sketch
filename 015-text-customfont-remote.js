const canvasSketch = require('canvas-sketch');

// Carica font da Google in modalità browser
if (typeof document !== 'undefined') {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
  document.head.appendChild(link);
}

const settings = {
  dimensions: 'A4',
  orientation: 'portrait',
  units: 'mm',
  pixelsPerInch: 300,
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.font = '80px Poppins';
    context.textBaseline = "middle";
    context.textAlign = "center";
    context.fillStyle = "red";
    context.fillText("Popg", width/2, height/2);
  };
};

canvasSketch(sketch, settings);