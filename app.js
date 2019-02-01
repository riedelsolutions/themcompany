var ms = document.getElementById("ms");
var x = ms.offsetTop;
document.getElementById("maintainwsp").style.display = "none";

function scroll() {
  if (window.pageYOffset >= x) {
    ms.classList.add("sticky");
    document.getElementById("maintainwsp").style.display = "block";
  } else {
    ms.classList.remove("sticky");
    document.getElementById("maintainwsp").style.display = "none";
  }

}


window.onscroll = function() {
	scroll();
};

//add whitespace ons croll
var ms = document.getElementById("ms");
var x = ms.offsetTop;
document.getElementById("maintainwsp").style.display = "none";

function scroll() {
  if (window.pageYOffset >= x) {
    ms.classList.add("sticky");
    document.getElementById("maintainwsp").style.display = "block";
  } else {
    ms.classList.remove("sticky");
    document.getElementById("maintainwsp").style.display = "none";
  }

}


window.onscroll = function() {
	scroll();
};

