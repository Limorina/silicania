window.onscroll = function() {
    makeHeaderSticky();
};

function makeHeaderSticky() {
    const header = document.querySelector('.sticky');
    if (window.pageYOffset > 0) {
        header.classList.add('sticky-header');
    } else {
        header.classList.remove('sticky-header');
    }
}
