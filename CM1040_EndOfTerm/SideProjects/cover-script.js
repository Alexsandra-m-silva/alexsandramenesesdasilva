// Bauhaus Running Man Animation
document.addEventListener('DOMContentLoaded', function() {
  const tridiv = document.getElementById('tridiv');
  const scene = document.querySelector('.scene');
  
  if (!scene) return;

  let animationTime = 0;
  const ANIMATION_DURATION = 2000; // 2 seconds per running cycle
  
  // Get all leg and body elements that need animation
  const body = document.querySelector('.body');
  const body2 = document.querySelector('.body2');
  const leg = document.querySelector('.leg');
  const leg1 = document.querySelector('.leg-1');
  const leg2 = document.querySelector('.leg-2');
  const body1 = document.querySelector('.body-1');
  
  function animateRunningMan(timestamp) {
    animationTime = (timestamp % ANIMATION_DURATION) / ANIMATION_DURATION;
    
    // Running cycle: 0 to 1 represents one complete running motion
    const cycle = animationTime * Math.PI * 2;
    
    // Leg 1 - swings forward and back
    const leg1RotationZ = Math.sin(cycle) * 45;
    const leg1RotationX = Math.sin(cycle) * 30;
    if (leg1) {
      leg1.style.transform = `rotateZ(90deg) rotateX(${leg1RotationX}deg) rotateZ(${leg1RotationZ}deg)`;
    }
    
    // Leg 2 - opposite phase from leg1
    const leg2RotationZ = Math.sin(cycle + Math.PI) * 45;
    const leg2RotationX = Math.sin(cycle + Math.PI) * 30;
    if (leg2) {
      leg2.style.transform = `rotateZ(90deg) rotateX(${leg2RotationX}deg) rotateZ(${leg2RotationZ}deg)`;
    }
    
    // Main leg - oscillates with running motion
    const legRotationZ = Math.sin(cycle) * 50;
    const legRotationX = Math.cos(cycle * 2) * 25;
    if (leg) {
      leg.style.transform = `translate3D(-6.0375em, 0.0874999999999993em, 0.0625em) rotateX(${legRotationX}deg) rotateY(0deg) rotateZ(${90 + legRotationZ}deg)`;
    }
    
    // Body - slight rotation and tilt for running effect
    const bodyRotationY = Math.sin(cycle) * 8;
    const bodyTiltX = Math.cos(cycle) * 5;
    if (body) {
      body.style.transform = `translate3D(0.5000000000000002em, -2.45em, 0.050000000000000044em) rotateX(${bodyTiltX}deg) rotateY(${bodyRotationY}deg) rotateZ(0deg)`;
    }
    
    // Body2 - counterbalance the main body
    const body2RotationY = Math.sin(cycle + Math.PI) * 8;
    const body2TiltX = Math.cos(cycle + Math.PI) * 5;
    if (body2) {
      body2.style.transform = `translate3D(0.5em, -8.5em, -2.9999999999999996em) rotateX(${-90 + body2TiltX}deg) rotateY(${body2RotationY}deg) rotateZ(0deg)`;
    }
    
    // Body1 (arm) - swings in opposite phase to legs
    const body1RotationZ = Math.sin(cycle + Math.PI) * 60;
    if (body1) {
      body1.style.transform = `translate3D(2.3750000000000004em, 6.3125em, 0.050000000000000044em) rotateX(0deg) rotateY(0deg) rotateZ(${body1RotationZ}deg)`;
    }
    
    // Scene - add gentle hovering motion and rotation
    const hoverY = Math.sin(animationTime * Math.PI * 2) * 5;
    const sceneRotationY = animationTime * 360;
    scene.style.transform = `rotateX(-32deg) rotateY(${-405 + sceneRotationY}deg) translateY(${hoverY}px)`;
    
    requestAnimationFrame(animateRunningMan);
  }
  
  // Start the animation
  requestAnimationFrame(animateRunningMan);
});
