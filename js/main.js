let mneuLinks = document.getElementById("mneuLinks");

let toggleBtn = document.getElementById("toggole");

mneuLinks.style.maxHeight = "0px";
function showLinks() {
  if (mneuLinks.style.maxHeight === "0px") {
    mneuLinks.style.maxHeight = "420px";
  } else {
    mneuLinks.style.maxHeight = "0px";
  }
}

toggleBtn.addEventListener("click", showLinks);

// let submit = document.getElementById("submit");
// submit.addEventListener("mouseover", () => {
//   submit.style.transition = "all 0.3s";
//   console.log("Error");
// });
let scroller = document.querySelector(".scroller");

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});
