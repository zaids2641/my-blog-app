// Slider
$(document).ready(function() {
    if ($('[data-background]').length > 0) {
        $('[data-background]').each(function() {
            var $background, $backgroundmobile, $this;
            $this = $(this);
            $background = $(this).attr('data-background');
            $backgroundmobile = $(this).attr('data-background-mobile');

            if ($this.attr('data-background').substr(0, 1) === '#') {
                return $this.css('background-color', $background);
            } else if ($this.attr('data-background-mobile') && devicePixelRatio.mobile()) {
                return $this.css('background-image', 'url(' + $backgroundmobile + ')');
            } else {
                return $this.css('background-image', 'url(' + $background + ')');
            }
        });
    }
});

// Change Navbar Background Color onScroll
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 180) {
            document.getElementById('mainNav').classList.add('scroll-nav-bg');
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddinTop = navbar_height + 'px';
        } else {
            document.getElementById('mainNav').classList.remove('scroll-nav-bg');
            document.body.style.paddingTop ='0';
        }
    })
})