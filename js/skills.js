const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   render();
});

function files(index) {
   var data = `
     img/3d Abhash/0.png
     img/3d Abhash/1.png
     img/3d Abhash/2.png
     img/3d Abhash/3.png
     img/3d Abhash/4.png
     img/3d Abhash/5.png
     img/3d Abhash/6.png
     img/3d Abhash/7.png
     img/3d Abhash/8.png
     img/3d Abhash/9.png
     img/3d Abhash/10.png
     img/3d Abhash/11.png
     img/3d Abhash/12.png
     img/3d Abhash/13.png
     img/3d Abhash/14.png
     img/3d Abhash/15.png
     img/3d Abhash/16.png
     img/3d Abhash/17.png
     img/3d Abhash/18.png
     img/3d Abhash/19.png
     img/3d Abhash/20.png
     img/3d Abhash/21.png
     img/3d Abhash/22.png
     img/3d Abhash/23.png
     img/3d Abhash/24.png
     img/3d Abhash/25.png
     img/3d Abhash/26.png
     img/3d Abhash/27.png
     img/3d Abhash/28.png
     img/3d Abhash/29.png
     img/3d Abhash/30.png
     img/3d Abhash/31.png
     img/3d Abhash/32.png
     img/3d Abhash/33.png
     img/3d Abhash/34.png
     img/3d Abhash/35.png
     img/3d Abhash/36.png
     img/3d Abhash/37.png
     img/3d Abhash/38.png
     img/3d Abhash/39.png
     img/3d Abhash/40.png
     img/3d Abhash/41.png
     img/3d Abhash/42.png
     img/3d Abhash/43.png
     img/3d Abhash/44.png
     img/3d Abhash/45.png
     img/3d Abhash/46.png
     img/3d Abhash/47.png
     img/3d Abhash/48.png
     img/3d Abhash/49.png
     img/3d Abhash/50.png
     img/3d Abhash/51.png
     img/3d Abhash/52.png
 `;
   return data.split("\n")[index];
}

const frameCount = 55;

const images = [];
const imageSeq = {
   frame: 0,
};

for (let i = 0; i < frameCount; i++) {
   const img = new Image();
   img.src = files(i);
   images.push(img);
}

images[1].onload = render;

function render() {
   scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
   var canvas = ctx.canvas;
   var hRatio = canvas.width / img.width;
   var vRatio = canvas.height / img.height;
   var ratio = Math.max(hRatio, vRatio);
   var centerShift_x = (canvas.width - img.width * ratio) / 2;
   var centerShift_y = (canvas.height - img.height * ratio) / 2;
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
   );
}

window.addEventListener("mousemove", move);
const one = 0.01;
function move(e) {
   let cursorpos = e.clientX / window.innerWidth;
   let halfcursor = cursorpos / 2;
   let abhashFrame = 53 - Math.floor(cursorpos * 53);
   gsap.to(imageSeq, {
      frame: abhashFrame,
      snap: "frame",
      ease: `none`,
      onUpdate: render,
   });

   let skillsFrame = Math.floor(e.clientX * -1.3);
   gsap.to(skillsBox, {
      x: skillsFrame,
      snap: "x",
      ease: `none`,
   });

   if (cursorpos < 0.25) {
      gsap.to([skillsContainer[0]], {
         scale: 1 + halfcursor,
      });
      gsap.to([skillsContainer[1]], {
         scale: 1 - halfcursor,
      });
   }
   if (cursorpos > 0.25 && cursorpos < 0.75) {
      gsap.to([skillsContainer[1]], {
         scale: 0.75 + halfcursor,
      });
      gsap.to([skillsContainer[2]], {
         scale: 1.25 - halfcursor,
      });
   }
   if (cursorpos > 0.75) {
      gsap.to([skillsContainer[2]], {
         scale: 0.5 + halfcursor,
      });
      gsap.to([skillsContainer[3]], {
         scale: 1.5 - halfcursor,
      });
   }

   prevPos = e.clientX;
}
gsap.to(qsall(".tech-circle3.blurred"), {
   rotation: 360,
   duration: 2,
   repeat: -1,
   ease: "linear",
});
gsap.to(qsall(".triTech.blurred")[1], {
   opacity: 0.8,
   yoyo: true,
   duration: 2,
   repeat: -1,
   ease: "power1.inOut",
});

// SHOWCASE
window.addEventListener("scroll", () => {
   var scrollPosition = (window.scrollY / window.innerHeight) * 100;

   if (scrollPosition >= 100) {
      qs(".abhashBox").style.display = "none";
      skillsBox.style.display = "none";
      qs(".showcase svg").style.display = "block";
   } else {
      qs(".abhashBox").style.display = "block";
      skillsBox.style.display = "flex";
      qs(".showcase svg").style.display = "none";
   }
});

gsap.to(qs("#image15"), {
   scale: 2.2,
   x: "-55%",
   y: "-55%",
});
gsap.to(qs("#image14"), {
   scale: 2.2,
   x: "-60%",
   y: "-65%",
});

showBox.forEach((item) => {
   item.addEventListener("mouseover", function () {
      gsap.to(item, {
         scale: 1.2,
         x: "-12%",
         y: "-12%",
         duration: 0.4,
      });
   });
   item.addEventListener("mouseout", function () {
      gsap.to(item, {
         scale: 1,
         x: 0,
         y: 0,
         duration: 0.4,
      });
   });
   item.addEventListener("click", () => {
      window.open(item.getAttribute("url"), "_blank");
   });
});

showBg.forEach((item) => {
   item.setAttribute("fill", "#0932ee");
   item.setAttribute("opacity", "0.18");
   item.style.pointerEvents = "none";
});

var element = qs(".serviceRef");
var services = qs(".services");
let functionAdded = false;
let prevScrollPos = document.documentElement.scrollTop;
let slideSpeed = 0

window.addEventListener("scroll", function () {
   var elementPosition = element.offsetTop;
   var scrollPosition = window.scrollY;
   currentScrollPos = document.documentElement.scrollTop;
   slideSpeed = (elementPosition - currentScrollPos) * 1
   if (scrollPosition >= elementPosition) {
      // functionAdded = true;
      services.style.display = "flex";
      // services.style.right = `$(slideSpeed)%`
         gsap.to(services, {
            x: slideSpeed,
         });
   } else {
      // functionAdded = false;
      // services.style.display = "none";
   }

   prevScrollPos = currentScrollPos;
   // if(functionAdded) {
   // }else{
   // }
});
