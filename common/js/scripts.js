
// トップに戻るボタンが出る
/////////////////////////////////////////////////////
window.addEventListener("scroll", function() {
  const backtoTop = document.querySelector("#pagetop");
  const scrollValue = window.pageYOffset;
  if (scrollValue > 300){
    backtoTop.classList.add("fade_in");
  } else {
    backtoTop.classList.remove("fade_in");
  }
});


// どこでもクリックでドロワーメニューを閉じる
/////////////////////////////////////////////////////
const btn = document.querySelector(".drawer-menu");
const input = document.querySelector(".check");
btn.addEventListener("click", ()=>{
  input.checked = !input.checked
})


// preloader
/////////////////////////////////////////////////////
const progressBar = document.querySelector(".js-loader-progress-bar");
const progressNumber = document.querySelector(".js-loader-progress-number");

const imgLoad = imagesLoaded("body");
const imgTotal = imgLoad.images.length;

let imgLoaded = 0;
let progressSpeed = 8;
let progressCount = 0;
let progressResult = 0;

let progressInit = setInterval(function () {
  updateProgress();
}, 25);

imgLoad.on("progress", function (instance, image) {
  imgLoaded++
})

function updateProgress() {

  progressCount += (imgLoaded / imgTotal) * progressSpeed;

  if(progressCount >= 100 && imgTotal > imgLoaded) {
    progressResult = 99;
  } else if(progressCount > 99.9) {
    progressResult = 100;
  } else {
    progressResult = progressCount;
  }

  progressBar.style.width = progressResult + "%";
  progressNumber.innerText = Math.floor(progressResult);

  if (progressResult >= 100 && imgTotal == imgLoaded) {
    clearInterval(progressInit);
    setTimeout(function () {
      document.querySelector("body").classList.add("is-loaded");
    }, 800);
  }
}


// Swiper
/////////////////////////////////////////////////////
const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination", 
    type: "bullets",
    clickable: "clickable"
  },
  loop: true,
  spaceBetween: 0,
  autoplay: true,
  speed: 800,
  delay: 4000,
});


// Scroll
/////////////////////////////////////////////////////
window.addEventListener("load", ()=>{

  window.addEventListener('scroll', function(){
    const hh = window.innerHeight;

    const fa_txt = document.querySelector(".f_about_txt");
    const fa_txt_rect = fa_txt.getBoundingClientRect();
    const fa_txt_top = fa_txt_rect.top;
    if (fa_txt_top <= (hh - 200)) {
      fa_txt.classList.remove("opacity");
    } else {
      fa_txt.classList.add("opacity");
    }

    const fa_img = document.querySelector(".f_about_img");
    const fa_img_rect = fa_img.getBoundingClientRect();
    const fa_img_top = fa_img_rect.top;
    if (fa_img_top <= (hh - 300)) {
      fa_img.classList.remove("opacity");
    } else {
      fa_img.classList.add("opacity");
    }

    const fm_txt = document.querySelector(".f_menu_txt");
    const fm_txt_rect = fm_txt.getBoundingClientRect();
    const fm_txt_top = fm_txt_rect.top;
    if (fm_txt_top <= (hh - 200)) {
      fm_txt.classList.remove("opacity");
    } else {
      fm_txt.classList.add("opacity");
    }

    const fm_img = document.querySelector(".f_menu_img");
    const fm_img_rect = fm_img.getBoundingClientRect();
    const fm_img_top = fm_img_rect.top;
    if (fm_img_top <= (hh - 300)) {
      fm_img.classList.remove("opacity");
    } else {
      fm_img.classList.add("opacity");
    }

    const thumb01 = document.querySelector(".menu01");
    const thumb01_rect = thumb01.getBoundingClientRect();
    const thumb01_top = thumb01_rect.top;
    if (thumb01_top <= (hh - 200)) {
      thumb01.classList.remove("opacity_up");
    } else {
      thumb01.classList.add("opacity_up");
    }

    const thumb02 = document.querySelector(".menu02");
    const thumb02_rect = thumb02.getBoundingClientRect();
    const thumb02_top = thumb02_rect.top;
    if (thumb02_top <= (hh - 300)) {
      thumb02.classList.remove("opacity_up");
    } else {
      thumb02.classList.add("opacity_up");
    }

    const thumb03 = document.querySelector(".menu03");
    const thumb03_rect = thumb03.getBoundingClientRect();
    const thumb03_top = thumb03_rect.top;
    if (thumb03_top <= (hh - 400)) {
      thumb03.classList.remove("opacity_up");
    } else {
      thumb03.classList.add("opacity_up");
    }

    const thumb04 = document.querySelector(".menu04");
    const thumb04_rect = thumb04.getBoundingClientRect();
    const thumb04_top = thumb04_rect.top;
    if (thumb04_top <= (hh - 200)) {
      thumb04.classList.remove("opacity_up");
    } else {
      thumb04.classList.add("opacity_up");
    }

    const thumb05 = document.querySelector(".menu05");
    const thumb05_rect = thumb05.getBoundingClientRect();
    const thumb05_top = thumb05_rect.top;
    if (thumb05_top <= (hh - 300)) {
      thumb05.classList.remove("opacity_up");
    } else {
      thumb05.classList.add("opacity_up");
    }

    const thumb06 = document.querySelector(".menu06");
    const thumb06_rect = thumb06.getBoundingClientRect();
    const thumb06_top = thumb06_rect.top;
    if (thumb06_top <= (hh - 300)) {
      thumb06.classList.remove("opacity_up");
    } else {
      thumb06.classList.add("opacity_up");
    }

    const thumb07 = document.querySelector(".menu07");
    const thumb07_rect = thumb07.getBoundingClientRect();
    const thumb07_top = thumb07_rect.top;
    if (thumb07_top <= (hh - 300)) {
      thumb07.classList.remove("opacity_up");
    } else {
      thumb07.classList.add("opacity_up");
    }

    const ff_txt = document.querySelector(".f_fc_txt");
    const ff_txt_rect = ff_txt.getBoundingClientRect();
    const ff_txt_top = ff_txt_rect.top;
    if (ff_txt_top <= (hh - 200)) {
      ff_txt.classList.remove("opacity");
    } else {
      ff_txt.classList.add("opacity");
    }

    const ff_img = document.querySelector(".f_fc_img");
    const ff_img_rect = ff_img.getBoundingClientRect();
    const ff_img_top = ff_img_rect.top;
    if (ff_img_top <= (hh - 300)) {
      ff_img.classList.remove("opacity");
    } else {
      ff_img.classList.add("opacity");
    }

    const fac01 = document.querySelector(".fa01");
    const fac01_rect = fac01.getBoundingClientRect();
    const fac01_top = fac01_rect.top;
    if (fac01_top <= (hh - 200)) {
      fac01.classList.remove("opacity_up");
    } else {
      fac01.classList.add("opacity_up");
    }

    const fac02 = document.querySelector(".fa02");
    const fac02_rect = fac02.getBoundingClientRect();
    const fac02_top = fac02_rect.top;
    if (fac02_top <= (hh - 300)) {
      fac02.classList.remove("opacity_up");
    } else {
      fac02.classList.add("opacity_up");
    }

    const fac03 = document.querySelector(".fa03");
    const fac03_rect = fac03.getBoundingClientRect();
    const fac03_top = fac03_rect.top;
    if (fac03_top <= (hh - 400)) {
      fac03.classList.remove("opacity_up");
    } else {
      fac03.classList.add("opacity_up");
    }

    const om_txt = document.querySelector(".f_om_txt");
    const om_txt_rect = om_txt.getBoundingClientRect();
    const om_txt_top = om_txt_rect.top;
    if (om_txt_top <= (hh - 200)) {
      om_txt.classList.remove("opacity");
    } else {
      om_txt.classList.add("opacity");
    }

    const om_img = document.querySelector(".f_om_img");
    const om_img_rect = om_img.getBoundingClientRect();
    const om_img_top = om_img_rect.top;
    if (om_img_top <= (hh - 300)) {
      om_img.classList.remove("opacity");
    } else {
      om_img.classList.add("opacity");
    }

  });

});




