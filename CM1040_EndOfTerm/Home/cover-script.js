// Cover 
document.addEventListener('DOMContentLoaded', function() {

const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const canvas = document.body.querySelector('canvas');
const ctx = canvas.getContext('2d');

const w = window.innerWidth;
const h = window.innerHeight;
const midX = w * 0.5;
const midY = h * 0.5;

const noiseLayers = new Array(2).fill(0).map(() => new SimplexNoise());

canvas.width = w;
canvas.height = h;

let rafId = null;
let phase = 0;

const generate = () => {
  const spacing = 20;
  const particles = [];

  for (let y = 0; y < h; y += spacing) {
    for (let x = 0; x < w; x += spacing) {
      const angle = Math.random() * Math.PI * 2;

      const particle = {
        x: Math.random() * w,
        y: Math.random() * h,
        velocity: 1 + Math.random(),
        noise: randomArrayItem(noiseLayers),
        opacity: 0,
      }
      
      particles.push(particle);
    }
  }
  
  return particles;
}

let particles = generate();

// console.log(particles)

const update = (particle, phase) => {
  const speed = 1;
  const scale = 0.009;

  const noiseValue = particle.noise.noise3D(particle.x * scale, particle.y * scale, phase) * 0.4;
  const angle = noiseValue * Math.PI;

  particle.x += Math.cos(angle);
  particle.y += Math.sin(angle);
  
  particle.opacity += 0.01;
  particle.opacity = Math.min(particle.opacity, 1);

  // reset out of bounds
  if (particle.x > w) {
    particle.x = 0;
  }

  if (particle.x < 0) {
    particle.x = w;
  }

  if (particle.y > h) {
    particle.y = 0;
  }

  if (particle.y < 0) {
    particle.y = h;
  }
}

const draw = (particle) => {
  const yPercent = particle.y / h;
  const hue = 180 + (180 * yPercent);
  const thickness = 1;
  const opacity = particle.opacity * 10;
  ctx.beginPath();
  ctx.fillStyle = `hsla(${hue} 50% 50% / ${opacity}%)`;
  ctx.arc(particle.x, particle.y, thickness, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  
}


const loop = () => {
  particles.forEach((particle) => {
    update(particle, phase);
    draw(particle);
  });

  phase += 0.0001;


  rafId = requestAnimationFrame(loop);
}

loop();

canvas.addEventListener('click', () => {
  ctx.clearRect(0, 0, w, h);
  particles = generate();
});
});
