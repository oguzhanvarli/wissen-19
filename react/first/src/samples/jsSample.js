console.log("çalıştım")

const string1 = "Merhaba"
const number1 = 1
let boolean1 = true
let array1 = [12, 22, "asd", true, [2]]
let object = {
  key : "value",
  oguzhan : 'oguzhan',
  age : 29,
  isWork : true,
  hobbies : ["coding"],
  others : {
    city : "İstanbul",
    cityCode : 34
  },
  sayHello : () => {
    console.log("Hello")
  }
}

//Functions

function test1(){

}

const test2 = () => {

}

//const and let
const name1 = "Oğuzhan"
// name1 = "Oğuzhan Varlı"
console.log(name1)


let name2 = "Oğuzhan"
name2 = "Oğuzhan Hoca"
console.log(name2)

{
  const team = "Galatasaray"
  let team2 = "Türkiye"
  var team3 = "Eternal Fire"  //var scope ayırtetmeksizin çalışır
  console.log(name1)
}

// console.log(team)
//console.log(team2)
console.log(team3)



if(name1 == "Oğuzhan"){
  console.log("Eşitler")
}else{
  console.log("Eşit Değiller")
}

let number2 = 29
if(number2 === "29"){
  console.log("Eşitler")
}else{
  console.log("Eşit Değiller")
}

let sampleNull = null
let sampleUnd = undefined

if(sampleNull){
  console.log("İf'e Düştüm")
}else{
  console.log("Else'e Düştüm")
}

if(sampleUnd){
  console.log("İf'e Düştüm")
}else{
  console.log("Else'e Düştüm")
}


let number3 = 1881
if(number3){
  console.log("İf'e Düştüm")
}else{
  console.log("Else'e Düştüm")
}

let name3 = "Atatürk"
if(name3){
  console.log("İf'e Düştüm")
}else{
  console.log("Else'e Düştüm")
}

let hobbies2 = []
if(hobbies2){
  console.log("İf'e Düştüm")
}else{
  console.log("Else'e Düştüm")
}

let object2 = []
if(object2){
  console.log("İf'e Düştüm")
}else{
  console.log("Else'e Düştüm")
}

if(!sampleNull){
  console.log("İf'e Düştüm")
}else{
  console.log("Else'e Düştüm")
}

let test3
if(test3){
  console.log("İf'e Düştüm")
}else{
  console.log("Else'e Düştüm")
}
console.log(test3)


if(number2 !== "29"){
  console.log("Eşitler")
}else{
  console.log("Eşit Değiller")
}


let date1 = new Date()
console.log(date1.getDay())

let arr1 = [1,2,3]
let arr2 = [1,2,3]

if(arr1 == arr2){
  console.log("Eşitler")
}else{
  console.log("Eşit Değiller")
}

let str1 = "Oğuzhan"
let str2 = "Oğuzhan"

if(str1 == str2){
  console.log("Eşitler")
}else{
  console.log("Eşit Değiller")
}

let obj1 = {
  one: 1
}
let obj2 = {
  one: 1
}

if(obj1 == obj2){
  console.log("Eşitler")
}else{
  console.log("Eşit Değiller")
}


let obj3 = {
  one: 1
}
let obj4 = obj3

if(obj3 == obj4){
  console.log("Eşitler")
}else{
  console.log("Eşit Değiller")
}

