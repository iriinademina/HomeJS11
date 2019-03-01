function startLesson12_1 (event) {

  var container = document.body.appendChild(
                   document.createElement('div')
                  )

  container.style =
            `
              width: 400px;
              height: 300px;
              border: 1px inset gray;
              margin: 0 auto;
              position: relative;
              top: 30px;
            `

  var picture = container.appendChild (
             document.createElement ( 'img' ) )


  fetch ('https://as2.ftcdn.net/jpg/01/41/72/25/500_F_141722505_HwmH24QRZKXtOE0NHBVb0lEY3JVnb7Fj.jpg')
      .then (response => {
           response.blob()
              .then (response => {
                 var urlPict = URL.createObjectURL(response)
                 picture.src = urlPict
                 setTimeout (() => picture.parentNode.remove(),5000)
               })
      })

   event.target[`on${event.type}`] = null
}
