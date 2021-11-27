// JS code for the navigation bar to toggle starts here -------------------------------------------------------------------------------

// var navbar = "Function for navigation bar loaded completely"

function myFunction2() { // this function is for navigation bar on 750 px screen
    var x =
        document.getElementById("myTopnav");
    if (
        x.className === "nav"
    ) {
        x.className += " responsive"
    } else {
        x.className = "nav";
    }
}
// console.log(navbar)
// JS code for the navigation bar to toggle ends here here xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// // JS code for the header of webpage starts here -------------------------------------------------------------------------------------------
// var viewportHeader = document.querySelector(".viewport-header");

// document.body.addEventListener("scroll", function(event) {
//     var opacity = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
//     var scale = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
//     document.documentElement.style.setProperty('--headerOpacity', opacity);
//     document.documentElement.style.setProperty('--headerScale', scale);
// });
// JS code for the header of webpage starts here xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// JS for text animation in html codes starts here --------------------------------------------------------------------------
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};
TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    var that = this;
    var delta = 300 - Math.random() * 100;
    if (this.isDeleting) {
        delta /= 2;
    }
    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(function() {
        that.tick();
    }, delta);
};
window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new
                TxtRotate(elements[i],
                    JSON.parse(toRotate),
                    period);
            }
        }
        //INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.18rem solid #e5e5e5 }";

        document.body.appendChild(css);
    }
    // JS for text animation is html code is end here XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


// JS for the change mode or theme in html code from dark to light and light to dark starts here --------------------------------------------------------------------------

// declairing variables for complete dark-light theme JS

var body = document.getElementById("body");
var x = document.getElementById("lightDark");
var svgm = "fa fa-moon"
var svgs = "fa fa-sun"
var lighttheme = "light-theme"
var darktheme = "dark-theme"

// to toggle between the svg sun and moon in toggle button

Window.onload = function() {
        if (body.className === lighttheme) {
            x.className = svgm
        } else {
            x.className = svgs
        }
    }
    // Window.onload = function() {
    //     if (body.className === darktheme) {
    //         x.className = svgs
    //     } else {
    //         x.className = svgm
    //     }
    // }

function lightDark() {
    if (x.className === svgm) {
        x.className = svgs
    } else {
        x.className = svgm
    }
}

// use this JS code to toggle between dark and light theme
const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {

    document.body.classList.toggle(darktheme);
} else if (currentTheme == "light") {
    document.body.classList.toggle(lighttheme)
};

btn.addEventListener("click",
    function() {
        if (prefersDarkScheme.matches) {
            document.body.classList.toggle(lighttheme);
            var theme = document.body.classList.contains(lighttheme) ?
                "light" :
                "dark";
        } else {
            document.body.classList.toggle(darktheme);
            var theme = document.body.classList.contains(darktheme) ?
                "dark" :
                "light"
        }
        localStorage.setItem("theme", theme)
    }
);

// JS for the change theme is end here XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX