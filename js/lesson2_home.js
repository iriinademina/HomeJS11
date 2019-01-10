function startLesson2_2 () {

  elem.style.display = "none"
  var photo2 =  document.body.appendChild(document.createElement ( "img" ))
  photo2.src = "img/HomeWork_XSS.png"
  photo2.onclick = function (event) {
    this.remove()
    elem.style.display = "block"
  }

}
