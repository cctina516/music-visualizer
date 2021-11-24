// 3rd party library imports
import { createVerify } from "crypto";
import P5 from "p5";
import * as Tone from "tone";
//import "p5/lib/addons/p5.sound";
//import * as img from "../img/circleform_bg.jpeg";

// project imports
import { Visualizer } from "../Visualizers";
let particles: Particle[] = [];
//let fft: any;
class Particle {
  public pos: any;
  public vel: any;
  public acc: any;
  public width: any;
  constructor(p6: P5) {
    //postion
    this.pos = p6.createVector(
      p6.random(window.innerWidth),
      p6.random(window.innerHeight)
    );
    //this.pos = P5.Vector.random2D().mult(250);
    //velocity and acceleration to move particles
    //this.vel = p6.createVector(0, 0);
    this.vel = p6.createVector(p6.random(-1, 1), p6.random(-1, 1));
    //this.acc = this.pos.copy().mult(p6.random(0.0001, 0.00001));
    this.acc = p6.createVector(0.05, 0);

    this.width = p6.random(3, 5);
  }

  update() {
    //this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  show(p6: P5) {
    p6.noStroke();
    p6.fill(255);
    p6.ellipse(this.pos.x, this.pos.y, this.width);
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

    //p5.image(img, 0, 0, width, height);
    //const fft = new P5.FFT();

    const values = analyzer.getValue();
    for (let t = -1; t <= 1; t += 2) {
      p5.beginShape();
      for (let i = 0; i <= 180; i += 1.5) {
        const amplitude = values[i] as number;
        //let index = p5.map(i, 0, 180, 0, values.length - 1);
        //const amplitude = values[index] as number;
        //const r = p5.map(amplitude, -1, 1, 100, 300);
        const r = p5.map(amplitude, -1, 1, 100, 300);
        const x = r * p5.sin(i) * t;
        const y = r * p5.cos(i);
        // Place vertex
        p5.vertex(x, y);
      }
      p5.endShape();
    }
    // p5.beginShape();
    // for (let i = ; i <= 180; i++) {
    //   const amplitude = values[i] as number;
    //   const r = p5.map(amplitude, -1, 1, 100, 300);
    //   const x = r * p5.sin(i);
    //   const y = r * p5.cos(i);
    //   // Place vertex
    //   p5.vertex(x, y);
    // }
    // p5.endShape();
    // the other half of the circle
    // p5.beginShape();
    // for (let i = 0; i <= 180; i++) {
    //   const amplitude = values[i] as number;
    //   const r = p5.map(amplitude, -1, 1, 100, 300);
    //   const x = r * -p5.sin(i);
    //   const y = r * p5.cos(i);
    //   // Place vertex
    //   p5.vertex(x, y);
    // }
    // p5.endShape();

    let p = new Particle(p5);
    particles.push(p);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].show(p5);
    }
  }
);
