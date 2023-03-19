const item2 = document.querySelector(".nav__item2");
const item3 = document.querySelector(".nav__item3");
const sub2 = document.querySelector(".nav__sub-item2");
const sub3 = document.querySelector(".nav__sub-item3");
const aTag = document.querySelectorAll("a");

aTag.forEach((item) => {
  item.onclick = (e) => {
    e.preventDefault();
  };
});

item2.onclick = () => {
  if (sub2.style.opacity === "0") {
    sub2.style.opacity = "1";
  } else if (sub2.style.display === "none") {
    sub2.style.display = "block";
  }
};


item3.onclick = () => {
  if (sub3.style.opacity === "0") {
    sub3.style.opacity = "1";
  } else if (sub3.style.display === "none") {
    sub3.style.display = "block";
  }
};
