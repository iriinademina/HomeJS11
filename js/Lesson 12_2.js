function startLesson12_2 (event) {

   let tags = [
     {
       tagName: 'div',
       attrs: {
         style:
         `
          width: 500px;
          position : relative;
          top : 20px;
          margin : 0px auto;
          border : 1px solid transparent;
          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
         `
       },
     children: [
       {
         tagName: 'h1',
         attrs: {
           innerText : 'Австралийская овчарка',
           className : "header-dog",
           style : `text-align : center`
         }
       },
       {
         tagName: 'img',
         attrs: {
           width : '300',
           src: 'img/dog1.jpg',
           className : "img-dog",
           style :
                  `margin: 20px auto;
                   display: block;
                   `
        }
       }
     ]
   }
 ]

  function addElem (elemData, container){
       let cont = container ? container : document.body
       let elem = cont.appendChild(
                  document.createElement(elemData.tagName))
       for(var prop in elemData.attrs){
           elem[prop] = elemData.attrs[prop]
       }

     if (elemData.children)
           elemData.children.forEach (el =>
                addElem (el, elem)
         )
  }

  tags.forEach (el => addElem (el))

  let pict = document.querySelector(".img-dog")
  let newHeader = document.querySelector(".header-dog")


  let content = [
       ["Австралийский хилер", "img/dog2.jpg"],
       ["Аляскинский маламут","img/dog2.jpg"],
       ["Английский бульдог","img/dog3.jpg"],
       ["Бигль","img/dog4.jpg"]
  ]

  let result = []
  window.onhashchange = function ( event ) {
        let hash = 1 * location.hash.substr ( 1 )
        hash = hash > 3 || hash < 0 ? 0 : hash
        location.hash = `#${hash}`
        pict.src = content [hash][1]
        newHeader.innerHTML = content [hash][0]
        let local = Object.assign ({}, {pageID : location.hash , startTime: new Date().getTime()})
        result.push (local)
        localStorage.setItem ( "history",JSON.stringify(result))
  }

  console.log (localStorage.getItem("history"))
  event.target[`on${event.type}`] = null

}
