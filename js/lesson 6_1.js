function startLesson6_1 (event) {

  var tags = [
    {
      tagName: "div",
      attrs: {
         width : 400,
         height: 400,
         style :
              `margin: 0 auto;
               position: relative;
               top: 20px;
               width: 500px;
               height: 400px;
               border: 1px solid gray; `
      },
        children: [
          {
            tagName: "img",
            attrs: {
            style :
                `width: 20px;
                 height: 20px;
                 position: absolute;
                 top: -8px;
                 right: -8px;
                 border: 1px solid gray;
                 border-radius: 100%; `,
            src : "img/lesson6/close.jpg"
            },
            callbacks : {
              click : function (event) {
                event.target.parentNode.remove()
              }
            }
          },
          {
              tagName: "p",
              attrs: {
                innerText : "Click me"
              },
              callbacks : {
                click : function (event) {
                  var pic = event.target.parentNode.appendChild (
                         document.createElement("img"))
                         pic.src="img/lesson6/voda_1.jpg"
                         pic.width = "100"
                         pic.style.paddingLeft = "10px"
                         pic.style.transition = "all 1s"
                         pic.onmouseover = function (event) {
                           this.style.width = "200px"
                         }
                         pic.onmouseout = function (event) {
                            this.style.width = "100px"
                          }
                          pic.onclick = function (event) {
                             this.remove()
                           }
                  }
              }
          }

        ]
    }
  ]

  function addElem(elemData, container){
     var cont = container ? container : document.body
     var elem = cont.appendChild(
                document.createElement(elemData.tagName))
     for(var prop in elemData.attrs){
         elem[prop] = elemData.attrs[prop]
     }
     for(var prop in elemData.callbacks){
        elem.addEventListener(prop , elemData.callbacks[prop])
     }
    if (elemData.children)
         elemData.children.forEach (el =>
              addElem (el, elem)
       )
     return elem
 }

  function createElements (arr){
        arr.forEach (el => addElem (el))
    }
    createElements (tags)
}
