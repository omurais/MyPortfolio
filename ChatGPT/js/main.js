'use strict'
// 画像スクロール
function startScroll() {
  const wrapper = document.getElementById("scroll-wrapper");
  const images = wrapper.getElementsByTagName("img");
  let scrollPosition = 0;
  const scrollSpeed = 1;

  setInterval(function() {
    scrollPosition += scrollSpeed;
    if (scrollPosition >= images[0].width * 4) {
      scrollPosition = 0;
    }
    wrapper.scrollLeft = scrollPosition;
  }, 20);
}

window.onload = function() {
  startScroll();
};

// タブメニュー
  function openTab(evt, tabName) {
  let i, tabcontent, tab;

  // tabcontentにactiveがある場合削除
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }

  // tabにactiveがある場合削除
  tab = document.getElementsByClassName("tab");
  for (i = 0; i < tab.length; i++) {
    tab[i].classList.remove("active");
  }

  //？？？
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}