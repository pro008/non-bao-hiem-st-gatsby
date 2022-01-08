window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  var main = document.getElementsByTagName("main")

  if (main.length === 0) return null

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.padding = "0px 0px"
    document.getElementById("navbar").style.backdropFilter = "blur(8px)"
    document.getElementById("navbar").style.background = "rgb(8,8,8, 0.3)"
  } else {
    document.getElementById("navbar").style.padding = "20px 20px"
    document.getElementById("navbar").style.backdropFilter = ""
    document.getElementById("navbar").style.background = ""
  }
}
