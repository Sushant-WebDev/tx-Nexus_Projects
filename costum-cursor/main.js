"use strict";
let body = document.querySelector("body");
let crsr = document.querySelector(".cursor");
body.addEventListener('mousemove', (dirc) => {
    setTimeout(() => {
        crsr.style.left = dirc.x + "px";
        crsr.style.top = dirc.y + "px";
    }, 50);
});
