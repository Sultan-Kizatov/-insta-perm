window.addEventListener('DOMContentLoaded', () => {

    // menu hamburger
    const menu = document.querySelector('.menu'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    // dropdown Resources
    const openResources = document.querySelector('.menu__link-open'),
    menuResourcesList = document.querySelector('.menu__resources-list');

    openResources.addEventListener('click', () => {
        menuResourcesList.classList.toggle('menu__resources-list_active');
    });

    // search click
    const search = document.querySelector('.search'),
    searchInput = document.querySelector('.search__input');

    search.addEventListener('click', () => {
        searchInput.classList.toggle('search__input_active');
    });

    // modal window
    const modal = document.querySelector('.modal');
    const modalForm = document.querySelector('.modal__form');
    const openModalButton = document.querySelectorAll('.modal-open');
    const closeModalButton = document.querySelector('.modal-close');

    openModalButton.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('modal_active');
            modalForm.classList.add('modal__form_active');
        })
    });

    closeModalButton.addEventListener('click',() => {
        modal.classList.remove('modal_active');
        modalForm.classList.remove('modal__form_active');
    });

    document.addEventListener('keydown', (e) => {
        if (e.which === 27) {
            modal.classList.remove('modal_active');
            modalForm.classList.remove('modal__form_active');
        }
      });

    document.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.classList.remove('modal_active');
            modalForm.classList.remove('modal__form_active');
        }
    });

    // products 
    const productSwiper = new Swiper(".products__swiper", {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            },
            768: {
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                      return '<span class="' + className + '">' + (index + 1) + "</span>";
                    },
                },
            },
        },
    });
})
