import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

// all Swipers
const swiperCertificates = new Swiper('.certificatesBlock', {

  grabCursor: 'true',
  slidesPerView: 'auto',
  
  navigation: {
    nextEl: '.sliderButtons--next',
    prevEl: '.sliderButtons--prev',
  },
  
});

const swiperOurPartners = new Swiper('.ourPartnersBlock', {

  grabCursor: 'true',
  slidesPerView: 'auto',

  pagination: {
    el: '.ourPartnersBlock__pagination',
    clickable: 'true'
  },
});

const swiperFeedback = new Swiper('.feedbackBlock', {

  slidesPerView: 'auto',
  
  navigation: {
    nextEl: '.sliderButtons--next',
    prevEl: '.sliderButtons--prev',
  },

});


// calculator

const costs = {
  'ДТ': 45,
  'АИ-92': 47,
  'АИ-95': 39,
  'АИ-100': 49,
}

const inputKind = document.body.querySelector('.calcBlock__del__properties--list')
const inputVolume = document.body.querySelector('.calcBlock__del__properties--range')
const inputTotal = document.getElementById('calc-total-text')
const totalBlock = document.getElementById('calc-total')
const costBlock = document.getElementById('calc-cost')
const profitBlock = document.getElementById('calc-profit')

// Подсчет значений
const calc = (v, cost) => {
  totalBlock.innerHTML = v * cost + '.00'

  // Выгода тут составляет 10% от цены
  profitBlock.innerHTML = (v * cost / 10) + '.00'
}

// Достаем value и обновляем input
inputVolume.addEventListener('input', (e) => {
  let value = e.target.value
  inputTotal.value = value + ' литров'

  calc(value, costs[inputKind.value])
})

// Достаем value и обновляем input
inputKind.addEventListener('change', (e) => {
  let cost = costs[e.target.value]
  costBlock.innerHTML = cost + '.00'

  calc(inputVolume.value, cost)
})