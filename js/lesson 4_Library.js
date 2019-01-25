function startLesson4_2 (event) {

  let LibraryBook = function(
                          id = "***",
                          auth = "none",
                          y = 2005,
                          cod = "1111") {

    let title = id
    let author = auth
    let year = y
    let readerName = null
    let readerData = null
    let __code = cod

    function giveTheBook(name){
        readerName = name
        readerData = new Date().toLocaleString().split(", ")[0]
    }

    this.returnTheBook = function(){
        readerName = null
        readerData = null
    }

    this.getBookInfo=function(){
        console.log ( `${author}, ${title} ${year} : ${readerName ?
                                     "Книга занята":"свободна"}`)
        return !Boolean(readerName)
    }

    this.getTheBook = function(code,name){
        if(code===__code)
        return this.getBookInfo () ? giveTheBook (name) : null
    }

  }

  let books=[
      new LibraryBook("JS","Nicolas Zakas",2017,"12345"),
      new LibraryBook ("Кобзарь","Тарас Шевченко", 2005, "245" ),
  ]

  books[0].getBookInfo()
  books[0].getTheBook ("12345","Вася")
  books[0].getBookInfo()
  books[0].returnTheBook()
  books[0].getBookInfo()

}
