// MOUSE FUNCTIONS
// CUSTOM CURSOR
window.addEventListener("mousemove", function (e) {
   customCursor.style.left = e.clientX + "px";
   customCursor.style.top = e.clientY + "px";
});

// CONTINUE BUTTON HOVER
window.addEventListener("mousemove", function(e) {
   continueCursor.style.left = e.clientX + 'px';
   continueCursor.style.top = e.clientY + 'px';
});


continueBtn.addEventListener("mouseover", () => {
   cBtnHover = true;
   if (res == 1) {
      qs("#hov-ptr").style.display = "block";
      // qs("#custom-cursor img").src = "img/tech-circles/mid-circle-1.png";
   }
});
continueBtn.addEventListener("mouseout", () => {
   cBtnHover = false;
   if (res == 1) {
      // qs("#hov-ptr").style.display = "none";
      // qs("#custom-cursor img").src = "img/tech-circles/tech-circle.png";
   }
});


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
         }
      } else {
         circleShrink();
      }
   }
   // IMAGE ANIMATION
   if (imgAppeared) {
      for (circle of circles) {
         circle.style.transitionDuration = "2s";
         circle.style.width = "200vw";
      }
      setTimeout(() => {
         for (circle of circles) {
            circle.style.display = "none";
         }
      }, 2000);
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
