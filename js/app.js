var imgs = [
  toImg('1.jpg'),
  toVid('2.mov'),
  toImg('3.jpg'),
  toImg('4.jpg'),
  toImg('5.jpg'),
  toImg('6.jpg'),
  toImg('7.jpg'),
  toImg('8.jpg'),
  toImg('9.jpg'),
  toImg('10.png'),
  toImg('11.png'),
  toImg('12.png'),
  toImg('13.jpg'),
  toImg('14.jpg')
]

document.querySelector(".gart").innerHTML = imgs[Math.floor(Math.random()*imgs.length)];

function toImg(src) {
  return `<img alt="Image of Garett." src="/assets/images/${src}">`;
}

function toVid(src) {
  return `<video autoplay controls loop src="/assets/images/${src}"></video>`;
}