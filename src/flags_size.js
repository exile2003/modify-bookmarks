window.onload = setSize;
window.onresize = setSize;

function setSize() {
    document.getElementsByClassName("container")[0].style.height =  15*window.innerWidth/window.outerWidth + "mm";

  //  document.getElementsByClassName("container")[0].style.margin = "2vw";

}

