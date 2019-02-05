function startLesson6_1 (event) {

  var block = document.body.appendChild(document.createElement('div'))
  var btnclose =  block.appendChild(document.createElement ( "img" ))
  block.style =
    `
      margin: 0 auto;
      position: relative;
      top: 20px;
      width: 500px;
      height: 400px;
      border: 1px solid gray;

    `
  btnclose.style =
      `
        width: 20px;
        height: 20px;
        position: absolute;
        top: -8px;
        right: -8px;
        border: 1px solid gray;
        border-radius: 100%;
    `
  btnclose.src = "img/lesson6/close.jpg"
  btnclose.onclick = function (event) {
       block.remove()
  }

  var elem = block.appendChild(document.createElement("p"))
  elem.innerText ="Click me"
  elem.onclick = function (event){
    var pic = document.createElement("img")
    pic.src="img/lesson6/voda_1.jpg"
    pic.width = "100"
    pic.style.paddingLeft = "10px"
    pic.style.transition = "all 1s"
    block.appendChild(pic)

    pic.onclick = function (event) {
       this.remove()
     }

     pic.onmouseover = function (event) {
       this.style.width = "200px"
     }

     pic.onmouseout = function (event) {
        this.style.width = "100px"
      }
  }


}
