"use strict";
// {
//   // heroエリアMVスライドショー
//   function play() {
//     setTimeout(() => {
//       images[currentIndex].classList.remove('current');
//       currentIndex++;
//       if(currentIndex >  images.length - 1){
//         currentIndex = 0;
//       }
//       images[currentIndex].classList.add('current');
//       play();
//     },5000);
//   };

//   const images = document.querySelectorAll('.hero img');
//   let currentIndex = 0;

//   play();
// }

{
  //index 新商品メニュースライド
  const images = [
    "img/newP01.jpg",
    "img/newP02.jpg",
    "img/newP03.jpg",
    "img/newP04.jpg",
  ];
  let current = 0;

  function changeImg(num) {
    if (current + num >= 0 && current + num < images.length) {
      current += num;
      document.getElementById("main_image").src = images[current];
      pageNum();
    }
  }

  function pageNum() {
    document.getElementById("page").textContent = `${current + 1} / ${
      images.length
    }`;
  }
  pageNum();

  document.getElementById("prev").onclick = function () {
    changeImg(-1);
  };
  document.getElementById("next").onclick = function () {
    changeImg(1);
  };
}

// index tab menu
{
  const tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", tabSwitch, false);
  }

  // タブをクリックすると実行する関数
  function tabSwitch() {
    // タブのclassの値を変更
    document
      .getElementsByClassName("is-active")[0]
      .classList.remove("is-active");
    this.classList.add("is-active");

    // コンテンツのclassの値を変更
    document.getElementsByClassName("is-show")[0].classList.remove("is-show");
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document.getElementsByClassName("panel")[index].classList.add("is-show");
  }
}

//ドットインストール indexのカルーセル
{
  const next = document.getElementsByClassName("dtHero__btn-next")[0];
  const prev = document.getElementsByClassName("dtHero__btn-prev")[0];
  const ul = document.getElementsByClassName("dtHero__area")[0];
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;

  function updateBtns() {
    prev.classList.remove("hidden");
    next.classList.remove("hidden");

    if (currentIndex === 0) {
      prev.classList.add("hidden");
    }

    if (currentIndex === slides.length - 1) {
      next.classList.add("hidden");
    }
  }

  function moveSlides () {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

function setupDots() {
  for (let i = 0; i < slides.length; i++) {
    const btn = document.createElement('button');
    btn.addEventListener('click', () => {
      currentIndex = i;
      updateDots();
      updateBtns();
      moveSlides();
    });
    dots.push(btn);
    document.querySelector('.JScircle').appendChild(btn);
  }
  dots[0].classList.add('current');
}

function updateDots() {
  dots.forEach(dot => {
    dot.classList.remove('current');
  });
  dots[currentIndex].classList.add('current');
}

  updateBtns();
  setupDots();

  // 次へボタン
  next.addEventListener("click", () => {
    currentIndex++;
    updateBtns();
    updateDots();
    moveSlides();
  });

  // 前へボタン
  prev.addEventListener("click", () => {
    currentIndex--;
    updateBtns();
    updateDots();
    moveSlides();
  });

  window.addEventListener ('resize', () => {
    moveSlides();
  });
}

// index.html モーダルウィンドウ
{
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  close.addEventListener('click', () => {
    modal.classList.add('modal-hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    close.click();
  });
}