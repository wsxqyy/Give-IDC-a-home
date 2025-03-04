const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-progress-bar',
        type: 'progressbar'
    },
    on: {
        init: function() {
            updateProgress(this);
        },
        slideChangeTransitionStart: function() {
            updateProgress(this);
        }
    }
});

function updateProgress(swiper) {
    const progress = (swiper.activeIndex + 1) / swiper.slides.length * 100;
    swiper.pagination.el.style.width = progress + '%';
}