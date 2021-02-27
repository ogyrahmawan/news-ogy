const array = [1,2,3,4,5,1,4,6,8,10]

/*
algoritma
1. simpan total dengan nilai 0
2. lakukan looping dari index 0 hingga index terakhir pada array
3. tambahkan total dengan element dari tiap index
4. return dari nilai total
*/
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
  return obj
}

console.log(checkDuplicateData(array))