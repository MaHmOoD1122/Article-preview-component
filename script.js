"use strict";

const shareBox = document.querySelector(".share-box-container");

const shareBtn = document.querySelector(".share--container");

const shareEl = document.querySelector(".share");

shareBtn.addEventListener("click", function () {
  shareBox.classList.toggle("hidden");
  shareEl.classList.toggle("share-active");
  shareBtn.classList.toggle("share-container-active");
});
