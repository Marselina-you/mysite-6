import GraphModal from "graph-modal";
import Swiper from "swiper";

const catalogList = document.querySelector('.catalog-list');
const catalogMore = document.querySelector('.catalog__more');
const prodModal = document.querySelector('[data-graph-target = "prod-modal"] .prod-modal');
const prodModalSlider = document.querySelector('.modal-slider .swiper-wrapper');
const prodModalPreview = document.querySelector('.modal-slider .modal-preview');
const prodModalInfo = document.querySelector('.modal-info__wrapper');
const prodModalDescr = document.querySelector('.modal-prod-descr');
const prodModalChars = document.querySelector('.prod-chars');
const prodModalVideo = document.querySelector('.prod-modal__video');


let prodQuantity = 5;
let dataLength = null;

const normalPrice = (str) => {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const prodSlider = new Swiper('.modal-slider__container', {
  slidesPerView: 1,
  spaceBetween: 20
});

if (catalogList) {
  const loadProducts = (quantity = 5 ) => {
    fetch('../data/images/data.json')
      .then((response) => {
        return response.json(); //ф-я преобразует json в js
      })
      .then((data) => {
        console.log(data);

        dataLength = data.length;

        catalogList.innerHTML = ''; //очистим все перед показом

        for (let i = 0; i < dataLength; i++) {
          if (i < quantity) {
            let item = data[i];
            console.log(item)

            catalogList.innerHTML += `

            <li class="catalog-list__item">
            <article class="product">
<div class="product__image">
  <img src="${item.mainImage}" alt="${item.title}">
  <div class="product__btns">
    <button class="btn-reset product__btn" data-graph-path="prod-modal" data-id="${item.id}" aria-label="показать инфо">
      <svg class="">
        <use xlink:href="img/sprite.svg#eye"></use>
      </svg>
    </button>
    <button class="btn-reset product__btn" aria-label="показать инфо">
      <svg class="">
        <use xlink:href="img/sprite.svg#cart"></use>
      </svg>
    </button>
  </div>

</div>
<h3 class="product__title">${item.title}</h3>
<span class="product__price">${normalPrice(item.price)}</span>

            </article>
          </li>


            `
          }
        }
      })
      .then(() => {
        const productTitle = document.querySelectorAll('div.product__title');
        productTitle.forEach(el => {
          $clamp(productTitle, {clamp: '22px'});
        });

        const modal = new GraphModal({
          isOpen: (modal) => {
           const openBtnId = modal.previousActiveElement.dataset.id;



            loadModalData(openBtnId);



            prodSlider.update();

          },
        });

      });

  };
  loadProducts(prodQuantity);

  const loadModalData = (id = 1) => {
    fetch(`../data/images/data.json`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      prodModalSlider.innerHTML = '';
      prodModalPreview.innerHTML = '';
      prodModalInfo.innerHTML = '';
      prodModalDescr.innerHTML = '';
      prodModalChars.innerHTML = '';
      prodModalVideo.innerHTML = '';

      for (let dataItem of data) {
        if (dataItem.id == id) {
          console.log(dataItem);

          const slides = dataItem.gallery.map((image, idx) => {
            return `
            <div class="swiper-slide data-index="${idx}"">
            <img src="${image}" alt=""></div>

            `;
          });
          const preview = dataItem.gallery.map((image, idx) => {
            return `
            <div class="modal-preview__item" tabindex="0" data-index="${idx}">
            <img src="${image}" alt=""></div>
            `;
          });
          const sizes = dataItem.sizes.map((size, idx) => {
            return `
            <li class="modal-sizes__item">
            <buttom class="modal-sizes__btn">${size}</buttom>
          </li>
            `;
          });

          prodModalSlider.innerHTML = slides.join('');
          prodModalPreview.innerHTML = preview.join('');

          prodModalInfo.innerHTML = `
          <h3 class="modal-info__title">${dataItem.title}</h3>
          <div class="modal-info__rate">
            <img src="img/star.svg" alt="Рейтинг 5 из 5">
            <img src="img/star.svg" alt="">
            <img src="img/star.svg" alt="">
            <img src="img/star.svg" alt="">
            <img src="img/star.svg" alt="">
          </div>
          <div class="modal-info__sizes">
            <span class="modal-info__subtitle">Выберите размер</span>
            <ul class="list-reset modal-info__sizes-list modal-sizes">

${sizes.join('')}
            </ul>

          </div>
          <div class="modal-info__price">
            <span class="modal-info__current-price">${dataItem.price + 'p'}</span>
            <span class="modal-info__old-price">${dataItem.oldPrice ? dataItem.oldPrice + 'p' : '' }</span>
          </div>

          `;

          prodModalDescr.textContent = dataItem.description;

          let charsItems = ``;
          Object.keys(dataItem.chars).forEach(function eachKey(key) {
            charsItems +=  `<p class="prod-bottom__descr prod-chars__item">${key}: ${dataItem.chars[key]}</p>`;
          });
          prodModalChars.innerHTML = charsItems;

          if (dataItem.video) {
            prodModalVideo.style.display = 'block';
            prodModalVideo.innerHTML = ` <iframe class="prod-modal__video" src="${dataItem.video}"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
          }else {
            prodModalVideo.style.display = 'none';
          }



        }
      }

    })
    .then(() => {
      prodSlider.update();

      prodSlider.on('slideChangeTransitionEnd', function () {
        let idx = document.querySelector('.swiper-slide-active').dataset.index;
        document.querySelectorAll('.modal-preview__item').forEach(el => {el.classList.remove('modal-preview__item--active');});
        document.querySelector(`.modal-preview__item[data-index="${idx}"]`).classList.add('modal-preview__item--active');
      });


      document.querySelectorAll('.modal-preview__item').forEach(el => {
        el.addEventListener('click', (e) => {
          const idx = parseInt(e.currentTarget.dataset.index);
          document.querySelectorAll('.modal-preview__item').forEach(el => {el.classList.remove('modal-preview__item--active');});

          e.currentTarget.classList.add('modal-preview__item--active');

          prodSlider.slideTo(idx);
        });
      });
    })
  };

  catalogMore.addEventListener('click', (e) => {
    prodQuantity = prodQuantity + 3;

    loadProducts(prodQuantity);
    if (prodQuantity => dataLength) {
      catalogMore.style.display = 'block';
    }
  });
}


