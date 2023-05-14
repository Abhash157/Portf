function qs(elem) {
   return document.querySelector(elem);
}
function qsall(elem) {
   return document.querySelectorAll(elem);
}

let root = getComputedStyle(document.documentElement);
let res = parseInt(root.getPropertyValue("--res"));
var continueCursor = qs("#hov-ptr");
var customCursor = qs("#custom-cursor");
const welcomeHeading = qs(".welcome-content h1");
const welcomeText = qs(".welcome-content p");
const continueBtn = qs(".continue-btn");
const circleBox = qs(".circles");
const circles = qsall(".circles div img");
let cBtnHover = false;
let cirExpanded = false;
let continued = false;
// const myImg = qs(".pic img");
let imgTurn = false;
let imgTimer;
let imgAppeared = false;
let frame = 1