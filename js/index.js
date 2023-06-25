'use strict';
{
  // heroエリアMVスライドショー
  function play() {
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++;
      if(currentIndex >  images.length - 1){
        currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play();
    },5000);
  };
  
  const images = document.querySelectorAll('.hero img');
  let currentIndex = 0;
  
  play();
}

{
  //index 新商品メニュースライド
  const images = ['img/newP01.jpg','img/newP02.jpg','img/newP03.jpg','img/newP04.jpg',];
  let current = 0;
  
  function changeImg(num){
    if(current + num >= 0 && current + num < images.length){
      current += num;
      document.getElementById('main_image').src = images[current];
      pageNum();
    }
  };
  
  function pageNum(){
    document.getElementById('page').textContent = `${current + 1} / ${images.length}`
  }
  pageNum();
  
  document.getElementById('prev').onclick = function(){
    changeImg(-1);
  };
  document.getElementById('next').onclick = function(){
    changeImg(1);
  };
}
