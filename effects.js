var myButton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        // these work (set scroll-behavior to auto so it doesn't break):
        // document.body.scrollTop = 0;
        // document.documentElement.scrollTop = 0;
        // alert(":)");
        myButton.style.bottom = "20px"; //this doesn't
    } else {
        myButton.style.bottom = "-100px";
    }
  }

function topFunction() {
    //set scroll-behavior to smooth so it doesn't look ugly
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }



//test
var testButton = document.getElementById("myBtn2");

function testtt() { //not working either :(
    testButton.style.justifySelf = 'stretch';
    testButton.style.backgroundColor = '#000000';
}
