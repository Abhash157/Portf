// HOVER POINTER IN
submit.addEventListener("mouseover", () => {
   if (res == 1) {
      qs("#hov-ptr").style.height = "70px";
      qs("#hov-ptr").style.width = "70px";
    //   qs('.abhashLaptop').src = "img/AbhashMatrix.png"
      tl.play();
      console.log('Abhash')
    }
});

// HOVER POINTER OUT
submit.addEventListener("mouseout", () => {
    if (res == 1) {
        qs("#hov-ptr").style.height = "0px";
        qs("#hov-ptr").style.width = "0px";
        // qs('.abhashLaptop').src = "img/AbhashBinary.png"
      tl.reverse();
   }
});
submit.addEventListener("click", () => {
   if (res == 1) {
      // qs("#hov-ptr").style.display = "none";
      qs("#hov-ptr").style.height = "0px";
      qs("#hov-ptr").style.width = "0px";
   }
});

let tl = gsap.timeline();
tl.to(submit, { color: "#023ced", duration: 0.1 });
tl.to(submit, { color: "rgb(187, 217, 242)", duration: 0.5 });

tl.pause();

// HOVER POINTER IN
msgArea.addEventListener("mouseover", () => {
   if (res == 1) {
      txtCursor.style.display = "inline-block";
      txtCursor.style.height = "19px";
      txtCursor.style.width = "15px";
      customCursor.style.display = "none";
   }
});
emailArea.addEventListener("mouseover", () => {
   if (res == 1) {
      txtCursor.style.display = "inline-block";
      txtCursor.style.height = "19px";
      txtCursor.style.width = "15px";
      customCursor.style.display = "none";
   }
});

// HOVER POINTER OUT
msgArea.addEventListener("mouseout", () => {
   if (res == 1) {
      customCursor.style.display = "inline-block";
      // qs("#hov-ptr").style.display = "none";
      txtCursor.style.display = "none";
   }
});
emailArea.addEventListener("mouseout", () => {
   if (res == 1) {
      customCursor.style.display = "inline-block";
      // qs("#hov-ptr").style.display = "none";
      txtCursor.style.display = "none";
   }
});
