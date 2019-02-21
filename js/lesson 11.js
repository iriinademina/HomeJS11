function startLesson11 (event) {

  var selector = document.body.appendChild (
  document.createElement ( 'input' )
  )
  selector.type = 'file'
  selector.multiple = true
  selector.id = 'selectImages'
  selector.style.display = 'none'

  var label = document.body.appendChild (
    document.createElement ( 'label' )
  )
  label.htmlFor = 'selectImages'
  label.innerText = 'Select images'
  label.style =
       `
        position : relative;
        left: 200px;
        top: 20px;
        margin-right: 20px;
      `

  var promise = function ( imageFile ) {
      return new Promise (
         (resolve,reject) => {
            imageFile.type.split('/')[0] === 'image' ?
                   resolve( URL.createObjectURL(imageFile)) :
                          reject ('Выбранный файл не картинка')
        }
      )
    }

    selector.onchange = function ( event ) {
        for ( var file of event.target.files ) {
            promise ( file )
                .then ( result => {
                    var picture = document.createElement ( "img" )
                    document.body.appendChild( picture )
                    picture.src = result
                    picture.style =
                      ` position : relative;
                        left: 200px;
                        top: 20px;
                      `
                  })
                .catch ( error => console.error ( error ) )
        }
    }
   event.target[`on${event.type}`] = null
}
