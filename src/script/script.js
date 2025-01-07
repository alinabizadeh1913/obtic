"use strict";

const close = document.querySelector(".close-offer");
const offer = document.getElementById("offer");

const hideOffer = () => {
  offer.style.display = "none";
};

close.addEventListener("click", hideOffer);
