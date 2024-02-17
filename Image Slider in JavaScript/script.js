let flag = 0; // 1

// 1

function controller(x) {
  flag = flag + x;
  slideshow(flag);
}

function slideshow(num) {
  // 1
  let slid = document.getElementsByClassName("slid");

  console.log(num);

  if (num == slid.length) {
    flag = 0;
    num = 0;
  }

  if (num < 0) {
    flag = slid.length - 1;
    num = slid.length - 1;
  }

  for (let singleSlide of slid) {
    singleSlide.style.display = "none";
  }
  slid[num].style.display = "block";
}
slideshow(flag);
