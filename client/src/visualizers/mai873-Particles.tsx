// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

export const ParticleVisualizer = new Visualizer(
  'Particles',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background('#0f0f0f');

    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255);
    p5.noFill();

    const values = analyzer.getValue();
    p5.beginShape();

    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const x = p5.map(i, 0, values.length - 1, 0, width);
      const y = height / 2 + amplitude * height;
      const xAngle = p5.map(i, 0, x, -4 * Math.PI, 4 * Math.PI);
      const yAngle = p5.map(i, 0, y, -4 * Math.PI, 4 * Math.PI);
      const angle = xAngle * (x / width) + yAngle * (y / height);

      const myX =
        width / 2 - (width / 2) * p5.cos(2 * Math.PI * amplitude + angle);
      const myY =
        height / 2 -
        (height / 2) * p5.sin(2 * Math.PI * -1 * amplitude + angle);

      p5.ellipse(myX, myY, 5); // draw particle
    }

    p5.endShape();
  }
);
