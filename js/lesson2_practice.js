function startLesson2_1 () {

  elem.style.display = "none"
  var photo =  document.body.appendChild(document.createElement ( "img" ))
  photo.src = "img/Practice_XSS.png"
  photo.onclick = function (event) {
    this.remove()
    elem.style.display = "block"
  }

}
