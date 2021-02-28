const array = [1,2,3,4,5,1,4,6,8,10]

function sumNumber (array) {
  let total = 0
  for(let i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total
}

function checkDuplicateData (array) {
  let obj = {}
  for(let i = 0; i <array.length; i++) {
    let key = array[i]
    if(obj[key]) {
      obj[key]++
    } else {
      obj[key] = 1
    }
  } 
  let arrayOfValue = Object.values(obj)
  let freqCharacterBerulang = 0
  arrayOfValue.forEach(el => {
    if(el > 1) {
      freqCharacterBerulang += el-1
    }
  })
  return freqCharacterBerulang
}
function removeDuplicateData (array) {
  let obj = {}
  for(let i = 0; i <array.length; i++) {
    let key = array[i]
    if(obj[key]) {
      obj[key]++
    } else {
      obj[key] = 1
    }
  } 
  let arrayOfKey = Object.keys(obj)
  let newArray = arrayOfKey.map(el => +el)
  return newArray
}

function countEvenNumber (array) {
  let counter = 0
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      counter++
    }
  }
  return counter
}


function checkFibonacci (array) {
  let counter = 0
  let x1 = array[0]
  let x2 = array[1]
  for(let i = 2; i < array.length; i++) {
    if(array[i] === (x1 + x2)) {
      counter++
    } 
    x1 = x2
    x2 = array[i]
  }
  return counter
}

function sort (array) {
  let newArray = []
  while(arr.length > 0){
     nominasi = arr[0]
     index = 0
     for(let i = 1 ; i < arr.length; i++){
         if(arr[i] < nominasi){
             nominasi = arr[i]
             index = [i]
         }
     }
     newArray.push(nominasi)
     arr.splice(index,1)
  }
  return newArray
}