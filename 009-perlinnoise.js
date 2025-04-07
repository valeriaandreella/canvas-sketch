const canvasSketch = require('canvas-sketch');
const { degToRad } = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  //dimensions: [ 1024, 1024 ],
  dimensions: 'A4',
  orientation: 'portrait', //landscape
  units: 'mm', //in, cm, pt
  pixelsPerInch: 300,
  /*name: 'foobar',
  prefix: 'artwork',
  suffix: '.draft',*/
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

// Parametri della griglia
const cols = 10;
const rows = 10;

// Dimensione della griglia
const gridw = width * 0.8;
const gridh = height * 0.8;
const cellw = gridw / cols;
const cellh = gridw / rows;
const margine = (width - gridw) * 0.5;
    
    // Disegna ogni quadratino con rotazione progressiva
    for(let i = 0; i < cols; i++) {
      for(let j = 0; j < rows; j++) {

        const x = margine + (i + 0.5) * cellw;
        const y = margine + (j + 0.5) * cellh;
        const w = cellw * 0.8;
        const h = cellh * 0.8;
        
        //const angolo = degToRad(5 * i + 3 * j);
        const noise = random.noise2D(x * 10, y, 0.006); //noise restituisce un numero tra -1 e 1
        const angolo = noise * Math.PI * 0.05; //angolo randomico in gradi usando Perlin noise
        
        // Salva lo stato corrente del contesto
        context.save();
        
        // Sposta l'origine
        context.translate(x, y);
        
        // Applica la rotazione
        context.rotate(angolo);    
  
    // Disegna il rettangolo centrato sulla posizione (x, y)
    context.beginPath();
    context.rect(- w/2, - h/2, w, h);
    context.fillStyle = 'rgba(0, ' + noise * 255 + ', 100,' + (noise + 0.5) +' )';
    //context.lineWidth = 1;
    context.fill();
        // Ripristina lo stato del contesto
        context.restore();
        
      }
    }


  };
};

canvasSketch(sketch, settings);


