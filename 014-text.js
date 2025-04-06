const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: 'A4',
  orientation: 'portrait', //landscape
  units: 'mm', //in, cm, pt
  pixelsPerInch: 300,
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    let testo = "F!";
    let fontSize = 80;
    let fontFamily = "Arial";

    context.font = fontSize + "px " + fontFamily;
    context.textBaseline = "middle";
    context.textAlign = "center";
    context.fillStyle = "red";

    context.fillText(testo, width/2, height/2);

  };
};

canvasSketch(sketch, settings);
