// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

export const SinWaveVisualizer = new Visualizer(
  'Edreece-Afridi',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 0, 0, 255);
    p5.noFill();
    p5.translate(width / 2, height / 2);

    const values = analyzer.getValue();

    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      p5.push();

      p5.rotate(Math.sin(p5.frameCount + i) * 100);

      const red = p5.map(Math.sin(p5.frameCount), -1, 1, 50, 255);
      const green = p5.map(Math.cos(p5.frameCount / 2), -1, 1, -5, 255);
      const blue = p5.map(Math.sin(p5.frameCount / 4), -1, 1, -5, 255);
      const amplitude = values[i] as number;
      const x = p5.map(i, 0, values.length - 1, 0, width);
      const y = height / 2 + amplitude * height;

      // Place vertex
      p5.vertex(x, y);

      p5.stroke(red, blue, green);

      p5.rect(0, 0, 600 - i * 3, 600 - i * 3, 200 - i);
      p5.pop();
    }
    p5.endShape();
  }
);
