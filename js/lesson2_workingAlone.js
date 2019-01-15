function startLesson2_3 () {

  var group = [
      {
              name: "Irina",
              lastName: "Anikina",
              age: 30,
              notebook: true
      },
      {
              name: "Irina",
              lastName: "Simonova",
              age: 25,
              notebook: false
      },
      {
              name: "Vlad",
              lastName: "Pertrov",
              age: 32,
              notebook: true
      }

]

function getStudentsList ( arrayOfStudents ){
var str = ""
var newarr = []
for (var stud of arrayOfStudents){
  for(var prop in stud ){
    if(stud[prop]==="") continue
    str+=(prop+":"+" "+stud[prop]+" "+";")
  }
    str=str.slice(0,-1)
    newarr.push(str)
    str=""
}
 return newarr
}

console.log("Task 1")
console.log(getStudentsList(group))


console.log("Task 2")
console.log("---------------------------")

/*Объявить функцию, которая добавляет нового студента в массив group*/

function addNewStudent ( name,lastName,age,notebook,arrayOfStudents) {
  arrayOfStudents.push({name:name,lastName:lastName,age:age,notebook:notebook})
  return arrayOfStudents
}

console.log (addNewStudent ("Владимир","Лесовой",35,true, group))
console.log("---------------------------")
console.log(getStudentsList(group))

console.log("---------------------------")
console.log("Task 3")
console.log("---------------------------")

/*Объявить функцию, которая получает в качестве аргумента строку и удаляет из нее символы,
код которых больше 1103 или меньше 1040.Функция должна вернуть новую строку.Применить эту функцию к строке
"Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик"*/

function deleteSymbols (str){
var newString=""
  for (var symb of str){
    newString+=symb.charCodeAt()<1103 && symb.charCodeAt()>1040 || symb.charCodeAt()===32?symb:""
  }
  return newString.replace(/\s+/g,' ') // очистка от лишних пробелов при добавлении в строку всех пробелов
}
console.log (deleteSymbols ("Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик"))

console.log("---------------------------")
console.log("Task 4")
console.log("---------------------------")
/*Написать функцию сортировки массива*/

function sortStrings(arr) {
      var Sort = []
      Sort.push(arr.pop())
          while (arr.length > 0) {
              var x = arr.pop()
              for (var elem of Sort) {
                  if (x < elem) {
                      Sort.splice(Sort.indexOf(elem), 0, x)
                      x = null
                      break
                  }
              }
                if (x) Sort.push(x)
          }
          return Sort
      }

var arr = sortStrings(["Sveta", "Ira", "Lena","Igor"])
console.log(arr)

var arr1 = sortStrings([555, 5, 78, 45])
console.log(arr1)

console.log("---------------------------")
console.log("Task 5")
console.log("---------------------------")
/*
Есть два массива, в первом - имена, во втором - фамилии
Нужно создать массив, элементы которого будут содержать имя и фамилию одной строкой
names [ i ] ="Сергей",
lastNames [ i ] = "Коломенцев"
Результат:
newArray [ i ] = "Сергей Коломенцев"*/

var names = ["Елена","Константин","Иван"]
var lastNames = ["Федорова","Петров","Квашенников"]

function getfullnameList (arrNames,arrLastNames){
var fullName = []
var i=0
 while(i<arrNames.length){
    if(arrNames.length===arrLastNames.length && arrNames[i] && arrLastNames[i])
    fullName.push(`${arrNames[i]} ${arrLastNames[i]}`)
    i++
  }
return fullName
}

console.log(getfullnameList(names,lastNames))
console.log("---------------------------")

var names1 = ["Елена","Константин",""]
var lastNames1 = ["Федорова","Петров","Квашенников"]
console.log (getfullnameList(names1,lastNames1))

/*Второй вариант решения*/
function getNameLastName(namesArray, lastNameArray) {
      var fullNameArray = [];
          for (var name of namesArray) {
              var fullName = "";
              fullName += name + " " + lastNameArray.shift();
              fullNameArray.push(fullName.trim());
          }
         return fullNameArray;
      }

var names1 = ["Елена","Константин","Иван"]
var lastNames1 = ["Федорова","Петров","Квашенников"]
console.log (getfullnameList(names1,lastNames1))

}
