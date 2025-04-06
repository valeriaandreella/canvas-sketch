const canvasSketch = require('canvas-sketch');

// Funzione per caricare un font e attendere che sia disponibile
const loadFont = (fontFamily, fontPath) => {
  return new Promise((resolve, reject) => {
    if (typeof document === 'undefined') {
      resolve(false);
      return;
    }

    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Codystar';
        src: url('fonts/Codystar-Regular.ttf') format('truetype'),
              url('fonts/Codystar.woff') format('woff'),
              url('fonts/Codystar.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
      }
    `;
    document.head.appendChild(style);
    
    // Verifica se FontFace API è disponibile (browser moderni)
    if (typeof FontFace !== 'undefined') {
      try {
        const font = new FontFace(fontFamily, `url(${fontPath})`);
        font.load().then(() => {
          // Aggiungi il font al registro dei font
          document.fonts.add(font);
          console.log(`Font '${fontFamily}' caricato con successo mediante FontFace API`);
          resolve(true);
        }).catch(err => {
          console.warn(`Impossibile caricare il font':`, err);
          resolve(false);
        });
      } catch (e) {
        fallbackLoad();
      }
    } else {
      fallbackLoad();
    }
    
    // Metodo di fallback per browser più vecchi
    function fallbackLoad() {
      // Crea un elemento di test
      const testEl = document.createElement('span');
      testEl.style.position = 'absolute';
      testEl.style.visibility = 'hidden';
      testEl.style.fontFamily = `'${fontFamily}', monospace`; // monospace come fallback
      testEl.textContent = 'Test font loading';
      document.body.appendChild(testEl);
      
      // Attendi che i font siano pronti
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          console.log(`Font caricato tramite document.fonts.ready`);
          document.body.removeChild(testEl);
          resolve(true);
        }).catch(() => {
          document.body.removeChild(testEl);
          resolve(false);
        });
      } else {
        // Ultimo fallback: timeout
        setTimeout(() => {
          console.log(`Timeout di caricamento per il font'`);
          document.body.removeChild(testEl);
          resolve(true); // Assume sia caricato dopo il timeout
        }, 2000);
      }
    }
  });
};

// Opzioni sketch
const settings = {
  dimensions: 'A4',
  orientation: 'portrait',
  units: 'mm',
  pixelsPerInch: 300,
};

const sketch = async () => {
  const fontPath = 'fonts/Codystar-Regular.ttf';
  const fontFamily = 'Codystar';
  
  let fontLoaded = false;
  
  if (typeof document !== 'undefined') {
    console.log('Precaricamento del font...');
    fontLoaded = await loadFont(fontFamily, fontPath);
    console.log('Stato caricamento font:', fontLoaded ? 'Successo' : 'Fallback');
  }
  
  // Funzione di rendering
  return ({ context, width, height }) => {
    // Pulisci canvas
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
  
    context.font = "80px Codystar";
    context.textBaseline = "middle";
    context.textAlign = "center";
    context.fillStyle = "red";
    
    const testo = "F!";
    context.fillText(testo, width/2, height/2);
    
  };
};

canvasSketch(sketch, settings);