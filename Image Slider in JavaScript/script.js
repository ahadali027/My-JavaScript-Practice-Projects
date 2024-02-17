flag = 0;

function controller(x) {
  flag = flag + x;
  slideshow(flag);
}

function slideshow(num) {
  let slid = document.getElementsByClassName("slid");

  if (num == slid.length) {
    flag = 0;
    num = 0;
  }
  if (num < 0) {
    flag = slid.length - 1;
    num = slid.length - 1;
  }

  for (let y of slid) {
    y.style.display = "none";
  }
  slid[num].style.display = "block";
}
slideshow(flag);
