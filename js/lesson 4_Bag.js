function startLesson4_1 (event) {

  function Bag (cash,newAccessories,keyword){

   let money = !cash || typeof cash !=="number" ? 2500 : cash
   let key = !keyword || typeof keyword !=="string"? "1111": keyword
   let accessories = !newAccessories ? [] :
      Array.isArray ( newAccessories ) ? newAccessories: [ newAccessories ]

   let addAnyThing = function (thing) {
        accessories.indexOf(thing) <0 ?accessories.push(thing):""
        console.log( `Аксессуары: ${accessories}`)
   }

  let deleteAnyThing = function (thing) {
        accessories.indexOf(thing)!==-1?accessories.splice(accessories.indexOf(thing),1):""
        console.log( `Аксессуары: ${accessories}`)
  }

  let addSomeMoney = function (sum) {
    console.log( `Kоличество денег:${money+= Number.isNaN(sum)?0:Number(sum)}`)
  }

  let deleteSomeMoney = function (sum) {
        console.log( money<sum ? "Недостаточно денег" :
                      `Kоличество денег:${money-= Number.isNaN(sum)?0:Number(sum)}`)
  }

  this.addMoney = function (newsum, mykey){
        console.log ((key!==mykey) ? "Не влезай" : addSomeMoney(newsum))
  }

  this.deleteMoney = function (newsum, mykey) {
        console.log ((key!==mykey) ? "Не влезай" :  deleteSomeMoney(newsum))
  }

  this.addThing = function (newthing, mykey){
        console.log ((key!==mykey) ? "Не влезай" :  addAnyThing(newthing))
  }

  this.deleteThing = function (newthing, mykey) {
        console.log ((key!==mykey) ? "Не влезай" :  deleteAnyThing(newthing))
  }

}

let bag1 = new Bag(null,["brush","stick","wallet","notebook"],"155")
bag1.addThing ("telephone","155")
bag1.addMoney(120,"155")
bag1.deleteMoney(120,"155")
bag1.deleteMoney(3000,"155")

}
