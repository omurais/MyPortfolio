'use strict'
// let showMore01 = document.getElementById('moreItem01');
// let showMore02 = document.getElementById('moreItem02');
// let showMore03 = document.getElementById('moreItem03');


// let chair = document.querySelector('#jsChair');
// let desk = document.querySelector('#jsDesk');
// let light = document.querySelector('#jsLight');

// chair.className = 'item_hidden';
// desk.className = 'item_hidden';
// light.className = 'item_hidden';

// showMore01.addEventListener('click', ()=>{
//   chair.className = 'item_show';
//   console.log('変わった');
// });

// showMore02.addEventListener('click', ()=>{
//   desk.className = 'item_show';
//   console.log('変わった');
// });

// showMore03.addEventListener('click', ()=>{
//   light.className = 'item_show';
//   console.log('変わった');
// });

// もっとみるボタン
{
  const btn01 = document.querySelector("#moreItem01")
  const btn02 = document.querySelector("#moreItem02")
  const btn03 = document.querySelector("#moreItem03")
  
  btn01.addEventListener('click', () => {
    document.querySelector("#jsChair").classList.toggle('item_show');
    if(btn01.textContent === '▼もっと見る'){
      btn01.textContent = '▲閉じる';
    } else {
      btn01.textContent = '▼もっと見る';
    }
  });
  btn02.addEventListener('click', () => {
    document.querySelector("#jsLight").classList.toggle('item_show');
    if(btn02.textContent === '▼もっと見る'){
      btn02.textContent = '▲閉じる';
    } else {
      btn02.textContent = '▼もっと見る';
    }
  });
  btn03.addEventListener('click', () => {
    document.querySelector("#jsDesk").classList.toggle('item_show');
    if(btn03.textContent === '▼もっと見る'){
      btn03.textContent = '▲閉じる';
    } else {
      btn03.textContent = '▼もっと見る';
    }
  });
}

// FAQ開閉
{
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('faq_cont-appear');

      dts.forEach (el => {
        if (dt !== el){
          el.parentNode.classList.remove('faq_cont-appear');
        }
      })
    });
  });
}