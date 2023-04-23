function qs(elem) {
   return document.querySelector(elem);
}
function qsall(elem) {
   return document.querySelectorAll(elem);
}

let root = getComputedStyle(document.documentElement);
let res = parseInt(root.getPropertyValue("--res"));
const welcomeHeading = qs(".welcome-content h1");
const welcomeText = qs(".welcome-content p");
const continueBtn = qs(".continue-btn");
const circleBox = qs(".circles");
const circles = qsall(".circles div img");
let cBtnHover = false;
let cirExpanded = false;
let continued = false;
const myImg = qs(".pic canvas");
let imgTurn = false;
let imgTimer;
let imgAppeared = false;


//  CANVAS
const canvas = qs('.pic canvas')
const ctx = canvas.getContext("2d");

// Load image and create an array to hold each frame
const img = new Image();
img.src = "IMG/AbhashAnimation-min.png";
const frames = [];

img.onload = function () {
   // Split image into separate frames
   for (let i = 0; i < 19; i++) {
      let x = i * 100; // Set the x position of each frame
      let y = 0; // Set the y position of each frame
      let w = 100; // Set the width of each frame
      let h = 100; // Set the height of each frame
      frames.push({ x, y, w, h });
   }

   // Animate each frame using setInterval
   let frameIndex = 0;
   setInterval(function () {
      // Clear the canvas on each loop
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the current frame onto the canvas
      let frame = frames[frameIndex];
      ctx.drawImage(
         img,
         frame.x,
         frame.y,
         frame.w,
         frame.h,
         0,
         0,
         canvas.width,
         canvas.height
      );

      // Increment the frame index and reset to 0 if we reach the last frame
      frameIndex++;
      if (frameIndex >= frames.length) {
         frameIndex = 0;
      }
   }, 50); // Change this number to adjust the speed of the animation
};
