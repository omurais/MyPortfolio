'use strict';

{
  //Intersection Observer API
  //アニメーション設定 タイトルエリア
  // function callback(entries, obs){
  //   entries.forEach(entry => {
  //     if(!entry.isIntersecting){
  //       return;
  //     }

  //     entry.target.classList.add('appear');
  //     obs.unobserve(entry.target);
  //   });
  // }

  // const observer = new IntersectionObserver(callback,{
  //   threshold:0.2,
  // });

  // document.querySelectorAll('.txt_animate').forEach(el => {
  //   observer.observe(el);
  // });

  //アニメーション設定 商品エリア
  function callback(entries, obs){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        toTop.classList.add('scrolled');
      } else {
        toTop.classList.remove('scrolled');
      }
    });
  }

  const toTop = document.getElementById('to_top');

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);
  const targets = document.querySelectorAll('.animate');

  targets.forEach(target => {
    observer.observe(target);
  });

  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(document.getElementById('target'));

  toTop.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  });
}

//グローバルメニューのプルダウンメニュー開閉
// $(document).ready(function(){
//   $('.subMenu_txt').mouseover(function(){
//     $(this).next().toggleClass('hidden');
//   });
//   // $('.subMenu_txt').mouseout(function(){
//   //   $(this).next().toggleClass('hidden');
//   // });
// });

{
  const toggle = document.getElementById('jsToggle');
  const btn = document.getElementById('jsBtn');

btn.addEventListener('mouseover', ()=> {
  if(toggle.classList.contains('hidden')){
    toggle.classList.remove('hidden');
  } else {
    toggle.classList.add('hidden');
  }
});

btn.addEventListener('mouseout', ()=> {
  if(toggle.classList.contains('hidden')){
    toggle.classList.remove('hidden');
  } else {
    toggle.classList.add('hidden');
  }
});
}

  /*トップスライド*/
  //  let slides = document.getElementsByClassName('slides')[0].getElementsByTagName('li');
  //  viewSlide(6000);

  // function viewSlide(msec, slide_no = -1) {

  //   if(slides[slide_no]){
  //     slides[slide_no].style.display = 'none';
  //   }

  //   slide_no++;
  //   if(slides[slide_no]){
  //     slides[slide_no].style.display = 'block';
  //   } else {
  //     slides[0].style.display = 'block';
  //     slide_no = 0;
  //   }
  //   setTimeout(function(){
  //     viewSlide(msec,slide_no);
  //   }, msec);
  // }
