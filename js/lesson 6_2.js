
var container = document.querySelector (".containerLes6")
function showBlock (event) {
        TweenMax.fromTo( container, 2,
			{
				display: "none",
				right: `${window.innerWidth}`
			},
			{
				display: "block",
        zIndex: 1,
				right: 0,
				ease: Back.easeOut
			} )

   function borderAll (event) {
          event.target.style.border = "solid 1px gray"
   }

  var collection = document.querySelectorAll(
                      ".containerLes6 > h1 ,.container-content > *")

  function changeColor (event) {
        event.target.style.color = "#1a5abc"
        event.target.style.transition = "color 2s"
        event.target.removeEventListener("click",changeColor)
  }
  function changePosHeader(event) {
        event.target.style.textAlign = "center"
        event.target.removeEventListener("click",changePosHeader)
  }
  function changeContent (event) {
        event.target.innerText = "Пляж Грейс Бей, Остров Провиденсиалес, Теркс и Кайкос"
        event.target.removeEventListener("click",changeContent)
  }
  function border (event) {
        event.target.style =
              ` box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
              `
        event.target.removeEventListener("click",border)
  }
  function changePicture (event) {
        event.target.style =
            ` width: 600px;
              transform: translate3d(120px,0px,0px);
            `
        event.target.removeEventListener("click",changePicture)
  }

  var callbacks = [changeColor,changePosHeader,changeContent,border,changePicture]

  collection.forEach (
      (elem,index) => {
          if (elem.nodeType === 1) {
              elem.onclick = callbacks[index]
              elem.addEventListener ("click", borderAll)
          }
      }
  )
}
