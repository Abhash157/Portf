function qs(elem) {
   return document.querySelector(elem);
}
function qsall(elem) {
   return document.querySelectorAll(elem);
}

let root = getComputedStyle(document.documentElement);
let res = parseInt(root.getPropertyValue("--res"));

// WELCOME
var continueCursor = qs("#hov-ptr");
var customCursor = qs("#custom-cursor");
var txtCursor = qs("#txt-cursor");
const welcomeHeading = qs(".welcome-content h1");
const welcomeText = qs(".welcome-content p");
const continueBtn = qs(".continue-btn");
const circleBox = qs(".circles");
const circles = qsall(".circles div img");
const clickPrompt = qs(".clickPrompt");
let cBtnHover = false;
let cirExpanded = false;
let continued = false;
// const myImg = qs(".pic img");
let imgTurn = false;
let imgTimer;
let imgAppeared = false;
let frame = 1;

// CUSTOM CURSOR
window.addEventListener("mousemove", function (e) {
     customCursor.style.left = e.clientX + "px";
     customCursor.style.top = e.clientY + "px";
     continueCursor.style.left = e.clientX + "px";
     continueCursor.style.top = e.clientY + "px";
     txtCursor.style.left = e.clientX + "px";
     txtCursor.style.top = e.clientY + "px";
 });



// INTRO

const techCircle2 = qs(".tech-circle-2");
const bars = qsall(".bar");
let info = qsall(".infos");
let elements = qsall(".blurred");
let more = qs('.moreBtn')
let sLine = qsall(".signalLine");

// let fakeinfo = ['Gathering information', 'Collecting resources', 'Analyzing Environment','Setting Up Connection', 'Retrieving Data', 'Connecting Networks', 'Extracing System Data', 'Scanning vulnerabilities', 'Encrypting Connection', 'Securing Encryption', 'Advanced Data Mining', 'Deploying Spiders', 'Quantum computing', 'Data pattern recognition', 'Bypassing Firewall', 'Access Granted', 'Channel Open', 'Data Pipeline Active', 'Network Engaged', 'Connection Confirmed', 'Interface Online', 'Connection Successful']


//BLUR ELEMENTS

for (let i = 0; i < elements.length; i++) {
   let blurelem = elements[i];
   let computedStyle = window.getComputedStyle(blurelem);
   let blur = computedStyle.getPropertyValue("--blur");
   let cloneElement = blurelem.cloneNode(true);
   blurelem.parentNode.appendChild(cloneElement);
   cloneElement.style.filter = `blur(${blur}px)`;
}

let txtelements = document.querySelectorAll(".txtblurred");

for (let i = 0; i < txtelements.length; i++) {
   let blurelem = txtelements[i];
   let computedStyle = window.getComputedStyle(blurelem);
   let blur = computedStyle.getPropertyValue("--blur");
   let cloneElement = blurelem.cloneNode(true);
   blurelem.parentNode.appendChild(cloneElement);
   cloneElement.style.position= "absolute"
   cloneElement.style.fontSize= window.getComputedStyle(blurelem).getPropertyValue("font-size");
   cloneElement.style.color=  window.getComputedStyle(blurelem).getPropertyValue("color");
   cloneElement.style.filter = `blur(${blur}px)`;
}

// DELAY BLUR ELEMENTS
let delelements = document.querySelectorAll(".delblurred");

for (let i = 0; i < delelements.length; i++) {
   let blurelem = delelements[i];
   let computedStyle = window.getComputedStyle(blurelem);
   let cloneElement = blurelem.cloneNode(true);
   let cloneElement2 = blurelem.cloneNode(true);
   let cloneElement3 = blurelem.cloneNode(true);
   blurelem.parentNode.appendChild(cloneElement);
   blurelem.parentNode.appendChild(cloneElement2);
   blurelem.parentNode.appendChild(cloneElement3);
   cloneElement.style.position= "absolute"
   cloneElement.style.top= 0
   cloneElement.style.filter = `blur(5px)`;
   cloneElement.style.animationDelay= '300ms';
   cloneElement.style.opacity= '0.4'
   cloneElement3.style.position= "absolute"
   cloneElement3.style.top= 0
   cloneElement3.style.filter = `blur(6px)`;
   cloneElement3.style.animationDelay= '150ms';
   cloneElement3.style.opacity= '0.3'
   cloneElement2.style.position= "absolute"
   cloneElement2.style.top= 0
   cloneElement2.style.filter = `blur(7px)`;
   cloneElement2.style.animationDelay= '0ms';
   cloneElement2.style.opacity= '0.2'
}


// SKILLS
const skillsBox = qs('.skillsBox')
let skillsContainer = qsall('.skillsContainer')
let prevPos = 0
let showBox = qsall('.showBox')
let showBg = qsall('.showBg')
let showImg = qsall('svg defs image')
let helpingArrow = qs('.helpingArrow')
let showGuide = true


// CONTACT

let submit = qs('#contactBtn')
let msgArea = qs('#message')
let emailArea = qs('#email')


