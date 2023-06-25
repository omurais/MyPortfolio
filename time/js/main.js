'use strict'

// 現在時刻の取得
function countUp(){
  const now = new Date();
  const dsec = now.getSeconds();
  const dmin = now.getMinutes();
  const dhour = now.getHours();
  const dday = now.getDate();
  const dmonth_list = ['Jan.','Feb.','Mar.','Apr.','May','Jun','Jul','Aug.','Sep.','Oct.','Nov.','Dec.'];
  const dmonth = now.getMonth();
  const dmonth_eng = dmonth_list[dmonth];
  const dyear = now.getFullYear();
  const dweek = now.getDay(); //曜日の取得
  const dweekChart = ['SUN','MON','TUE','WED','THU','FRI','SAT'][dweek]; //曜日を英語に変換
  const dtime = [dyear, dmonth_eng, dday, dhour, dmin, dsec, dweekChart]; //年月日時間をdtimeへ代入

  return dtime;
}

// 現在日付をブラウザ表示
const counter = countUp();
const date = `${counter[6]}, ${counter[1]} ${counter[2]}, ${counter[0]}`;
document.getElementById('day').textContent = date;

// 現在時刻をブラウザ表示
function recalc(){
  const counter = countUp();
  document.getElementById('hour').textContent = String(counter[3]).padStart(2, '0');
  document.getElementById('min').textContent = String(counter[4]).padStart(2, '0');
  document.getElementById('sec').textContent = String(counter[5]).padStart(2, '0');
  refresh();
}

// 秒を1秒でフェードアウト
// 作業中
{
  // const fo = document.querySelector('#sec');
  // if(fo.classList.contains('fi') === true){
  //   document.querySelector('#sec').classList.toggle('fi');
  // } else {
  //   document.querySelector('#sec').classList.add('fi');
  // }
  // refresh();
}

function refresh(){
  setTimeout(recalc, 1000);
  // setTimeout(fadeOut, 1000);
}

// 実行
recalc();

// 時間指定で背景画像変更
let bgImg = document.querySelector('.watch');

//時間帯で画像変更
function changeBgImg(){
  const counter = countUp();
  if(counter[4] % 3 === 0){
    bgImg.style.background = 'url(img/5.jpg) no-repeat bottom / cover'; // 分が３の倍数で画像変更
  } else if(counter[3] >=6 && counter[3]<11){
    bgImg.style.background = 'url(img/city/ny_morning.jpg) no-repeat bottom / cover'; //6:00-10:59
  }else if(counter[3]>=11 && counter[3]<17){
    bgImg.style.background = 'url(img/city/ny_noon.jpg) no-repeat bottom / cover'; //11:00-16:59
  }else if(counter[3]>=17 && counter[3]<23){
    bgImg.style.background = 'url(img/city/ny_night.jpg) no-repeat bottom / cover';//17:00-22:59
  }else if(counter[3]<6 || counter[3]>=23){
    bgImg.style.background = 'url(img/city/ny_midnight.jpg) no-repeat bottom / cover';//0:00-5:59、23:00-23:59
  }
  countSec();// 1秒ごとに更新
};

// 1秒ごとに更新
function countSec(){
  setTimeout(changeBgImg,1000);
};

// 実行
changeBgImg();