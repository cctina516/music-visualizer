// 3rd party library imports
import P5 from "p5";
import * as Tone from "tone";

// project imports
import { Visualizer } from "../Visualizers";
//let p6: P5;
let particles: Particle[] = [];

class Particle {
  public pos: any;
  constructor() {
    this.pos = P5.Vector.random2D().mult(250);
  }

  show(p6: P5) {
    p6.noStroke();
    p6.fill(255);
    p6.ellipse(this.pos.x, this.pos.y, 4);
  }
}

export const CircleformVisualizer = new Visualizer(
  "Circleform",
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 0, 0, 255);

    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255);
    p5.noFill();

    p5.translate(width / 2, height / 2);

    p5.angleMode("degrees");

    const values = analyzer.getValue();
    p5.beginShape();
    for (let i = 0; i <= 180; i++) {
      const amplitude = values[i] as number;
      const r = p5.map(amplitude, -1, 1, 100, 300);
      const x = r * p5.sin(i);
      const y = r * p5.cos(i);
      // Place vertex
      p5.vertex(x, y);
    }
    p5.endShape();
    // the other half of the circle
    p5.beginShape();
    for (let i = 0; i <= 180; i++) {
      const amplitude = values[i] as number;
      const r = p5.map(amplitude, -1, 1, 100, 300);
      const x = r * -p5.sin(i);
      const y = r * p5.cos(i);
      // Place vertex
      p5.vertex(x, y);
    }
    p5.endShape();

    let p = new Particle();
    particles.push(p);

    for (let i = 0; i < particles.length; i++) {
      particles[i].show(p5);
    }
  }
);
