//スクロール量カウント数字の関数宣言
// let scrollNum = document.getElementById('scroll-counter');
// //真ん中の枠だけ指定してスクロール量引っ張れない，なぜ？？
// const scrollSize = document.getElementById('scroll-page');


// //画面上でスクロールされたら，関数呼び出し
// //scrollNumに縦方向のスクロール量を取得して〜
// window.onscroll = function () {
//   scrollNum.textContent = window.scrollY;
// };

//.K_2のheight:100vhをコメントアウトしたらうまくいった．
//5000px指定優先したらできた，なぜだ



//色かえる処理，画像チェンジにもいけそう
//スクロールしたら，関数実行
// window.addEventListener('scroll',function() {

// //変数scrollに縦方向スクロール量取得
// let scroll = window.scrollY;
// //変数bgColor宣言，htmlの#colorを指定
// let bgColor = document.getElementById('color');

// let p = document.getElementById('first');

// //スクロール量に応じた色変更の指定
// if(scroll > 4000) {

//     //画像にするならbackgroundimageかな？
//     bgColor.style.backgroundColor = '#FFAB00';
//     p.classList.replace('k_3','k_4');

// } else if (scroll > 3000) {
//     bgColor.style.backgroundColor = '#43A047';
// } else if (scroll > 2000) {
//     bgColor.style.backgroundColor = '#FF6F00';
// } else if (scroll > 1000) {
//     bgColor.style.backgroundColor = '#0091EA';
// } else {
//     bgColor.style.backgroundColor = '#FF4081';
//     p.classList.replace('k_4','k_3');
// }
// });




//↓スクロールで制作サイトの文字が動く，非表示（未完成）↓

// const text = document.getElementById('key');

// window.addEventListener('scroll', function () {
//   const scaleNumber = window.scrollY;
//   let scale = window.innerHeight;

//   if (scaleNumber <= scale) {
//     text.style.display = "block";
//     text.style.top = "1rem";
//     text.style.transition = "1s";

//   } else if (scaleNumber === 1000) {
//     text.style.color = "pink";
//     text.style.top = "70vh";
//   }

//   else {
//     // text.style.display = "none";
//     text.style.position = "fixed";
//     text.style.bottom = "0";
//   }
// })





// 一回スクロールしたら終わりイベント，うまく行っている

// let once = false;

// let s_1 = document.getElementById('s_1');
// // s_1.style.display = "none";

// function noscroll(e) {
//   e.preventDefault();
// }

// window.addEventListener('scroll', function () {

//   // Position from the top of the target
//   target_position = document.querySelector('#event_div1').getBoundingClientRect().bottom;//要素の上側が入ったら，という指定

//   // Execute if it is smaller than the height of Window
//   if (target_position <= window.innerHeight && once !== true) {
//     once = true;

//     s_1.style.display = "";


//     // alert(`Execute the event`);
//   }
// });


//////////メモ//////////

//上のプログラム，紫ゾーン全域まで入ったらp1の説明文表示させるやつ
//文字の非表示〜再表示までOK
//あとは左右の画像の黒幕を交互に外す，つけるの操作，，，

//transitionうまく使えない，適用されてるのに効果なし
//変化前にもつけてるのに



//日付取得
// let now = new Date();
// function LoadProc() {
//   let target = document.getElementById("DateTimeDisp");

//   let imgBox = 0;

//   var Year = now.getFullYear();
//   var Month = Number(now.getMonth()) + 5;
//   var Date = now.getDate();
//   var Hour = now.getHours();
//   var Min = now.getMinutes();
//   var Sec = now.getSeconds();

//   console.log(Month);

//   if (1 < Month || Month <= 4) {
//     imgBox = document.write('<img src="img/l_page/guitar_drawing.jpg">');
//   } else {
//     imgBox = document.write('<img src="img/l_page/guitar_new.jpg">');
//   }
//   target.innerHTML = imgBox;
// }







// document.addEventListener(scroll, () => {
//   const page = document.getElementById('scroll-page');
//   page.scrollBy(0, window.innerHeight / 2);
// })





// function sayHello() {
//   let number = window.scrollY;
//   const text = document.getElementById('key');

//   // area.style.overflowY = "hidden";

//   window.scrollBy(0, innerHeight);

//   // var tc = setTimeout("sayHello()", 1000);

//   if (number >= innerHeight * 2) {
//     // alert("あああ");
//     window.scrollTo(0, 0);
//     // text.style.display = "none";
//     text.classList.add("none_text1");
//     // clearTimeout(tc);
//   }
// }

// document.addEventListener('scroll', sayHello);

//ボタン押してスクロールはできた，
//画面幅の２倍動いたら，うんこでて，一番上に戻る

//やりたいのは，スクロールした画面幅の倍数の時に両側の画像と文字のアニメーション
//アラートやると，処理おせーゾッって表示される








// スクロールでロゴ色変化//
function Change() {
  var svg = document.getElementById('svg_box')
  const number = window.scrollY;

  if (number > 400) {
    //ここに.svgimgを消して.svg_changeを追加する
    svg.classList.remove("svgimg");
    svg.classList.add("svg_change")
  } else if (number < 500) {
    svg.classList.add("svgimg");
    svg.classList.remove("svg_change");
  }
}
document.addEventListener('scroll', Change);





window.onscroll = () => {
  const now = window.scrollY;
  const size = window.innerHeight;
  const lpage = document.getElementById('mask');
  const rpage = document.getElementById('mask2');
  const k_1 = document.getElementById('k1');
  const k_3 = document.getElementById('k3');


  if (now >= size * 4) {
    if (now && size) {
      lpage.style.opacity = "0";
      rpage.style.opacity = "0";
      k_1.classList.add("k_h");
      k_3.classList.add("k_h");
    }
  } else if (now >= size * 3) {
    if (now && size) {
      rpage.style.opacity = "1";
      lpage.style.opacity = "1";
      k_1.classList.remove("k_h");
      k_3.classList.remove("k_h");
    }
  }
  else if (now > size * 2) {
    if (now && size) {
      lpage.style.opacity = "1";
      rpage.style.opacity = "0";
      k_1.classList.remove("k_h");
      k_3.classList.remove("k_h");
    }
  } else if (now > size) {
    if (now && size) {
      lpage.style.opacity = "0";
      rpage.style.opacity = "1";
      k_1.classList.remove("k_h");
      k_3.classList.remove("k_h");
    }

  } else {
    lpage.style.opacity = "1";
    rpage.style.opacity = "1";
    k_1.classList.remove("k_h");
    k_3.classList.remove("k_h");
  }

}






function home() {
  var btn = document.getElementById('back_btn');
  const now = window.scrollY;

  if (now > 500) {
    btn.style.display = "block";
    btn.style.transition = "1s";
    btn.style.opacity = "0.5";
  } else {
    btn.style.display = "none";
    btn.style.opacity = "0";
  }
}


document.addEventListener('scroll', home);

