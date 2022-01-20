const headerToggle = document.querySelector('.header__toggle');
headerToggle.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.add('is-open');
    return false;
});

const headerClose = document.querySelector('.header__close');
headerClose.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.remove('is-open');
    return false;
});