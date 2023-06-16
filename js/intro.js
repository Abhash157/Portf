function showIntroHUD() {
   qs("#intro").style.display = "block";
   setTimeout(() => {
      qs(".loadingBox").style.left = "1em";
      techCircle2.style.opacity = 0.2;
      qs(".hero").style.height = "50vh";
      qs(".hero").style.width = "50vh";
      qs(".info").style.transform = "translateX(0%)";
      qsall(".info")[1].style.transform = "translateX(0%)";
      qs(".mapframe").style.right = 0;
      qs(".identity").style.right = "3.3%";
      qs(".map").style.animation = "mapscrape 10s ease-in-out";
      qs(".map").style.animationDelay = "2s";
      qs(".name").style.opacity = 1;
   }, 100);
   setTimeout(() => {
      qs(".map").style.transform =
         "scale(4000%) translateX(-22.1%) translateY(-4.3%)";
      showIntro();
   }, 3000);
}
function showIntro() {
   let n = 0;
   let target = parseInt(Math.random() * 10);

   // HOVER POINTER IN
   more.addEventListener("mouseover", () => {
      if (res == 1) {
         qs("#hov-ptr").style.height = "70px";
         qs("#hov-ptr").style.width = "70px";
      }
   });

   // HOVER POINTER OUT
   more.addEventListener("mouseout", () => {
      if (res == 1) {
         // qs("#hov-ptr").style.display = "none";
         qs("#hov-ptr").style.height = "0px";
         qs("#hov-ptr").style.width = "0px";
      }
   });

   function fluctuate(timestamp) {
      if (n == target) {
         NextTarget = parseInt(Math.random() * 10);
         target = NextTarget;
      }

      if (n < target) increase = true;
      if (n > target) increase = false;

      if (increase) {
         n++;
         bars[n].style.display = "block";
      }
      if (!increase) {
         bars[n].style.display = "none";
         n--;
      }
      requestAnimationFrame(fluctuate);
   }
   fluctuate();

   for (line of sLine) {
      line.style.setProperty("--del", `${Math.random() * 9000 + 100}ms`);
   }

   // T E X T   S C R A M B L E

   const nepal = qs("#nepal");
   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let startTime = null;

   function animate(timestamp) {
      if (!startTime) {
         startTime = timestamp;
      }
      const elapsed = timestamp - startTime;
      const targetIteration = elapsed / 2300; // Adjust animation speed here
      debugger; //
      nepal.innerText = nepal.dataset.value
         .split("")
         .map((letter, index) => {
            if (index < targetIteration) {
               return nepal.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
         })
         .join("");

      if (targetIteration >= nepal.dataset.value.length) {
         return;
      }

      requestAnimationFrame(animate);
   }

   requestAnimationFrame(animate);
   animate();
}

function introOut() {
   qs(".loadingBox").style.left = "-100%";
   techCircle2.style.left = "-100%";
   qs(".hero").style.left = "-100%";
   qs(".info").style.transitionDelay = 0
   qsall(".info")[1].style.transitionDelay = 0
   qs(".info").style.transform = "translateX(-100vw)";
   qsall(".info")[1].style.transform = "translateX(-100vw)";
   qs(".mapframe").style.left = "-100%";
   qs(".identity").style.left = "-100%";
   qs(".map").style.left = "-100%";
   qs(".name").style.transform = "translateX(-100vw)";
   window.location.href= 'https://abhash157.github.io/Portf/skills.html'

   setTimeout(() => {
      qs("#intro").style.display = "none";
   }, 3000);
}

// showIntroHUD();

// more.addEventListener('click',introOut)
