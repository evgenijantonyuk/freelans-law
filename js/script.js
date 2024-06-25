window.addEventListener("DOMContentLoaded", function () {
    // mobile menu
    const mobileMenuBurger = document.querySelector(".menu-btn")
    const mobileMenu = document.querySelector(".header__section_mobile")
    mobileMenuBurger.addEventListener("click", function () {
        mobileMenuBurger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    })
    // map
    ymaps.ready(init);
    
    function init() {
        let map = new ymaps.Map("map", {
            center: [55.751816568996375, 37.599291499999936],
            zoom: 17,
            controls: ['zoomControl', 'fullscreenControl']
        });
        
        let placemark = new ymaps.Placemark([55.751816568996375, 37.599291499999936], {}, {
            iconLayout: 'default#image',
            iconImageHref: './icons/map-pin.png', // Путь к изображению
            iconImageSize: [48, 48], // Размер иконки
            // iconImageOffset: [-15, -42] // Смещение иконки
        });
        
        
        map.geoObjects.add(placemark);
    }

//     popup
    const openPopUp = document.querySelectorAll(".open__popup")
    const closePopUp = document.querySelector(".popup__close")
    const popUp = document.querySelector(".popup")
    const popupBody = document.querySelector(".popup__container")

    for (let item of openPopUp) {
        item.addEventListener('click', function (e) {
            e.preventDefault()
            popUp.classList.add("active")
        })
        popUp.addEventListener('click', (e) => {
            if (e.target === popupBody) {
                popUp.classList.remove("active")
            }
        })
    }
//     == перенос номера лелефона в попап
    let inputTel = document.querySelector(".input-tel")
    let popupInputTel = document.querySelector(".popup-input__tel")
    const btn = document.querySelector(".open__popup")
   
    btn.addEventListener('click', function () {
        popupInputTel.value = inputTel.value
        
    })
    
//     slider our command
let offset = 0
    const sliderLine = document.querySelector(".specialists-list")
    
    document.querySelector('.button__controls_right').addEventListener('click', function () {
        offset = offset + 229
        if (offset > 229) {
            offset = 0
        }
        sliderLine.style.left = -offset + "px"
    })
    document.querySelector('.button__controls_left').addEventListener('click', function () {
        offset = offset - 229
        if (offset < 0) {
            offset = 229
        }
        sliderLine.style.left = -offset + "px"
    })
    
    if (window.matchMedia('(min-width: 550px)').matches) {
        console.log('Wide viewport');
    } else {
        console.log('Small viewport');
        document.querySelector('.button__controls_right').addEventListener('click', function () {
            offset = offset + 229
            if (offset > 600) {
                offset = 0
            }
            sliderLine.style.left = -offset + "px"
        })
        
    }
    
//     slider clients review
    const images = document.querySelectorAll(".card")
    const controls = document.querySelectorAll(".controls")
    const button = document.getElementById('button')
    const paginationCircles = []
    
    let imageIndex = 0

    function createPaginationCircles () {
        const div = document.createElement("div")
        div.className = 'pagination__circle'
        button.appendChild(div)
        paginationCircles.push(div)
    }

    function addPagination () {
        images.forEach(createPaginationCircles)
        paginationCircles[0].classList.add('show')
    }
    
    function addActiveClass() {
        paginationCircles[imageIndex].classList.add('show')
        paginationCircles[imageIndex].classList.add('active')
    }
    
    function removeActiveClass() {
        paginationCircles[imageIndex].classList.remove('active')
        paginationCircles[imageIndex].classList.remove('show')
    }

    function show(index) {
        images[imageIndex].classList.remove("active")
        images[index].classList.add("active")
        imageIndex = index
    }
    
    controls.forEach((e) => {
        e.addEventListener('click', () => {
            if (event.target.classList.contains("arrow__left"))
            {
                let index = imageIndex - 1
                
                if (index < 0) {
                    index = images.length - 1
                }
                removeActiveClass()
                show(index)
                addActiveClass()
                
            } else if (event.target.classList.contains("arrow__right"))
            {
                let index = imageIndex + 1
                if (index >= images.length) {
                    index = 0
                }
                removeActiveClass()
                show(index)
                addActiveClass()
            }
        })
    })
    show(imageIndex)
    addPagination()
})