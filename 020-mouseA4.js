const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: 'A4',
  orientation: 'portrait',
  units: 'mm',
  pixelsPerInch: 300,
  resizeCanvas: true,
  animate: true
};

const sketch = ({ canvas }) => {
  // Per memorizzare la posizione del mouse
  const mouse = { x: 0, y: 0 };
  
  // Gestione dell'evento mousemove
  const onMouseMove = (e) => {
    const rect = canvas.getBoundingClientRect();
    
    // Converti le coordinate dal sistema della finestra al sistema del canvas in mm
    // 210×297 mm è la dimensione standard A4
    const canvasWidthMM = 210; // larghezza A4 in mm
    const canvasHeightMM = 297; // altezza A4 in mm
    
    mouse.x = ((e.clientX - rect.left) / rect.width) * canvasWidthMM;
    mouse.y = ((e.clientY - rect.top) / rect.height) * canvasHeightMM;
  };
  
  // Aggiungi l'event listener
  canvas.addEventListener('mousemove', onMouseMove);
  
  return ({ context, width, height }) => {
    // Pulisci lo sfondo
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    // Disegna un cerchio nella posizione del mouse
    context.fillStyle = 'blue';
    context.beginPath();
    context.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2);
    context.fill();
    
    // Mostra le coordinate del mouse in mm per debug
    context.fillStyle = 'black';
    context.font = '4mm monospace';
    context.fillText(`X: ${mouse.x.toFixed(1)} mm, Y: ${mouse.y.toFixed(1)} mm`, 10, 10);
  };
};

canvasSketch(sketch, settings);