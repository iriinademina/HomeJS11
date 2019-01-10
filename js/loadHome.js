
  var elem = document.querySelector ('.container')
  var btn = document.querySelector ('.btn-home')

  hideMenu (false)

  function hideMenu (param){
    var dspl = param ? "0px" : "-999px"
    elem.style.left = dspl
  }

  function loadHome (event){
      if (btn.innerHTML === "Home") {
          hideMenu (true)
          btn.innerHTML = "Hide"
      } else {
          hideMenu (false)
          btn.innerHTML = "Home"
      }
 }
 
btn.onclick = loadHome
