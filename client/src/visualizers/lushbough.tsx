// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

export const lushboughVisualizer = new Visualizer(
  'lushbough',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);
    

    p5.background(100, 100, 0, 255);
    p5.angleMode('degrees')

    p5.strokeWeight(dim * 0.01);
    p5.stroke(200, 35, 155, 200);

    const values = analyzer.getValue();
    p5.beginShape();
    for (let i = 0; i < 180; i++) {
      const amplitude = values[i] as number;
      const x = p5.map(i, 0, values.length - 1, 0, width);
      const y = height / 2 + amplitude * height;
      // Place vertex

      p5.vertex(x, y);
    }
    p5.endShape();
    p5.beginShape();
    for (let i = 0; i < 90; i++) {
      const amplitude = values[i] as number;
      const y = p5.map(i, 0, 180 - 1, 150, width);
      const x = height / 2 + amplitude * height;
      // Place vertex
      p5.vertex(x, y);
    }
    p5.endShape();
  },
);
