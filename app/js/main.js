/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_quiz_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/quiz.js */ "./src/js/components/quiz.js");
/* harmony import */ var _components_quiz_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_quiz_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_range_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/range-slider.js */ "./src/js/components/range-slider.js");
/* harmony import */ var _components_range_slider_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_range_slider_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_faq_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/faq.js */ "./src/js/components/faq.js");
/* harmony import */ var _components_faq_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_faq_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/map.js */ "./src/js/components/map.js");
/* harmony import */ var _components_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_products_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/products.js */ "./src/js/components/products.js");






/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./src/js/functions/mobile-check.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных

console.log((0,_functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)());

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_clamp_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/clamp.min.js */ "./src/js/vendor/clamp.min.js");
/* harmony import */ var _vendor_clamp_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_clamp_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_nouislider_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/nouislider.min.js */ "./src/js/vendor/nouislider.min.js");
/* harmony import */ var _vendor_nouislider_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_nouislider_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_focus_visible_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor/focus-visible.min.js */ "./src/js/vendor/focus-visible.min.js");
/* harmony import */ var _vendor_focus_visible_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendor_graph_modal_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor/graph-modal.min.js */ "./src/js/vendor/graph-modal.min.js");
/* harmony import */ var _vendor_graph_modal_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendor_graph_modal_min_js__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/components/faq.js":
/*!**********************************!*\
  !*** ./src/js/components/faq.js ***!
  \**********************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.faq-accordion');
  accordions.forEach(el => {
    el.addEventListener('click', e => {
      const self = e.currentTarget;
      const control = self.querySelector('.faq-accordion__control');
      const content = self.querySelector('.faq-accordion__content');
      self.classList.toggle('open');

      // если открыт аккордеон
      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
});

/***/ }),

/***/ "./src/js/components/map.js":
/*!**********************************!*\
  !*** ./src/js/components/map.js ***!
  \**********************************/
/***/ (() => {

ymaps.ready(init);
function init() {
  // Создание карты.
  const myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76, 37.64],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 7
  });
}

/***/ }),

/***/ "./src/js/components/products.js":
/*!***************************************!*\
  !*** ./src/js/components/products.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graph_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graph-modal */ "./node_modules/graph-modal/src/graph-modal.js");

const catalogList = document.querySelector('.catalog-list');
const catalogMore = document.querySelector('.catalog__more');
let prodQuantity = 5;
let dataLength = null;
const normalPrice = str => {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};
if (catalogList) {
  const loadProducts = function () {
    let quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
    fetch('../data/images/data.json').then(response => {
      return response.json(); //ф-я преобразует json в js
    }).then(data => {
      console.log(data);
      dataLength = data.length;
      catalogList.innerHTML = ''; //очистим все перед показом

      for (let i = 0; i < dataLength; i++) {
        if (i < quantity) {
          let item = data[i];
          console.log(item);
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


            `;
        }
      }
    }).then(() => {
      const productTitle = document.querySelectorAll('div.product__title');
      productTitle.forEach(el => {
        $clamp(productTitle, {
          clamp: '22px'
        });
      });
      const modal = new graph_modal__WEBPACK_IMPORTED_MODULE_0__["default"]();
    });
  };
  loadProducts(prodQuantity);
  catalogMore.addEventListener('click', e => {
    prodQuantity = prodQuantity + 3;
    loadProducts(prodQuantity);
    if (prodQuantity => dataLength) {
      catalogMore.style.display = 'block';
    }
  });
}

/***/ }),

/***/ "./src/js/components/quiz.js":
/*!***********************************!*\
  !*** ./src/js/components/quiz.js ***!
  \***********************************/
/***/ (() => {

const quizData = [{
  number: 1,
  title: "Какой тип кроссовок рассматриваете?",
  answer_alias: "type",
  answers: [{
    answer_title: "кеды",
    type: "checkbox"
  }, {
    answer_title: "кеды",
    type: "checkbox"
  }, {
    answer_title: "кеды",
    type: "checkbox"
  }, {
    answer_title: "кеды",
    type: "checkbox"
  }, {
    answer_title: "кеды",
    type: "checkbox"
  }, {
    answer_title: "кеды",
    type: "checkbox"
  }]
}, {
  number: 2,
  title: "Какой размер вам подойдет?",
  answer_alias: "great",
  answers: [{
    answer_title: "Менее 36",
    type: "checkbox"
  }, {
    answer_title: "36-38",
    type: "checkbox"
  }, {
    answer_title: "38-40",
    type: "checkbox"
  }, {
    answer_title: "42-44",
    type: "checkbox"
  }, {
    answer_title: "45 и больше",
    type: "checkbox"
  }]
}, {
  number: 3,
  title: "Уточните какие-либо моменты",
  answer_alias: "message",
  answers: [{
    answer_title: "Введите сообщение",
    type: "textarea"
  }]
}];
const quizTemplate = function () {
  let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let dataLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let options = arguments.length > 2 ? arguments[2] : undefined;
  const {
    number,
    title
  } = data;
  const {
    nextBtnText
  } = options;
  const answers = data.answers.map(item => {
    if (item.type === 'checkbox') {
      return `
      <li class="quiz-question__item">
      <img src="img/sneaker.jpg" alt="">
      <label class="custom-checkbox quiz-question__label">
      <input type="${item.type}" class="custom-checkbox__field quiz-question__answer" data-valid="false"  name="${data.answer_alias}" ${item.type == 'text' ? 'placeholder="Введите ваш вариант"' : ''} value="${item.type !== 'text' ? item.answer_title : ''}">
      <span class="custom-checkbox__content">${item.answer_title}</span>
    </label>

        </li>
      `;
    } else if (item.type === 'textarea') {
      return `
<label class="quiz-question__label">
<textarea placeholder="${item.answer_title}" class="quiz-question__message"></textarea>

</label>
`;
    } else {
      return `
			<label class="quiz-question__label">
				<input type="${item.type}" data-valid="false" class="quiz-question__answer" name="${data.answer_alias}" ${item.type == 'text' ? 'placeholder="Введите ваш вариант"' : ''} value="${item.type !== 'text' ? item.answer_title : ''}">
				<span>${item.answer_title}</span>
			</label>
		`;
    }
  });
  return `


			<div class="quiz-question">
				<h3 class="quiz-question__title">${title}</h3>
				<ul class="quiz-question__answers list-reset">
					${answers.join('')}
				</ul>
        <div class="quiz-bottom">
        <div class="quiz-question__count">${number} из ${dataLength}</div>
        <button type="button" class="btn btn-reset btn--thirdly quiz-question__btn" data-next-btn>${nextBtnText}</button>
        </div>

			</div>

	`;
};
class Quiz {
  constructor(selector, data, options) {
    this.$el = document.querySelector(selector);
    this.options = options;
    this.data = data;
    this.counter = 0;
    this.dataLength = this.data.length;
    this.resultArray = [];
    this.tmp = {};
    this.init();
    this.events();
  }
  init() {
    console.log('init!');
    this.$el.innerHTML = quizTemplate(this.data[this.counter], this.dataLength, this.options);
  }
  nextQuestion() {
    console.log('next question!');
    if (this.valid()) {
      if (this.counter + 1 < this.dataLength) {
        this.counter++;
        this.$el.innerHTML = quizTemplate(this.data[this.counter], this.dataLength, this.options);
        if (this.counter + 1 == this.dataLength) {
          //this.$el.querySelector('.quiz-bottom').insertAdjacentHTML('beforeend', `<button type="button" data-send>${this.options.sendBtnText}</button>`)
          //this.$el.querySelector('[data-next-btn]').remove();
        }
      } else {
        console.log('А все! конец!');
        document.querySelector('.quiz-questions').style.display = 'none';
        document.querySelector('.asd').style.display = 'block';
      }
    } else {
      console.log('Не валидно!');
    }
  }
  events() {
    console.log('events!');
    this.$el.addEventListener('click', e => {
      if (e.target == document.querySelector('[data-next-btn]')) {
        this.addToSend();
        this.nextQuestion();
      }
      if (e.target == document.querySelector('[data-send]')) {
        this.send();
      }
    });
    this.$el.addEventListener('change', e => {
      if (e.target.tagName == 'INPUT') {
        if (e.target.type !== 'checkbox' && e.target.type !== 'radio') {
          let elements = this.$el.querySelectorAll('input');
          elements.forEach(el => {
            el.checked = false;
          });
        }
        this.tmp = this.serialize(this.$el);
      }
    });
  }
  valid() {
    let isValid = false;
    let textarea = this.$el.querySelector('textarea');
    if (textarea) {
      if (textarea.value.length > 0) {
        isValid = true;
        return isValid;
      }
    }
    let elements = this.$el.querySelectorAll('input');
    elements.forEach(el => {
      switch (el.nodeName) {
        case 'INPUT':
          switch (el.type) {
            case 'text':
              if (el.value) {
                isValid = true;
              } else {
                el.classList.add('error');
              }
            case 'checkbox':
              if (el.checked) {
                isValid = true;
              } else {
                el.classList.add('error');
              }
            case 'radio':
              if (el.checked) {
                isValid = true;
              } else {
                el.classList.add('error');
              }
          }
      }
    });
    return isValid;
  }
  addToSend() {
    this.resultArray.push(this.tmp);
  }
  send() {
    if (this.valid()) {
      const formData = new FormData();
      for (let item of this.resultArray) {
        for (let obj in item) {
          formData.append(obj, item[obj].substring(0, item[obj].length - 1));
        }
      }
      const response = fetch("mail.php", {
        method: 'POST',
        body: formData
      });
    }
  }
  serialize(form) {
    let field,
      s = {};
    let valueString = '';
    if (typeof form == 'object' && form.nodeName == "FORM") {
      let len = form.elements.length;
      for (let i = 0; i < len; i++) {
        field = form.elements[i];
        if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
          if (field.type == 'select-multiple') {
            for (j = form.elements[i].options.length - 1; j >= 0; j--) {
              if (field.options[j].selected) s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
            }
          } else if (field.type != 'checkbox' && field.type != 'radio' && field.value || field.checked) {
            valueString += field.value + ',';
            s[field.name] = valueString;
          }
        }
      }
    }
    return s;
  }
}
window.quiz = new Quiz('.quiz-form .quiz-questions', quizData, {
  nextBtnText: "Следующий шаг",
  sendBtnText: "Отправить"
});

/***/ }),

/***/ "./src/js/components/range-slider.js":
/*!*******************************************!*\
  !*** ./src/js/components/range-slider.js ***!
  \*******************************************/
/***/ (() => {

const rangeSlider = document.getElementById('.range-slider');
if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [500, 999999],
    connect: true,
    step: 1,
    range: {
      'min': [500],
      'max': [999999]
    }
  });
  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];
  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });
  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    console.log(arr);
    rangeSlider.noUiSlider.set(arr);
  };
  inputs.forEach((el, index) => {
    el.addEventListener('change', e => {
      console.log(index);
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}

/***/ }),

/***/ "./src/js/functions/mobile-check.js":
/*!******************************************!*\
  !*** ./src/js/functions/mobile-check.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileCheck": () => (/* binding */ mobileCheck)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--android');
    return "Android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--ios');
    return "iOS";
  }
  return "unknown";
};

/***/ }),

/***/ "./src/js/vendor/clamp.min.js":
/*!************************************!*\
  !*** ./src/js/vendor/clamp.min.js ***!
  \************************************/
/***/ (() => {

/*!
* Clamp.js 0.5.1
*
* Copyright 2011-2013, Joseph Schmitt http://joe.sh
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*/
(function () {
  window.$clamp = function (c, d) {
    function s(a, b) {
      n.getComputedStyle || (n.getComputedStyle = function (a, b) {
        this.el = a;
        this.getPropertyValue = function (b) {
          var c = /(\-([a-z]){1})/g;
          "float" == b && (b = "styleFloat");
          c.test(b) && (b = b.replace(c, function (a, b, c) {
            return c.toUpperCase();
          }));
          return a.currentStyle && a.currentStyle[b] ? a.currentStyle[b] : null;
        };
        return this;
      });
      return n.getComputedStyle(a, null).getPropertyValue(b);
    }
    function t(a) {
      a = a || c.clientHeight;
      var b = u(c);
      return Math.max(Math.floor(a / b), 0);
    }
    function x(a) {
      return u(c) * a;
    }
    function u(a) {
      var b = s(a, "line-height");
      "normal" == b && (b = 1.2 * parseInt(s(a, "font-size")));
      return parseInt(b);
    }
    function l(a) {
      if (a.lastChild.children && 0 < a.lastChild.children.length) return l(Array.prototype.slice.call(a.children).pop());
      if (a.lastChild && a.lastChild.nodeValue && "" != a.lastChild.nodeValue && a.lastChild.nodeValue != b.truncationChar) return a.lastChild;
      a.lastChild.parentNode.removeChild(a.lastChild);
      return l(c);
    }
    function p(a, d) {
      if (d) {
        var e = a.nodeValue.replace(b.truncationChar, "");
        f || (h = 0 < k.length ? k.shift() : "", f = e.split(h));
        1 < f.length ? (q = f.pop(), r(a, f.join(h))) : f = null;
        m && (a.nodeValue = a.nodeValue.replace(b.truncationChar, ""), c.innerHTML = a.nodeValue + " " + m.innerHTML + b.truncationChar);
        if (f) {
          if (c.clientHeight <= d) if (0 <= k.length && "" != h) r(a, f.join(h) + h + q), f = null;else return c.innerHTML;
        } else "" == h && (r(a, ""), a = l(c), k = b.splitOnChars.slice(0), h = k[0], q = f = null);
        if (b.animate) setTimeout(function () {
          p(a, d);
        }, !0 === b.animate ? 10 : b.animate);else return p(a, d);
      }
    }
    function r(a, c) {
      a.nodeValue = c + b.truncationChar;
    }
    d = d || {};
    var n = window,
      b = {
        clamp: d.clamp || 2,
        useNativeClamp: "undefined" != typeof d.useNativeClamp ? d.useNativeClamp : !0,
        splitOnChars: d.splitOnChars || [".", "-", "\u2013", "\u2014", " "],
        animate: d.animate || !1,
        truncationChar: d.truncationChar || "\u2026",
        truncationHTML: d.truncationHTML
      },
      e = c.style,
      y = c.innerHTML,
      z = "undefined" != typeof c.style.webkitLineClamp,
      g = b.clamp,
      v = g.indexOf && (-1 < g.indexOf("px") || -1 < g.indexOf("em")),
      m;
    b.truncationHTML && (m = document.createElement("span"), m.innerHTML = b.truncationHTML);
    var k = b.splitOnChars.slice(0),
      h = k[0],
      f,
      q;
    "auto" == g ? g = t() : v && (g = t(parseInt(g)));
    var w;
    z && b.useNativeClamp ? (e.overflow = "hidden", e.textOverflow = "ellipsis", e.webkitBoxOrient = "vertical", e.display = "-webkit-box", e.webkitLineClamp = g, v && (e.height = b.clamp + "px")) : (e = x(g), e <= c.clientHeight && (w = p(l(c), e)));
    return {
      original: y,
      clamped: w
    };
  };
})();

/***/ }),

/***/ "./src/js/vendor/focus-visible.min.js":
/*!********************************************!*\
  !*** ./src/js/vendor/focus-visible.min.js ***!
  \********************************************/
/***/ (() => {

!function (e, t) {
   true ? t() : 0;
}(0, function () {
  "use strict";

  function e(e) {
    var t = !0,
      n = !1,
      o = null,
      d = {
        text: !0,
        search: !0,
        url: !0,
        tel: !0,
        email: !0,
        password: !0,
        number: !0,
        date: !0,
        month: !0,
        week: !0,
        time: !0,
        datetime: !0,
        "datetime-local": !0
      };
    function i(e) {
      return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList);
    }
    function s(e) {
      e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""));
    }
    function u(e) {
      t = !1;
    }
    function a() {
      document.addEventListener("mousemove", c), document.addEventListener("mousedown", c), document.addEventListener("mouseup", c), document.addEventListener("pointermove", c), document.addEventListener("pointerdown", c), document.addEventListener("pointerup", c), document.addEventListener("touchmove", c), document.addEventListener("touchstart", c), document.addEventListener("touchend", c);
    }
    function c(e) {
      e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("mouseup", c), document.removeEventListener("pointermove", c), document.removeEventListener("pointerdown", c), document.removeEventListener("pointerup", c), document.removeEventListener("touchmove", c), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", c));
    }
    document.addEventListener("keydown", function (n) {
      n.metaKey || n.altKey || n.ctrlKey || (i(e.activeElement) && s(e.activeElement), t = !0);
    }, !0), document.addEventListener("mousedown", u, !0), document.addEventListener("pointerdown", u, !0), document.addEventListener("touchstart", u, !0), document.addEventListener("visibilitychange", function (e) {
      "hidden" === document.visibilityState && (n && (t = !0), a());
    }, !0), a(), e.addEventListener("focus", function (e) {
      var n, o, u;
      i(e.target) && (t || (n = e.target, o = n.type, "INPUT" === (u = n.tagName) && d[o] && !n.readOnly || "TEXTAREA" === u && !n.readOnly || n.isContentEditable)) && s(e.target);
    }, !0), e.addEventListener("blur", function (e) {
      var t;
      i(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (n = !0, window.clearTimeout(o), o = window.setTimeout(function () {
        n = !1;
      }, 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")));
    }, !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""));
  }
  if ("undefined" != typeof window && "undefined" != typeof document) {
    var t;
    window.applyFocusVisiblePolyfill = e;
    try {
      t = new CustomEvent("focus-visible-polyfill-ready");
    } catch (e) {
      (t = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {});
    }
    window.dispatchEvent(t);
  }
  "undefined" != typeof document && e(document);
});

/***/ }),

/***/ "./src/js/vendor/graph-modal.min.js":
/*!******************************************!*\
  !*** ./src/js/vendor/graph-modal.min.js ***!
  \******************************************/
/***/ (() => {

!function (t) {
  var e = {};
  function o(n) {
    if (e[n]) return e[n].exports;
    var i = e[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(i.exports, i, i.exports, o), i.l = !0, i.exports;
  }
  o.m = t, o.c = e, o.d = function (t, e, n) {
    o.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    });
  }, o.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, o.t = function (t, e) {
    if (1 & e && (t = o(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (o.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var i in t) o.d(n, i, function (e) {
      return t[e];
    }.bind(null, i));
    return n;
  }, o.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return o.d(e, "a", e), e;
  }, o.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, o.p = "", o(o.s = 1);
}([function (t, e, o) {
  "use strict";

  o.d(e, "a", function () {
    return n;
  });
  class n {
    constructor(t) {
      this.options = Object.assign({
        isOpen: () => {},
        isClose: () => {}
      }, t), this.modal = document.querySelector(".graph-modal"), this.speed = 300, this.animation = "fade", this._reOpen = !1, this._nextContainer = !1, this.modalContainer = !1, this.isOpen = !1, this.previousActiveElement = !1, this._focusElements = ["a[href]", "input", "select", "textarea", "button", "iframe", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], this._fixBlocks = document.querySelectorAll(".fix-block"), this.events();
    }
    events() {
      this.modal && (document.addEventListener("click", function (t) {
        const e = t.target.closest("[data-graph-path]");
        if (e) {
          let t = e.dataset.graphPath,
            o = e.dataset.graphAnimation,
            n = e.dataset.graphSpeed;
          return this.animation = o || "fade", this.speed = n ? parseInt(n) : 300, this._nextContainer = document.querySelector(`[data-graph-target="${t}"]`), void this.open();
        }
        t.target.closest(".js-modal-close") && this.close();
      }.bind(this)), window.addEventListener("keydown", function (t) {
        27 == t.keyCode && this.isOpen && this.close(), 9 == t.which && this.isOpen && this.focusCatch(t);
      }.bind(this)), document.addEventListener("click", function (t) {
        t.target.classList.contains("graph-modal") && t.target.classList.contains("is-open") && this.close();
      }.bind(this)));
    }
    open(t) {
      if (this.previousActiveElement = document.activeElement, this.isOpen) return this.reOpen = !0, void this.close();
      this.modalContainer = this._nextContainer, t && (this.modalContainer = document.querySelector(`[data-graph-target="${t}"]`)), this.modalContainer.scrollTo(0, 0), this.modal.style.setProperty("--transition-time", this.speed / 1e3 + "s"), this.modal.classList.add("is-open"), document.body.style.scrollBehavior = "auto", document.documentElement.style.scrollBehavior = "auto", this.disableScroll(), this.modalContainer.classList.add("graph-modal-open"), this.modalContainer.classList.add(this.animation), setTimeout(() => {
        this.options.isOpen(this), this.modalContainer.classList.add("animate-open"), this.isOpen = !0, this.focusTrap();
      }, this.speed);
    }
    close() {
      this.modalContainer && (this.modalContainer.classList.remove("animate-open"), this.modalContainer.classList.remove(this.animation), this.modal.classList.remove("is-open"), this.modalContainer.classList.remove("graph-modal-open"), this.enableScroll(), document.body.style.scrollBehavior = "auto", document.documentElement.style.scrollBehavior = "auto", this.options.isClose(this), this.isOpen = !1, this.focusTrap(), this.reOpen && (this.reOpen = !1, this.open()));
    }
    focusCatch(t) {
      const e = this.modalContainer.querySelectorAll(this._focusElements),
        o = Array.prototype.slice.call(e),
        n = o.indexOf(document.activeElement);
      t.shiftKey && 0 === n && (o[o.length - 1].focus(), t.preventDefault()), t.shiftKey || n !== o.length - 1 || (o[0].focus(), t.preventDefault());
    }
    focusTrap() {
      const t = this.modalContainer.querySelectorAll(this._focusElements);
      this.isOpen ? t.length && t[0].focus() : this.previousActiveElement.focus();
    }
    disableScroll() {
      let t = window.scrollY;
      this.lockPadding(), document.body.classList.add("disable-scroll"), document.body.dataset.position = t, document.body.style.top = -t + "px";
    }
    enableScroll() {
      let t = parseInt(document.body.dataset.position, 10);
      this.unlockPadding(), document.body.style.top = "auto", document.body.classList.remove("disable-scroll"), window.scrollTo({
        top: t,
        left: 0
      }), document.body.removeAttribute("data-position");
    }
    lockPadding() {
      let t = window.innerWidth - document.body.offsetWidth + "px";
      this._fixBlocks.forEach(e => {
        e.style.paddingRight = t;
      }), document.body.style.paddingRight = t;
    }
    unlockPadding() {
      this._fixBlocks.forEach(t => {
        t.style.paddingRight = "0px";
      }), document.body.style.paddingRight = "0px";
    }
  }
}, function (t, e, o) {
  "use strict";

  o.r(e), function (t) {
    var e = o(0);
    o(3), o(4);
    t.GraphModal = e.a;
  }.call(this, o(2));
}, function (t, e) {
  var o;
  o = function () {
    return this;
  }();
  try {
    o = o || new Function("return this")();
  } catch (t) {
    "object" == typeof window && (o = window);
  }
  t.exports = o;
}, function (t, e) {
  "undefined" != typeof Element && (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (t) {
    var e = this;
    do {
      if (e.matches(t)) return e;
      e = e.parentElement || e.parentNode;
    } while (null !== e && 1 === e.nodeType);
    return null;
  }));
}, function (t, e, o) {}]);

/***/ }),

/***/ "./src/js/vendor/nouislider.min.js":
/*!*****************************************!*\
  !*** ./src/js/vendor/nouislider.min.js ***!
  \*****************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 14.7.0 - 4/6/2021 */
!function (t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function () {
  "use strict";

  var lt = "14.7.0";
  function ut(t) {
    t.parentElement.removeChild(t);
  }
  function ct(t) {
    return null != t;
  }
  function pt(t) {
    t.preventDefault();
  }
  function o(t) {
    return "number" == typeof t && !isNaN(t) && isFinite(t);
  }
  function ft(t, e, r) {
    0 < r && (mt(t, e), setTimeout(function () {
      gt(t, e);
    }, r));
  }
  function dt(t) {
    return Math.max(Math.min(t, 100), 0);
  }
  function ht(t) {
    return Array.isArray(t) ? t : [t];
  }
  function e(t) {
    var e = (t = String(t)).split(".");
    return 1 < e.length ? e[1].length : 0;
  }
  function mt(t, e) {
    t.classList && !/\s/.test(e) ? t.classList.add(e) : t.className += " " + e;
  }
  function gt(t, e) {
    t.classList && !/\s/.test(e) ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
  }
  function vt(t) {
    var e = void 0 !== window.pageXOffset,
      r = "CSS1Compat" === (t.compatMode || "");
    return {
      x: e ? window.pageXOffset : r ? t.documentElement.scrollLeft : t.body.scrollLeft,
      y: e ? window.pageYOffset : r ? t.documentElement.scrollTop : t.body.scrollTop
    };
  }
  function c(t, e) {
    return 100 / (e - t);
  }
  function p(t, e, r) {
    return 100 * e / (t[r + 1] - t[r]);
  }
  function f(t, e) {
    for (var r = 1; t >= e[r];) r += 1;
    return r;
  }
  function r(t, e, r) {
    if (r >= t.slice(-1)[0]) return 100;
    var n,
      i,
      o = f(r, t),
      s = t[o - 1],
      a = t[o],
      l = e[o - 1],
      u = e[o];
    return l + (i = r, p(n = [s, a], n[0] < 0 ? i + Math.abs(n[0]) : i - n[0], 0) / c(l, u));
  }
  function n(t, e, r, n) {
    if (100 === n) return n;
    var i,
      o,
      s = f(n, t),
      a = t[s - 1],
      l = t[s];
    return r ? (l - a) / 2 < n - a ? l : a : e[s - 1] ? t[s - 1] + (i = n - t[s - 1], o = e[s - 1], Math.round(i / o) * o) : n;
  }
  function s(t, e, r) {
    var n;
    if ("number" == typeof e && (e = [e]), !Array.isArray(e)) throw new Error("noUiSlider (" + lt + "): 'range' contains invalid value.");
    if (!o(n = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t)) || !o(e[0])) throw new Error("noUiSlider (" + lt + "): 'range' value isn't numeric.");
    r.xPct.push(n), r.xVal.push(e[0]), n ? r.xSteps.push(!isNaN(e[1]) && e[1]) : isNaN(e[1]) || (r.xSteps[0] = e[1]), r.xHighestCompleteStep.push(0);
  }
  function a(t, e, r) {
    if (e) if (r.xVal[t] !== r.xVal[t + 1]) {
      r.xSteps[t] = p([r.xVal[t], r.xVal[t + 1]], e, 0) / c(r.xPct[t], r.xPct[t + 1]);
      var n = (r.xVal[t + 1] - r.xVal[t]) / r.xNumSteps[t],
        i = Math.ceil(Number(n.toFixed(3)) - 1),
        o = r.xVal[t] + r.xNumSteps[t] * i;
      r.xHighestCompleteStep[t] = o;
    } else r.xSteps[t] = r.xHighestCompleteStep[t] = r.xVal[t];
  }
  function i(t, e, r) {
    var n;
    this.xPct = [], this.xVal = [], this.xSteps = [r || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = e;
    var i = [];
    for (n in t) t.hasOwnProperty(n) && i.push([t[n], n]);
    for (i.length && "object" == typeof i[0][0] ? i.sort(function (t, e) {
      return t[0][0] - e[0][0];
    }) : i.sort(function (t, e) {
      return t[0] - e[0];
    }), n = 0; n < i.length; n++) s(i[n][1], i[n][0], this);
    for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) a(n, this.xNumSteps[n], this);
  }
  i.prototype.getDistance = function (t) {
    var e,
      r = [];
    for (e = 0; e < this.xNumSteps.length - 1; e++) {
      var n = this.xNumSteps[e];
      if (n && t / n % 1 != 0) throw new Error("noUiSlider (" + lt + "): 'limit', 'margin' and 'padding' of " + this.xPct[e] + "% range must be divisible by step.");
      r[e] = p(this.xVal, t, e);
    }
    return r;
  }, i.prototype.getAbsoluteDistance = function (t, e, r) {
    var n,
      i = 0;
    if (t < this.xPct[this.xPct.length - 1]) for (; t > this.xPct[i + 1];) i++;else t === this.xPct[this.xPct.length - 1] && (i = this.xPct.length - 2);
    r || t !== this.xPct[i + 1] || i++;
    var o = 1,
      s = e[i],
      a = 0,
      l = 0,
      u = 0,
      c = 0;
    for (n = r ? (t - this.xPct[i]) / (this.xPct[i + 1] - this.xPct[i]) : (this.xPct[i + 1] - t) / (this.xPct[i + 1] - this.xPct[i]); 0 < s;) a = this.xPct[i + 1 + c] - this.xPct[i + c], 100 < e[i + c] * o + 100 - 100 * n ? (l = a * n, o = (s - 100 * n) / e[i + c], n = 1) : (l = e[i + c] * a / 100 * o, o = 0), r ? (u -= l, 1 <= this.xPct.length + c && c--) : (u += l, 1 <= this.xPct.length - c && c++), s = e[i + c] * o;
    return t + u;
  }, i.prototype.toStepping = function (t) {
    return t = r(this.xVal, this.xPct, t);
  }, i.prototype.fromStepping = function (t) {
    return function (t, e, r) {
      if (100 <= r) return t.slice(-1)[0];
      var n,
        i = f(r, e),
        o = t[i - 1],
        s = t[i],
        a = e[i - 1],
        l = e[i];
      return n = [o, s], (r - a) * c(a, l) * (n[1] - n[0]) / 100 + n[0];
    }(this.xVal, this.xPct, t);
  }, i.prototype.getStep = function (t) {
    return t = n(this.xPct, this.xSteps, this.snap, t);
  }, i.prototype.getDefaultStep = function (t, e, r) {
    var n = f(t, this.xPct);
    return (100 === t || e && t === this.xPct[n - 1]) && (n = Math.max(n - 1, 1)), (this.xVal[n] - this.xVal[n - 1]) / r;
  }, i.prototype.getNearbySteps = function (t) {
    var e = f(t, this.xPct);
    return {
      stepBefore: {
        startValue: this.xVal[e - 2],
        step: this.xNumSteps[e - 2],
        highestStep: this.xHighestCompleteStep[e - 2]
      },
      thisStep: {
        startValue: this.xVal[e - 1],
        step: this.xNumSteps[e - 1],
        highestStep: this.xHighestCompleteStep[e - 1]
      },
      stepAfter: {
        startValue: this.xVal[e],
        step: this.xNumSteps[e],
        highestStep: this.xHighestCompleteStep[e]
      }
    };
  }, i.prototype.countStepDecimals = function () {
    var t = this.xNumSteps.map(e);
    return Math.max.apply(null, t);
  }, i.prototype.convert = function (t) {
    return this.getStep(this.toStepping(t));
  };
  var l = {
      to: function (t) {
        return void 0 !== t && t.toFixed(2);
      },
      from: Number
    },
    u = {
      target: "target",
      base: "base",
      origin: "origin",
      handle: "handle",
      handleLower: "handle-lower",
      handleUpper: "handle-upper",
      touchArea: "touch-area",
      horizontal: "horizontal",
      vertical: "vertical",
      background: "background",
      connect: "connect",
      connects: "connects",
      ltr: "ltr",
      rtl: "rtl",
      textDirectionLtr: "txt-dir-ltr",
      textDirectionRtl: "txt-dir-rtl",
      draggable: "draggable",
      drag: "state-drag",
      tap: "state-tap",
      active: "active",
      tooltip: "tooltip",
      pips: "pips",
      pipsHorizontal: "pips-horizontal",
      pipsVertical: "pips-vertical",
      marker: "marker",
      markerHorizontal: "marker-horizontal",
      markerVertical: "marker-vertical",
      markerNormal: "marker-normal",
      markerLarge: "marker-large",
      markerSub: "marker-sub",
      value: "value",
      valueHorizontal: "value-horizontal",
      valueVertical: "value-vertical",
      valueNormal: "value-normal",
      valueLarge: "value-large",
      valueSub: "value-sub"
    },
    bt = {
      tooltips: ".__tooltips",
      aria: ".__aria"
    };
  function d(t) {
    if ("object" == typeof (e = t) && "function" == typeof e.to && "function" == typeof e.from) return !0;
    var e;
    throw new Error("noUiSlider (" + lt + "): 'format' requires 'to' and 'from' methods.");
  }
  function h(t, e) {
    if (!o(e)) throw new Error("noUiSlider (" + lt + "): 'step' is not numeric.");
    t.singleStep = e;
  }
  function m(t, e) {
    if (!o(e)) throw new Error("noUiSlider (" + lt + "): 'keyboardPageMultiplier' is not numeric.");
    t.keyboardPageMultiplier = e;
  }
  function g(t, e) {
    if (!o(e)) throw new Error("noUiSlider (" + lt + "): 'keyboardDefaultStep' is not numeric.");
    t.keyboardDefaultStep = e;
  }
  function v(t, e) {
    if ("object" != typeof e || Array.isArray(e)) throw new Error("noUiSlider (" + lt + "): 'range' is not an object.");
    if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider (" + lt + "): Missing 'min' or 'max' in 'range'.");
    if (e.min === e.max) throw new Error("noUiSlider (" + lt + "): 'range' 'min' and 'max' cannot be equal.");
    t.spectrum = new i(e, t.snap, t.singleStep);
  }
  function b(t, e) {
    if (e = ht(e), !Array.isArray(e) || !e.length) throw new Error("noUiSlider (" + lt + "): 'start' option is incorrect.");
    t.handles = e.length, t.start = e;
  }
  function x(t, e) {
    if ("boolean" != typeof (t.snap = e)) throw new Error("noUiSlider (" + lt + "): 'snap' option must be a boolean.");
  }
  function S(t, e) {
    if ("boolean" != typeof (t.animate = e)) throw new Error("noUiSlider (" + lt + "): 'animate' option must be a boolean.");
  }
  function w(t, e) {
    if ("number" != typeof (t.animationDuration = e)) throw new Error("noUiSlider (" + lt + "): 'animationDuration' option must be a number.");
  }
  function y(t, e) {
    var r,
      n = [!1];
    if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]), !0 === e || !1 === e) {
      for (r = 1; r < t.handles; r++) n.push(e);
      n.push(!1);
    } else {
      if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error("noUiSlider (" + lt + "): 'connect' option doesn't match handle count.");
      n = e;
    }
    t.connect = n;
  }
  function E(t, e) {
    switch (e) {
      case "horizontal":
        t.ort = 0;
        break;
      case "vertical":
        t.ort = 1;
        break;
      default:
        throw new Error("noUiSlider (" + lt + "): 'orientation' option is invalid.");
    }
  }
  function C(t, e) {
    if (!o(e)) throw new Error("noUiSlider (" + lt + "): 'margin' option must be numeric.");
    0 !== e && (t.margin = t.spectrum.getDistance(e));
  }
  function P(t, e) {
    if (!o(e)) throw new Error("noUiSlider (" + lt + "): 'limit' option must be numeric.");
    if (t.limit = t.spectrum.getDistance(e), !t.limit || t.handles < 2) throw new Error("noUiSlider (" + lt + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
  }
  function N(t, e) {
    var r;
    if (!o(e) && !Array.isArray(e)) throw new Error("noUiSlider (" + lt + "): 'padding' option must be numeric or array of exactly 2 numbers.");
    if (Array.isArray(e) && 2 !== e.length && !o(e[0]) && !o(e[1])) throw new Error("noUiSlider (" + lt + "): 'padding' option must be numeric or array of exactly 2 numbers.");
    if (0 !== e) {
      for (Array.isArray(e) || (e = [e, e]), t.padding = [t.spectrum.getDistance(e[0]), t.spectrum.getDistance(e[1])], r = 0; r < t.spectrum.xNumSteps.length - 1; r++) if (t.padding[0][r] < 0 || t.padding[1][r] < 0) throw new Error("noUiSlider (" + lt + "): 'padding' option must be a positive number(s).");
      var n = e[0] + e[1],
        i = t.spectrum.xVal[0];
      if (1 < n / (t.spectrum.xVal[t.spectrum.xVal.length - 1] - i)) throw new Error("noUiSlider (" + lt + "): 'padding' option must not exceed 100% of the range.");
    }
  }
  function k(t, e) {
    switch (e) {
      case "ltr":
        t.dir = 0;
        break;
      case "rtl":
        t.dir = 1;
        break;
      default:
        throw new Error("noUiSlider (" + lt + "): 'direction' option was not recognized.");
    }
  }
  function U(t, e) {
    if ("string" != typeof e) throw new Error("noUiSlider (" + lt + "): 'behaviour' must be a string containing options.");
    var r = 0 <= e.indexOf("tap"),
      n = 0 <= e.indexOf("drag"),
      i = 0 <= e.indexOf("fixed"),
      o = 0 <= e.indexOf("snap"),
      s = 0 <= e.indexOf("hover"),
      a = 0 <= e.indexOf("unconstrained");
    if (i) {
      if (2 !== t.handles) throw new Error("noUiSlider (" + lt + "): 'fixed' behaviour must be used with 2 handles");
      C(t, t.start[1] - t.start[0]);
    }
    if (a && (t.margin || t.limit)) throw new Error("noUiSlider (" + lt + "): 'unconstrained' behaviour cannot be used with margin or limit");
    t.events = {
      tap: r || o,
      drag: n,
      fixed: i,
      snap: o,
      hover: s,
      unconstrained: a
    };
  }
  function A(t, e) {
    if (!1 !== e) if (!0 === e) {
      t.tooltips = [];
      for (var r = 0; r < t.handles; r++) t.tooltips.push(!0);
    } else {
      if (t.tooltips = ht(e), t.tooltips.length !== t.handles) throw new Error("noUiSlider (" + lt + "): must pass a formatter for all handles.");
      t.tooltips.forEach(function (t) {
        if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to)) throw new Error("noUiSlider (" + lt + "): 'tooltips' must be passed a formatter or 'false'.");
      });
    }
  }
  function V(t, e) {
    d(t.ariaFormat = e);
  }
  function D(t, e) {
    d(t.format = e);
  }
  function M(t, e) {
    if ("boolean" != typeof (t.keyboardSupport = e)) throw new Error("noUiSlider (" + lt + "): 'keyboardSupport' option must be a boolean.");
  }
  function O(t, e) {
    t.documentElement = e;
  }
  function L(t, e) {
    if ("string" != typeof e && !1 !== e) throw new Error("noUiSlider (" + lt + "): 'cssPrefix' must be a string or `false`.");
    t.cssPrefix = e;
  }
  function z(t, e) {
    if ("object" != typeof e) throw new Error("noUiSlider (" + lt + "): 'cssClasses' must be an object.");
    if ("string" == typeof t.cssPrefix) for (var r in t.cssClasses = {}, e) e.hasOwnProperty(r) && (t.cssClasses[r] = t.cssPrefix + e[r]);else t.cssClasses = e;
  }
  function xt(e) {
    var r = {
        margin: 0,
        limit: 0,
        padding: 0,
        animate: !0,
        animationDuration: 300,
        ariaFormat: l,
        format: l
      },
      n = {
        step: {
          r: !1,
          t: h
        },
        keyboardPageMultiplier: {
          r: !1,
          t: m
        },
        keyboardDefaultStep: {
          r: !1,
          t: g
        },
        start: {
          r: !0,
          t: b
        },
        connect: {
          r: !0,
          t: y
        },
        direction: {
          r: !0,
          t: k
        },
        snap: {
          r: !1,
          t: x
        },
        animate: {
          r: !1,
          t: S
        },
        animationDuration: {
          r: !1,
          t: w
        },
        range: {
          r: !0,
          t: v
        },
        orientation: {
          r: !1,
          t: E
        },
        margin: {
          r: !1,
          t: C
        },
        limit: {
          r: !1,
          t: P
        },
        padding: {
          r: !1,
          t: N
        },
        behaviour: {
          r: !0,
          t: U
        },
        ariaFormat: {
          r: !1,
          t: V
        },
        format: {
          r: !1,
          t: D
        },
        tooltips: {
          r: !1,
          t: A
        },
        keyboardSupport: {
          r: !0,
          t: M
        },
        documentElement: {
          r: !1,
          t: O
        },
        cssPrefix: {
          r: !0,
          t: L
        },
        cssClasses: {
          r: !0,
          t: z
        }
      },
      i = {
        connect: !1,
        direction: "ltr",
        behaviour: "tap",
        orientation: "horizontal",
        keyboardSupport: !0,
        cssPrefix: "noUi-",
        cssClasses: u,
        keyboardPageMultiplier: 5,
        keyboardDefaultStep: 10
      };
    e.format && !e.ariaFormat && (e.ariaFormat = e.format), Object.keys(n).forEach(function (t) {
      if (!ct(e[t]) && void 0 === i[t]) {
        if (n[t].r) throw new Error("noUiSlider (" + lt + "): '" + t + "' is required.");
        return !0;
      }
      n[t].t(r, ct(e[t]) ? e[t] : i[t]);
    }), r.pips = e.pips;
    var t = document.createElement("div"),
      o = void 0 !== t.style.msTransform,
      s = void 0 !== t.style.transform;
    r.transformRule = s ? "transform" : o ? "msTransform" : "webkitTransform";
    return r.style = [["left", "top"], ["right", "bottom"]][r.dir][r.ort], r;
  }
  function H(t, b, o) {
    var l,
      u,
      s,
      c,
      i,
      a,
      e,
      p,
      f = window.navigator.pointerEnabled ? {
        start: "pointerdown",
        move: "pointermove",
        end: "pointerup"
      } : window.navigator.msPointerEnabled ? {
        start: "MSPointerDown",
        move: "MSPointerMove",
        end: "MSPointerUp"
      } : {
        start: "mousedown touchstart",
        move: "mousemove touchmove",
        end: "mouseup touchend"
      },
      d = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function () {
        var t = !1;
        try {
          var e = Object.defineProperty({}, "passive", {
            get: function () {
              t = !0;
            }
          });
          window.addEventListener("test", null, e);
        } catch (t) {}
        return t;
      }(),
      h = t,
      y = b.spectrum,
      x = [],
      S = [],
      m = [],
      g = 0,
      v = {},
      w = t.ownerDocument,
      E = b.documentElement || w.documentElement,
      C = w.body,
      P = -1,
      N = 0,
      k = 1,
      U = 2,
      A = "rtl" === w.dir || 1 === b.ort ? 0 : 100;
    function V(t, e) {
      var r = w.createElement("div");
      return e && mt(r, e), t.appendChild(r), r;
    }
    function D(t, e) {
      var r = V(t, b.cssClasses.origin),
        n = V(r, b.cssClasses.handle);
      return V(n, b.cssClasses.touchArea), n.setAttribute("data-handle", e), b.keyboardSupport && (n.setAttribute("tabindex", "0"), n.addEventListener("keydown", function (t) {
        return function (t, e) {
          if (O() || L(e)) return !1;
          var r = ["Left", "Right"],
            n = ["Down", "Up"],
            i = ["PageDown", "PageUp"],
            o = ["Home", "End"];
          b.dir && !b.ort ? r.reverse() : b.ort && !b.dir && (n.reverse(), i.reverse());
          var s,
            a = t.key.replace("Arrow", ""),
            l = a === i[0],
            u = a === i[1],
            c = a === n[0] || a === r[0] || l,
            p = a === n[1] || a === r[1] || u,
            f = a === o[0],
            d = a === o[1];
          if (!(c || p || f || d)) return !0;
          if (t.preventDefault(), p || c) {
            var h = b.keyboardPageMultiplier,
              m = c ? 0 : 1,
              g = at(e),
              v = g[m];
            if (null === v) return !1;
            !1 === v && (v = y.getDefaultStep(S[e], c, b.keyboardDefaultStep)), (u || l) && (v *= h), v = Math.max(v, 1e-7), v *= c ? -1 : 1, s = x[e] + v;
          } else s = d ? b.spectrum.xVal[b.spectrum.xVal.length - 1] : b.spectrum.xVal[0];
          return rt(e, y.toStepping(s), !0, !0), J("slide", e), J("update", e), J("change", e), J("set", e), !1;
        }(t, e);
      })), n.setAttribute("role", "slider"), n.setAttribute("aria-orientation", b.ort ? "vertical" : "horizontal"), 0 === e ? mt(n, b.cssClasses.handleLower) : e === b.handles - 1 && mt(n, b.cssClasses.handleUpper), r;
    }
    function M(t, e) {
      return !!e && V(t, b.cssClasses.connect);
    }
    function r(t, e) {
      return !!b.tooltips[e] && V(t.firstChild, b.cssClasses.tooltip);
    }
    function O() {
      return h.hasAttribute("disabled");
    }
    function L(t) {
      return u[t].hasAttribute("disabled");
    }
    function z() {
      i && (G("update" + bt.tooltips), i.forEach(function (t) {
        t && ut(t);
      }), i = null);
    }
    function H() {
      z(), i = u.map(r), $("update" + bt.tooltips, function (t, e, r) {
        if (i[e]) {
          var n = t[e];
          !0 !== b.tooltips[e] && (n = b.tooltips[e].to(r[e])), i[e].innerHTML = n;
        }
      });
    }
    function j(e, i, o) {
      var s = w.createElement("div"),
        a = [];
      a[N] = b.cssClasses.valueNormal, a[k] = b.cssClasses.valueLarge, a[U] = b.cssClasses.valueSub;
      var l = [];
      l[N] = b.cssClasses.markerNormal, l[k] = b.cssClasses.markerLarge, l[U] = b.cssClasses.markerSub;
      var u = [b.cssClasses.valueHorizontal, b.cssClasses.valueVertical],
        c = [b.cssClasses.markerHorizontal, b.cssClasses.markerVertical];
      function p(t, e) {
        var r = e === b.cssClasses.value,
          n = r ? a : l;
        return e + " " + (r ? u : c)[b.ort] + " " + n[t];
      }
      return mt(s, b.cssClasses.pips), mt(s, 0 === b.ort ? b.cssClasses.pipsHorizontal : b.cssClasses.pipsVertical), Object.keys(e).forEach(function (t) {
        !function (t, e, r) {
          if ((r = i ? i(e, r) : r) !== P) {
            var n = V(s, !1);
            n.className = p(r, b.cssClasses.marker), n.style[b.style] = t + "%", N < r && ((n = V(s, !1)).className = p(r, b.cssClasses.value), n.setAttribute("data-value", e), n.style[b.style] = t + "%", n.innerHTML = o.to(e));
          }
        }(t, e[t][0], e[t][1]);
      }), s;
    }
    function F() {
      c && (ut(c), c = null);
    }
    function R(t) {
      F();
      var m,
        g,
        v,
        b,
        e,
        r,
        x,
        S,
        w,
        n = t.mode,
        i = t.density || 1,
        o = t.filter || !1,
        s = function (t, e, r) {
          if ("range" === t || "steps" === t) return y.xVal;
          if ("count" === t) {
            if (e < 2) throw new Error("noUiSlider (" + lt + "): 'values' (>= 2) required for mode 'count'.");
            var n = e - 1,
              i = 100 / n;
            for (e = []; n--;) e[n] = n * i;
            e.push(100), t = "positions";
          }
          return "positions" === t ? e.map(function (t) {
            return y.fromStepping(r ? y.getStep(t) : t);
          }) : "values" === t ? r ? e.map(function (t) {
            return y.fromStepping(y.getStep(y.toStepping(t)));
          }) : e : void 0;
        }(n, t.values || !1, t.stepped || !1),
        a = (m = i, g = n, v = s, b = {}, e = y.xVal[0], r = y.xVal[y.xVal.length - 1], S = x = !1, w = 0, (v = v.slice().sort(function (t, e) {
          return t - e;
        }).filter(function (t) {
          return !this[t] && (this[t] = !0);
        }, {}))[0] !== e && (v.unshift(e), x = !0), v[v.length - 1] !== r && (v.push(r), S = !0), v.forEach(function (t, e) {
          var r,
            n,
            i,
            o,
            s,
            a,
            l,
            u,
            c,
            p,
            f = t,
            d = v[e + 1],
            h = "steps" === g;
          if (h && (r = y.xNumSteps[e]), r || (r = d - f), !1 !== f) for (void 0 === d && (d = f), r = Math.max(r, 1e-7), n = f; n <= d; n = (n + r).toFixed(7) / 1) {
            for (u = (s = (o = y.toStepping(n)) - w) / m, p = s / (c = Math.round(u)), i = 1; i <= c; i += 1) b[(a = w + i * p).toFixed(5)] = [y.fromStepping(a), 0];
            l = -1 < v.indexOf(n) ? k : h ? U : N, !e && x && n !== d && (l = 0), n === d && S || (b[o.toFixed(5)] = [n, l]), w = o;
          }
        }), b),
        l = t.format || {
          to: Math.round
        };
      return c = h.appendChild(j(a, o, l));
    }
    function T() {
      var t = l.getBoundingClientRect(),
        e = "offset" + ["Width", "Height"][b.ort];
      return 0 === b.ort ? t.width || l[e] : t.height || l[e];
    }
    function _(n, i, o, s) {
      var e = function (t) {
          return !!(t = function (t, e, r) {
            var n,
              i,
              o = 0 === t.type.indexOf("touch"),
              s = 0 === t.type.indexOf("mouse"),
              a = 0 === t.type.indexOf("pointer");
            0 === t.type.indexOf("MSPointer") && (a = !0);
            if ("mousedown" === t.type && !t.buttons && !t.touches) return !1;
            if (o) {
              var l = function (t) {
                return t.target === r || r.contains(t.target) || t.target.shadowRoot && t.target.shadowRoot.contains(r);
              };
              if ("touchstart" === t.type) {
                var u = Array.prototype.filter.call(t.touches, l);
                if (1 < u.length) return !1;
                n = u[0].pageX, i = u[0].pageY;
              } else {
                var c = Array.prototype.find.call(t.changedTouches, l);
                if (!c) return !1;
                n = c.pageX, i = c.pageY;
              }
            }
            e = e || vt(w), (s || a) && (n = t.clientX + e.x, i = t.clientY + e.y);
            return t.pageOffset = e, t.points = [n, i], t.cursor = s || a, t;
          }(t, s.pageOffset, s.target || i)) && !(O() && !s.doNotReject) && (e = h, r = b.cssClasses.tap, !((e.classList ? e.classList.contains(r) : new RegExp("\\b" + r + "\\b").test(e.className)) && !s.doNotReject) && !(n === f.start && void 0 !== t.buttons && 1 < t.buttons) && (!s.hover || !t.buttons) && (d || t.preventDefault(), t.calcPoint = t.points[b.ort], void o(t, s)));
          var e, r;
        },
        r = [];
      return n.split(" ").forEach(function (t) {
        i.addEventListener(t, e, !!d && {
          passive: !0
        }), r.push([t, e]);
      }), r;
    }
    function B(t) {
      var e,
        r,
        n,
        i,
        o,
        s,
        a = 100 * (t - (e = l, r = b.ort, n = e.getBoundingClientRect(), i = e.ownerDocument, o = i.documentElement, s = vt(i), /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (s.x = 0), r ? n.top + s.y - o.clientTop : n.left + s.x - o.clientLeft)) / T();
      return a = dt(a), b.dir ? 100 - a : a;
    }
    function q(t, e) {
      "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && Y(t, e);
    }
    function X(t, e) {
      if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return Y(t, e);
      var r = (b.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
      Z(0 < r, 100 * r / e.baseSize, e.locations, e.handleNumbers);
    }
    function Y(t, e) {
      e.handle && (gt(e.handle, b.cssClasses.active), g -= 1), e.listeners.forEach(function (t) {
        E.removeEventListener(t[0], t[1]);
      }), 0 === g && (gt(h, b.cssClasses.drag), et(), t.cursor && (C.style.cursor = "", C.removeEventListener("selectstart", pt))), e.handleNumbers.forEach(function (t) {
        J("change", t), J("set", t), J("end", t);
      });
    }
    function I(t, e) {
      if (e.handleNumbers.some(L)) return !1;
      var r;
      1 === e.handleNumbers.length && (r = u[e.handleNumbers[0]].children[0], g += 1, mt(r, b.cssClasses.active));
      t.stopPropagation();
      var n = [],
        i = _(f.move, E, X, {
          target: t.target,
          handle: r,
          listeners: n,
          startCalcPoint: t.calcPoint,
          baseSize: T(),
          pageOffset: t.pageOffset,
          handleNumbers: e.handleNumbers,
          buttonsProperty: t.buttons,
          locations: S.slice()
        }),
        o = _(f.end, E, Y, {
          target: t.target,
          handle: r,
          listeners: n,
          doNotReject: !0,
          handleNumbers: e.handleNumbers
        }),
        s = _("mouseout", E, q, {
          target: t.target,
          handle: r,
          listeners: n,
          doNotReject: !0,
          handleNumbers: e.handleNumbers
        });
      n.push.apply(n, i.concat(o, s)), t.cursor && (C.style.cursor = getComputedStyle(t.target).cursor, 1 < u.length && mt(h, b.cssClasses.drag), C.addEventListener("selectstart", pt, !1)), e.handleNumbers.forEach(function (t) {
        J("start", t);
      });
    }
    function n(t) {
      t.stopPropagation();
      var i,
        o,
        s,
        e = B(t.calcPoint),
        r = (i = e, s = !(o = 100), u.forEach(function (t, e) {
          if (!L(e)) {
            var r = S[e],
              n = Math.abs(r - i);
            (n < o || n <= o && r < i || 100 === n && 100 === o) && (s = e, o = n);
          }
        }), s);
      if (!1 === r) return !1;
      b.events.snap || ft(h, b.cssClasses.tap, b.animationDuration), rt(r, e, !0, !0), et(), J("slide", r, !0), J("update", r, !0), J("change", r, !0), J("set", r, !0), b.events.snap && I(t, {
        handleNumbers: [r]
      });
    }
    function W(t) {
      var e = B(t.calcPoint),
        r = y.getStep(e),
        n = y.fromStepping(r);
      Object.keys(v).forEach(function (t) {
        "hover" === t.split(".")[0] && v[t].forEach(function (t) {
          t.call(a, n);
        });
      });
    }
    function $(t, e) {
      v[t] = v[t] || [], v[t].push(e), "update" === t.split(".")[0] && u.forEach(function (t, e) {
        J("update", e);
      });
    }
    function G(t) {
      var i = t && t.split(".")[0],
        o = i ? t.substring(i.length) : t;
      Object.keys(v).forEach(function (t) {
        var e,
          r = t.split(".")[0],
          n = t.substring(r.length);
        i && i !== r || o && o !== n || ((e = n) !== bt.aria && e !== bt.tooltips || o === n) && delete v[t];
      });
    }
    function J(r, n, i) {
      Object.keys(v).forEach(function (t) {
        var e = t.split(".")[0];
        r === e && v[t].forEach(function (t) {
          t.call(a, x.map(b.format.to), n, x.slice(), i || !1, S.slice(), a);
        });
      });
    }
    function K(t, e, r, n, i, o) {
      var s;
      return 1 < u.length && !b.events.unconstrained && (n && 0 < e && (s = y.getAbsoluteDistance(t[e - 1], b.margin, 0), r = Math.max(r, s)), i && e < u.length - 1 && (s = y.getAbsoluteDistance(t[e + 1], b.margin, 1), r = Math.min(r, s))), 1 < u.length && b.limit && (n && 0 < e && (s = y.getAbsoluteDistance(t[e - 1], b.limit, 0), r = Math.min(r, s)), i && e < u.length - 1 && (s = y.getAbsoluteDistance(t[e + 1], b.limit, 1), r = Math.max(r, s))), b.padding && (0 === e && (s = y.getAbsoluteDistance(0, b.padding[0], 0), r = Math.max(r, s)), e === u.length - 1 && (s = y.getAbsoluteDistance(100, b.padding[1], 1), r = Math.min(r, s))), !((r = dt(r = y.getStep(r))) === t[e] && !o) && r;
    }
    function Q(t, e) {
      var r = b.ort;
      return (r ? e : t) + ", " + (r ? t : e);
    }
    function Z(t, n, r, e) {
      var i = r.slice(),
        o = [!t, t],
        s = [t, !t];
      e = e.slice(), t && e.reverse(), 1 < e.length ? e.forEach(function (t, e) {
        var r = K(i, t, i[t] + n, o[e], s[e], !1);
        !1 === r ? n = 0 : (n = r - i[t], i[t] = r);
      }) : o = s = [!0];
      var a = !1;
      e.forEach(function (t, e) {
        a = rt(t, r[t] + n, o[e], s[e]) || a;
      }), a && e.forEach(function (t) {
        J("update", t), J("slide", t);
      });
    }
    function tt(t, e) {
      return b.dir ? 100 - t - e : t;
    }
    function et() {
      m.forEach(function (t) {
        var e = 50 < S[t] ? -1 : 1,
          r = 3 + (u.length + e * t);
        u[t].style.zIndex = r;
      });
    }
    function rt(t, e, r, n, i) {
      return i || (e = K(S, t, e, r, n, !1)), !1 !== e && (function (t, e) {
        S[t] = e, x[t] = y.fromStepping(e);
        var r = "translate(" + Q(10 * (tt(e, 0) - A) + "%", "0") + ")";
        u[t].style[b.transformRule] = r, nt(t), nt(t + 1);
      }(t, e), !0);
    }
    function nt(t) {
      if (s[t]) {
        var e = 0,
          r = 100;
        0 !== t && (e = S[t - 1]), t !== s.length - 1 && (r = S[t]);
        var n = r - e,
          i = "translate(" + Q(tt(e, n) + "%", "0") + ")",
          o = "scale(" + Q(n / 100, "1") + ")";
        s[t].style[b.transformRule] = i + " " + o;
      }
    }
    function it(t, e) {
      return null === t || !1 === t || void 0 === t ? S[e] : ("number" == typeof t && (t = String(t)), t = b.format.from(t), !1 === (t = y.toStepping(t)) || isNaN(t) ? S[e] : t);
    }
    function ot(t, e, r) {
      var n = ht(t),
        i = void 0 === S[0];
      e = void 0 === e || !!e, b.animate && !i && ft(h, b.cssClasses.tap, b.animationDuration), m.forEach(function (t) {
        rt(t, it(n[t], t), !0, !1, r);
      });
      for (var o = 1 === m.length ? 0 : 1; o < m.length; ++o) m.forEach(function (t) {
        rt(t, S[t], !0, !0, r);
      });
      et(), m.forEach(function (t) {
        J("update", t), null !== n[t] && e && J("set", t);
      });
    }
    function st() {
      var t = x.map(b.format.to);
      return 1 === t.length ? t[0] : t;
    }
    function at(t) {
      var e = S[t],
        r = y.getNearbySteps(e),
        n = x[t],
        i = r.thisStep.step,
        o = null;
      if (b.snap) return [n - r.stepBefore.startValue || null, r.stepAfter.startValue - n || null];
      !1 !== i && n + i > r.stepAfter.startValue && (i = r.stepAfter.startValue - n), o = n > r.thisStep.startValue ? r.thisStep.step : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep, 100 === e ? i = null : 0 === e && (o = null);
      var s = y.countStepDecimals();
      return null !== i && !1 !== i && (i = Number(i.toFixed(s))), null !== o && !1 !== o && (o = Number(o.toFixed(s))), [o, i];
    }
    return mt(e = h, b.cssClasses.target), 0 === b.dir ? mt(e, b.cssClasses.ltr) : mt(e, b.cssClasses.rtl), 0 === b.ort ? mt(e, b.cssClasses.horizontal) : mt(e, b.cssClasses.vertical), mt(e, "rtl" === getComputedStyle(e).direction ? b.cssClasses.textDirectionRtl : b.cssClasses.textDirectionLtr), l = V(e, b.cssClasses.base), function (t, e) {
      var r = V(e, b.cssClasses.connects);
      u = [], (s = []).push(M(r, t[0]));
      for (var n = 0; n < b.handles; n++) u.push(D(e, n)), m[n] = n, s.push(M(r, t[n + 1]));
    }(b.connect, l), (p = b.events).fixed || u.forEach(function (t, e) {
      _(f.start, t.children[0], I, {
        handleNumbers: [e]
      });
    }), p.tap && _(f.start, l, n, {}), p.hover && _(f.move, l, W, {
      hover: !0
    }), p.drag && s.forEach(function (t, e) {
      if (!1 !== t && 0 !== e && e !== s.length - 1) {
        var r = u[e - 1],
          n = u[e],
          i = [t];
        mt(t, b.cssClasses.draggable), p.fixed && (i.push(r.children[0]), i.push(n.children[0])), i.forEach(function (t) {
          _(f.start, t, I, {
            handles: [r, n],
            handleNumbers: [e - 1, e]
          });
        });
      }
    }), ot(b.start), b.pips && R(b.pips), b.tooltips && H(), G("update" + bt.aria), $("update" + bt.aria, function (t, e, s, r, a) {
      m.forEach(function (t) {
        var e = u[t],
          r = K(S, t, 0, !0, !0, !0),
          n = K(S, t, 100, !0, !0, !0),
          i = a[t],
          o = b.ariaFormat.to(s[t]);
        r = y.fromStepping(r).toFixed(1), n = y.fromStepping(n).toFixed(1), i = y.fromStepping(i).toFixed(1), e.children[0].setAttribute("aria-valuemin", r), e.children[0].setAttribute("aria-valuemax", n), e.children[0].setAttribute("aria-valuenow", i), e.children[0].setAttribute("aria-valuetext", o);
      });
    }), a = {
      destroy: function () {
        for (var t in G(bt.aria), G(bt.tooltips), b.cssClasses) b.cssClasses.hasOwnProperty(t) && gt(h, b.cssClasses[t]);
        for (; h.firstChild;) h.removeChild(h.firstChild);
        delete h.noUiSlider;
      },
      steps: function () {
        return m.map(at);
      },
      on: $,
      off: G,
      get: st,
      set: ot,
      setHandle: function (t, e, r, n) {
        if (!(0 <= (t = Number(t)) && t < m.length)) throw new Error("noUiSlider (" + lt + "): invalid handle number, got: " + t);
        rt(t, it(e, t), !0, !0, n), J("update", t), r && J("set", t);
      },
      reset: function (t) {
        ot(b.start, t);
      },
      __moveHandles: function (t, e, r) {
        Z(t, e, S, r);
      },
      options: o,
      updateOptions: function (e, t) {
        var r = st(),
          n = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
        n.forEach(function (t) {
          void 0 !== e[t] && (o[t] = e[t]);
        });
        var i = xt(o);
        n.forEach(function (t) {
          void 0 !== e[t] && (b[t] = i[t]);
        }), y = i.spectrum, b.margin = i.margin, b.limit = i.limit, b.padding = i.padding, b.pips ? R(b.pips) : F(), b.tooltips ? H() : z(), S = [], ot(ct(e.start) ? e.start : r, t);
      },
      target: h,
      removePips: F,
      removeTooltips: z,
      getTooltips: function () {
        return i;
      },
      getOrigins: function () {
        return u;
      },
      pips: R
    };
  }
  return {
    __spectrum: i,
    version: lt,
    cssClasses: u,
    create: function (t, e) {
      if (!t || !t.nodeName) throw new Error("noUiSlider (" + lt + "): create requires a single element, got: " + t);
      if (t.noUiSlider) throw new Error("noUiSlider (" + lt + "): Slider was already initialized.");
      var r = H(t, xt(e), e);
      return t.noUiSlider = r;
    }
  };
});

/***/ }),

/***/ "./node_modules/graph-modal/src/graph-modal.js":
/*!*****************************************************!*\
  !*** ./node_modules/graph-modal/src/graph-modal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GraphModal)
/* harmony export */ });
class GraphModal {
  constructor(options) {
    let defaultOptions = {
      isOpen: () => {},
      isClose: () => {},
    }
    this.options = Object.assign(defaultOptions, options);
    this.modal = document.querySelector('.graph-modal');
    this.speed = 300;
    this.animation = 'fade';
    this._reOpen = false;
    this._nextContainer = false;
    this.modalContainer = false;
    this.isOpen = false;
    this.previousActiveElement = false;
    this._focusElements = [
      'a[href]',
      'input',
      'select',
      'textarea',
      'button',
      'iframe',
      '[contenteditable]',
      '[tabindex]:not([tabindex^="-"])'
    ];
    this._fixBlocks = document.querySelectorAll('.fix-block');
    this.events();
  }

  events() {
    if (this.modal) {
      document.addEventListener('click', function (e) {
        const clickedElement = e.target.closest(`[data-graph-path]`);
        if (clickedElement) {
          let target = clickedElement.dataset.graphPath;
          let animation = clickedElement.dataset.graphAnimation;
          let speed = clickedElement.dataset.graphSpeed;
          this.animation = animation ? animation : 'fade';
          this.speed = speed ? parseInt(speed) : 300;
          this._nextContainer = document.querySelector(`[data-graph-target="${target}"]`);
          this.open();
          return;
        }

        if (e.target.closest('.js-modal-close')) {
          this.close();
          return;
        }
      }.bind(this));

      window.addEventListener('keydown', function (e) {
        if (e.keyCode == 27 && this.isOpen) {
          this.close();
        }

        if (e.which == 9 && this.isOpen) {
          this.focusCatch(e);
          return;
        }
      }.bind(this));

      document.addEventListener('click', function (e) {
        if (e.target.classList.contains('graph-modal') && e.target.classList.contains("is-open")) {
          this.close();
        }
      }.bind(this));
    }

  }

  open(selector) {
    this.previousActiveElement = document.activeElement;

    if (this.isOpen) {
      this.reOpen = true;
      this.close();
      return;
    }

    this.modalContainer = this._nextContainer;

    if (selector) {
      this.modalContainer = document.querySelector(`[data-graph-target="${selector}"]`);
    }
    
    this.modalContainer.scrollTo(0, 0)

    this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`);
    this.modal.classList.add('is-open');

    document.body.style.scrollBehavior = 'auto';
    document.documentElement.style.scrollBehavior = 'auto';

    this.disableScroll();

    this.modalContainer.classList.add('graph-modal-open');
    this.modalContainer.classList.add(this.animation);

    setTimeout(() => {
      this.options.isOpen(this);
      this.modalContainer.classList.add('animate-open');
      this.isOpen = true;
      this.focusTrap();
    }, this.speed);
  }

  close() {
    if (this.modalContainer) {
      this.modalContainer.classList.remove('animate-open');
      this.modalContainer.classList.remove(this.animation);
      this.modal.classList.remove('is-open');
      this.modalContainer.classList.remove('graph-modal-open');

      this.enableScroll();

      document.body.style.scrollBehavior = 'auto';
      document.documentElement.style.scrollBehavior = 'auto';

      this.options.isClose(this);
      this.isOpen = false;
      this.focusTrap();

      if (this.reOpen) {
        this.reOpen = false;
        this.open();
      }
    }
  }

  focusCatch(e) {
    const nodes = this.modalContainer.querySelectorAll(this._focusElements);
    const nodesArray = Array.prototype.slice.call(nodes);
    const focusedItemIndex = nodesArray.indexOf(document.activeElement)
    if (e.shiftKey && focusedItemIndex === 0) {
      nodesArray[nodesArray.length - 1].focus();
      e.preventDefault();
    }
    if (!e.shiftKey && focusedItemIndex === nodesArray.length - 1) {
      nodesArray[0].focus();
      e.preventDefault();
    }
  }

  focusTrap() {
    const nodes = this.modalContainer.querySelectorAll(this._focusElements);
    if (this.isOpen) {
      if (nodes.length) nodes[0].focus();
    } else {
      this.previousActiveElement.focus();
    }
  }

  disableScroll() {
    let pagePosition = window.scrollY;
    this.lockPadding();
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
  }

  enableScroll() {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    this.unlockPadding();
    document.body.style.top = 'auto';
    document.body.classList.remove('disable-scroll');
    window.scrollTo({
      top: pagePosition,
      left: 0
    });
    document.body.removeAttribute('data-position');
  }

  lockPadding() {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    this._fixBlocks.forEach((el) => {
      el.style.paddingRight = paddingOffset;
    });
    document.body.style.paddingRight = paddingOffset;
  }

  unlockPadding() {
    this._fixBlocks.forEach((el) => {
      el.style.paddingRight = '0px';
    });
    document.body.style.paddingRight = '0px';
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");




})();

/******/ })()
;
//# sourceMappingURL=main.js.map