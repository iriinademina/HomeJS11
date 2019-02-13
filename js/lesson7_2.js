function startLesson7_2 (event) {

    var cont = document.body.appendChild(document.createElement ('div'))
    cont.style =
          `
            max-width : 400px;
            height: 400px;
            border : 1px solid black;
            margin: 0 auto;
            margin-top: 30px;
          `
    var tagNames = [ "div", "div", "div", "div", "button" ]
    var divStyle = `
           display: inline-block;
           width: 100px;
           height: 100px;
           border-radius: 50%;
           border: solid 1px green;
           font-size: 25px;
       `
    elements = tagNames.map ( function ( x ) {
          return cont.appendChild (
              document.createElement ( x )
           )
    })

    elements.filter ( function ( element ) {
        return element.tagName === "DIV"
    })
    .forEach ( function ( element, num ) {
          element.style = divStyle
          element.innerText = num
    })

    elements.filter ( function ( element ) {
        return element.tagName === "BUTTON"
    })
    .forEach ( function ( element ) {
         element.innerHTML = "remove DIVs"
         element.onclick = function ( event ) {
            recursRemove ()
         }
    })
        // Удаление всех элементов с кнопкой
      var recursRemove = (function (elems){
          return function deltags () {
              if (elems.length){
                  var elem = elems.shift()
                  elem.parentNode.removeChild ( elem )
                  deltags()
              }
          }

      })(elements)

      event.target [`on${event.type}`] = null
}
