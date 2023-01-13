function cycleImg(imgContent, img, offset) {
  let nextImgIndex = null;
  for (let i = 0; i < imgContent.length - 1; ++i) {
    if (imgContent[i] === img) {
      nextImgIndex = i + offset;
      break;
    }
  }
  console.log(nextImgIndex);
  if (
    nextImgIndex < 0 ||
    nextImgIndex > imgContent.length - 2 ||
    nextImgIndex === null
  ) {
    return;
  }

  let nextImg = imgContent[nextImgIndex];
  img.classList.toggle("activeimg");
  img.classList.toggle("hidden");
  nextImg.classList.toggle("activeimg");
  nextImg.classList.toggle("hidden");
  let titleElement = document.querySelector(".img-title h3");
  titleElement.textContent = nextImg.childNodes[1].getAttribute("data-title");
}

let imgContent = document.querySelectorAll(".img-content li");
imgContent.forEach((img) => {
  img.addEventListener("mouseover", () => {
    let titleElement = document.querySelector(".img-title h3");
    titleElement.textContent = img.childNodes[1].getAttribute("data-title");
  });
  img.addEventListener("click", () => {
    document.querySelector("#main-collapse > ul").classList.toggle("activeimg");
    img.classList.toggle("activeimg");
    let otherImgs = document.querySelectorAll(
      ".img-content li:not(.activeimg)"
    );
    otherImgs.forEach((othImg) => {
      othImg.classList.toggle("hidden");
    });
  });
});

let cycle = document.querySelectorAll(".img-nav b");
cycle[0].addEventListener("click", () => {
  let img = document.querySelector("ul .activeimg");
  cycleImg(imgContent, img, -1);
});
cycle[1].addEventListener("click", () => {
  let img = document.querySelector("ul .activeimg");
  cycleImg(imgContent, img, 1);
});
