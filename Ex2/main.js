const item2 = document.querySelector(".nav__item2");
const item3 = document.querySelector(".nav__item3");
const sub3sub2 = document.querySelector(".nav__sub-item2");
const sub3 = document.querySelector(".nav__sub-item3");
const aTag = document.querySelectorAll("a");

aTag.forEach((item) => {
  item.onclick = (e) => {
    e.preventDefault();
  };
});


item2.onclick = () => {
  if(sub2.style.height === "0px") {
    sub2.style.opacity = "1"
    sub2.style.height = "71px"
    sub2.style.marginBottom = "6px"
} else {
  sub2.style.opacity = "0"
  sub2.style.height = "0px"
  sub2.style.marginBottom = "0"
}
};


item3.onclick = () => {
  if(sub3.style.height === "0px") {
    sub3.style.opacity = "1"
    sub3.style.height = "71px"
    sub3.style.marginBottom = "6px"
} else {
  sub3.style.opacity = "0"
  sub3.style.height = "0px"
  sub3.style.marginBottom = "0"
}
};
