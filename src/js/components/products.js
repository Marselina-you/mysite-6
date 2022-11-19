import GraphModal from "graph-modal";

const catalogList = document.querySelector('.catalog-list');
const catalogMore = document.querySelector('.catalog__more');
let prodQuantity = 5;
let dataLength = null;

const normalPrice = (str) => {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

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

        const modal = new GraphModal();

      });

  };
  loadProducts(prodQuantity);

  catalogMore.addEventListener('click', (e) => {
    prodQuantity = prodQuantity + 3;

    loadProducts(prodQuantity);
    if (prodQuantity => dataLength) {
      catalogMore.style.display = 'block';
    }
  });
}


