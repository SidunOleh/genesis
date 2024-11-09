if (document.querySelector('.news-slider')) {
    new Swiper('.news-slider', {
        spaceBetween: 52,
        pagination: {
            el: '.news-slider__pagination',
            clickable: true,
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    })
}

if (document.querySelector('.services-slider')) {
    new Swiper('.services-slider', {
        spaceBetween: 52,
        pagination: {
            el: '.services-slider__pagination',
            clickable: true,
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    })
}

const phoneInput = document.querySelector('input[name=phone]')

if (phoneInput) {
    phoneInput.addEventListener('input', e => {
        let s = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
        e.target.value = s[2] ? '(' + s[1] + ') ' + s[2] + (s[3] ? '-' + s[3] : '') : s[1]
    })
}

$(document).on('click', () => $('.menu-item').removeClass('open'))

$('.menu-item span').click(function(e) {
    if (e.target.tagName != 'SPAN') {
        return
    }
    e.preventDefault()
    e.stopPropagation()
    const menuItem = $(this).closest('.menu-item')
    if (menuItem.hasClass('open')) {
        menuItem.add(menuItem.find('.menu-item')).removeClass('open')
    } else {
        menuItem.addClass('open')
    }
})

$('.menu-item').on('mouseover', function(e) {
    if (e.target.tagName == 'SPAN') {
        return
    }
    $('.nav-list > .menu-item').removeClass('open')
    $(this).addClass('open')
})

$('.menu-item').on('mouseleave', function(e) {
    if (e.target.tagName == 'SPAN') {
        return
    }

    $(this).removeClass('open')
})


$('.header__burger').click(() => {
    $('.header').toggleClass('open')

    $('body').css('overflow', 'hidden')
})

$('.header .close').click(() => {
    $('.header').removeClass('open')
    $('body').css('overflow', 'auto')
})