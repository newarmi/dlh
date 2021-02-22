document.querySelectorAll('.tabs__item').forEach((itemTabs) =>
	itemTabs.addEventListener('click', function (e) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '');
		document.querySelectorAll('.tabs__item').forEach(
			(child) => child.classList.remove('tabs__item--active')
		);
		document.querySelectorAll('.tabs__block').forEach(
			(child) => child.classList.remove('tabs__block--active')
		);
		itemTabs.classList.add('tabs__item--active');
		document.getElementById(id).classList.add('tabs__block--active');
	})
);
document.querySelector('.tabs__item').click();

const animItems = document.querySelectorAll('._anim-items'); 
// обявляем в переменнужю все элеменные с классом
if (animItems.length > 0){
	// проверяем есть ли эти элементы
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(params) {
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i]; // работаем сконкретным элементом
			const animItemHieght = animItem.offsetHeight; //высота обьекта
			const animItemOffset = offset(animItem).top; // позициия относительно верха
			const animStart = 4; // коофицент старта анимации

			let animItemsPoint = window.innerHeight - animItemHieght / animStart;

			if(animItemHieght > window.innerHeight) {
				animItemsPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if((pageYOffset > animItemOffset - animItemsPoint) && pageYOffset < (animItemOffset + animItemHieght)){
				animItem.classList.add('_active-scroll');
			}
			else{
				if(!animItem.classList.contains('anim-no-hight')){
					animItem.classList.remove('_active-scroll');
				}
			}
		}
	}
	function offset(el) {
		const rect = el .getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollLeft;
		return{top: rect.top + scrollTop, left:  rect.left + scrollLeft}
	}
	animOnScroll()
}

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  slidesPerView: 1,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 200,
    },
    616: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    945: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    centeredSlides: true,
  }
});

document.querySelectorAll('.select').forEach((item) =>
   item.addEventListener('click', function (v) {
      // document.querySelectorAll('.select').forEach((c) => 
      // 	c.classList.remove('select--active'),
      // );
      item.classList.toggle('select--active')
   })
);


document.querySelector(".bottom__burger").addEventListener("click", () => {

	document.querySelector(".bottom__burger").classList.toggle("active_burger");

	document.querySelector(".top").classList.toggle("active_burger");

	document.querySelector(".bottom__nav").classList.toggle("active_burger");

	document.querySelector("body").classList.toggle("lock");
}); 