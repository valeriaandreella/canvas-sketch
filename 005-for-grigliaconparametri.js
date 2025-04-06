const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    // Parametri della griglia
    const cols = 10;
    const rows = 10;
  
    // Dimensione della griglia
    const gridw = width * 0.8; //80% della larghezza del canvas
    const gridh = height * 0.8; //80% della larghezza del canvas
    const cellw = gridw / cols;
    const cellh = gridh / rows;
    const margine = (width - gridw) * 0.5;

// Disegna la griglia
for (let i = 0; i < cols; i++) {
  for (let j = 0; j < rows; j++) {
    // Posizione del centro della cella
    const x = margine + (i + 0.5) * cellw;
    const y = margine + (j + 0.5) * cellh;
    const w = cellw * 0.8;
    const h = cellh * 0.8;

    // Disegna il rettangolo centrato sulla posizione (x, y)
    context.save();
    context.translate(x, y);
    context.beginPath();
    context.rect(- w/2, - h/2, w, h);
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.stroke();
    context.restore();
  }
}
  };
};

canvasSketch(sketch, settings);
