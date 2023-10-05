//слайдеры
if (document.querySelectorAll('.main__slider').length != 0) {
  new Swiper('.main__slider', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pauseOnMouseEnter: true, //не работает
    speed: 800,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });
  
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },
  });
}

if (document.querySelectorAll('.block-popular-category__slider').length != 0) {
  new Swiper('.block-popular-category__slider', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    speed: 800,
    slidesPerView: 2,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
      480: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1640: {
        slidesPerView: 6,
        spaceBetween: 50,
      }
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });
  
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },
  });
}

if (document.querySelectorAll('.block-logos__slider').length != 0) {
  new Swiper('.block-logos__slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
        320: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 3,
        },
        768: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 7,
        },
        1640: {
          slidesPerView: 9,
        }
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        speed: 800,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
            init() {
              this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
              });
        
              this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
              });
            }
          },
  });
}

if (document.querySelectorAll('.product-slider').length != 0) {
  new Swiper('.product-slider', {
    thumbs: {
      swiper: {
        el: '.product-mini-slider',
        slidesPerView: 6
      }
    },
    zoom: {
      maxRatio: 5,
      minRatio: 1,
    }
  });
}

if (document.querySelectorAll('.slider-buy-with__slider').length != 0) {
  new Swiper('.slider-buy-with__slider', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    speed: 800,
    slidesPerView: 2,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
      480: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1640: {
        slidesPerView: 6,
        spaceBetween: 50,
      }
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });
  
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },
  });
}

//маска для телефона
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
let phones = document.querySelectorAll('#tel');
if (phones) {
    if (phones.length > 0){
        for (let index = 0; index < phones.length; index++) {
            const phone = phones[index];
            var mask = IMask(phone, maskOptions);
        }
    }
}

//Загрузка файлов на странице поставщиков
let inputs = document.querySelectorAll('.input-file__input');
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling;
  let labelValue = label.innerText;
  console.log(label);
  input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
        if (countFiles)
          label.innerText = 'Выбрано файлов: ' + countFiles;
        else
          label.innerText = labelValue;
    });
  });

if (document.querySelectorAll('.about-help__slider').length != 0) {
  new Swiper('.about-help__slider', {
  simulateTouch: true,
  autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false
  },
  speed: 800,
  loop: true,
  watchOverflow: true,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  spaceBetween: 5,
  loopedSlides: 1,
  on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });
  
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },
});
}

/*----------Слайдер цен-----------*/
const slider = document.getElementById('slider');

if (slider) {
  noUiSlider.create(slider, {
    start: [6000, 6000000],
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 6000000
    }
  });
  const input0 = document.getElementById("filter-price-input-0")
  const input1 = document.getElementById("filter-price-input-1")
  const inputs = [input0, input1];
  slider.noUiSlider.on('update', function(values, handle){
    inputs[handle].value = Math.round(values[handle]);
  });
  const setSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    slider.noUiSlider.set(arr);
  };
  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setSlider(index, e.currentTarget.value);
    });
  });
}

var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})