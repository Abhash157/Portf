// MOUSE FUNCTIONS
window.addEventListener("mousemove", function (e) {
   var customCursor = qs("#custom-cursor");
   customCursor.style.left = e.clientX + "px";
   customCursor.style.top = e.clientY + "px";
});

continueBtn.addEventListener("mouseover", () => {
   cBtnHover = true;
   if (res == 1) {
      qs("#hov-ptr").style.display = "block";
      qs("#custom-cursor img").src = "img/tech-circles/mid-circle-1.png";
   }
});
continueBtn.addEventListener("mouseout", () => {
   cBtnHover = false;
   if (res == 1) {
      qs("#hov-ptr").style.display = "none";
      qs("#custom-cursor img").src = "img/tech-circles/tech-circle.png";
   }
});

// CONTINUE BUTTON HOVER
// window.addEventListener('mousemove', function(e) {
//    var continueCursor = qs('#hov-ptr');
//    continueCursor.style.left = e.clientX + 'px';
//    continueCursor.style.top = e.clientY + 'px';
//  });

// EXPAND
function circleExpand() {
   // const el = event.target
   for (i = 1; i <= 4; i++) {
      circles[i - 1].style.width = i * i * 50 + 100 + "px";
   }
   cirExpanded = true;
   if (res == 1 && imgTurn) showImg();
}

// NORMAL
function circleNormal() {
   for (i = 1; i <= 4; i++) {
      circles[i - 1].style.width = i * 100 + "px";
   }
   cirExpanded = false;
   if (continued && res == 1) cirContinue();
}

// SHRINK
function circleShrink() {
   if (res == 0) {
      circleBox.style.transform = "translateX(-100vw)";
   } else {
      circleBox.style.transform = "translateX(-50vw)";
   }
   for (circle of circles) {
      circle.style.transitionDelay = "0ms";
      circle.style.width = "100px";
   }
   myImg.style.width = "0px";
   setTimeout(delayReset, 100);
   welcomeHeading.style.transform = "translateX(-150%)";
   welcomeText.style.transform = "translateX(-150%)";
   continueBtn.innerHTML = "";
   continueBtn.style.background =
      "linear-gradient(45deg, transparent 5%, #1694f290 5%, #1694F250 30%, #025CED50 70%, #025ced90 95%, transparent 95%)";
   cirExpanded = true;
   continued = true;
   continueBtn.addEventListener("mouseout", circleExpand);
}

// RESET
function delayReset() {
   for (circle of circles) {
      circle.style.transitionDelay = "var(--del)";
   }
}

// CONTINUE
function cirContinue() {
   qs(".continue").style.transform = "translateX(-150%)";
   if (res == 0) {
      circleBox.style.transform = "translateX(-50vw)";
   }
   // myImg.style.opacity = 1;
   continued = false;
   imgTurn = true;
}

// SHOW IMAGE
if (res == 0) {
   imgTimer = 500;
} else {
   imgTimer = 1000;
}
function showImg() {
   qs(".pic").style.opacity = 1;
   setTimeout(() => {
      qs(".continue").style.opacity = 1;
      myImg.style.width = "200px";
   }, imgTimer);
   imgAppeared = true;
}

// TOUCHSCREEN
qs(".container").addEventListener("click", () => {
   if (res == 0) {
      if (continued) {
         // circleBox.style.transform = "translateX(-20%)"
         cirContinue();
      }
      if (!cBtnHover) {
         if (cirExpanded) circleNormal();
         else {
            circleExpand();
            if (imgTurn) showImg();
         }
      } else {
         circleShrink();
      }
   }
   // IMAGE ANIMATION
   if (imgAppeared) {
      let startAnimation = setInterval(animate, 25);
      let w = 200;
      function animate() {
         myImg.src = `img/Abhash/Abhash${frame}.png`;
         frame++;
         // let startAnimation= requestAnimationFrame(animate);
         // if (frame == 63) cancelAnimationFrame(startAnimation);
         myImg.style.width = w + "px";
         if (frame == 63) clearInterval(startAnimation);
         if (frame<45)w += 6;
      }
      animate();
      imgAppeared = false;
      for (circle of circles) {
         circle.style.transitionDelay = "0ms";
      }
      circles[0].style.width = "2000px";
   }
});

//   // Form submission
//   const form = document.querySelector('#contact form');
//   const submitBtn = document.querySelector('#contact form button');

//   form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const nameInput = document.querySelector('#contact form input[name="name"]');
//     const emailInput = document.querySelector('#contact form input[name="email"]');
//     const messageInput = document.querySelector('#contact form textarea[name="message"]');

//     // Validation
//     if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
//       alert('Please fill out all fields before submitting the form.');
//       return;
//     }

//     // AJAX request
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', 'https://example.com/contact', true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         alert('Thanks for contacting us!');
//         nameInput.value = '';
//         emailInput.value = '';
//         messageInput.value = '';
//       } else if (xhr.readyState === 4 && xhr.status !== 200) {
//         alert('Something went wrong. Please try again later.');
//       }
//     };
//     const data = {
//       name: nameInput.value,
//       email: emailInput.value,
//       message: messageInput.value
//     };
//     xhr.send(JSON.stringify(data));
//   })
