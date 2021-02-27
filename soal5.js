/*
Kriteria Password kuat:
    1. Memiliki minimal 2 huruf besar 
    2. Memiliki minimal 5 huruf kecil 
    3. Memiliki minimal special character (@#$%^&*()-+)
    4. Memiliki minimal 2 angka 
    5. Berjumlah lebih dari 10 karakter tetapi tidak lebih dari 20 karakter 
    6. Tidak boleh memiliki karakter berulang lebih dari 2x di dalam 1 password

cth 
Google12#4 -> Salah karena huruf o berulang lebih dari 2x
17Februari2021! -> Salah karena angka 2 berulang lebih dari 2x
Lar1P4g! -> Salah karena kurang dari 10 karakter
Kompas1702! -> benar
B4nD3R Ja!L -> benar
*/

function chechUpperCase (pass) {
  let ishaveCapital = false
  let capitalFreq = 0
  for(let i = 0; i < pass.length; i++) {
    if(pass[i] === pass[i].toUpperCase()) {
      capitalFreq++
    }
  }
  if (capitalFreq >= 2) {
    ishaveCapital = true
  }
  return ishaveCapital
}

function checkLowerCase (pass) {
  let ishave5Lower = false
  let lowerFreq = 0
  for(let i = 0; i < pass.length; i++) {
    if(pass[i] === pass[i].toLowerCase()) {
      lowerFreq++
    }
  }
  if (lowerFreq >= 2) {
    ishave5Lower = true
  }
  return ishave5Lower
}
function checkHaveSpecialCharacter (pass) {
  const specialCharacter = '!@#$%^&*()-+'
  let isHaveSpecialCharacter = false
  for(let i = 0; i < pass.length; i++) {
    for(let j = 0; j < specialCharacter.length; j++) {
      if(pass[i] === specialCharacter[j]) {
        isHaveSpecialCharacter = true
      }
    }
  }
  return isHaveSpecialCharacter
}

function checkHaveNumber (pass) {
  let isHaveNumber = false 
  let freq = 0
  for(let i = 0; i < pass.length; i++) {
    if(Number(pass[i]) || Number(pass[i]) === 0) {
      freq++
    }
  }
  if(freq >= 2) {
    isHaveNumber = true
  }
  return isHaveNumber
}
function checkLength (pass) {
  let isPass
  if(pass.length < 10 || pass.length > 20) {
    isPass = false
  } else {
    isPass = true
  }
  return isPass
}

function checkKataBerulang (pass) {
  let obj = {}
  for(let i = 0; i < pass.length; i++) {
    let key = pass[i].toLowerCase()
    if(obj[key]) {
      obj[key]++
    } else {
      obj[key] = 1
    }
  }
  let arrayOfValue = Object.values(obj)
  let arrayOfPerulangan = arrayOfValue.filter(el => el > 1) 
  if(arrayOfPerulangan.length > 1) {
    return false
  } else {
    return true
  }
}

function checkPassword (password) {
  let isHaveUpperCase = chechUpperCase(password)
  let isHaveLowerCase = checkLowerCase(password)
  let isHaveSpecialCharacter = checkHaveSpecialCharacter(password)
  let isHaveNumber = checkHaveNumber(password)
  let isLengthPass = checkLength(password)
  let isNotHaveLoop = checkKataBerulang(password)
  let result = ''
  if(isHaveUpperCase && isLengthPass && isHaveLowerCase && isHaveSpecialCharacter && isHaveNumber && isNotHaveLoop) {
    result = "benar"
  }
  if(!isHaveUpperCase) {
    result += "salah karena tidak mimiliki huruf besar min 2 "
  }
  if(!isLengthPass) {
    result += "salah karena panjang minimal 10 maksimal 20 "
  }
  if(!isHaveLowerCase) {
    result += "salah karena tidak memiliki huruf kecil min 2 "
  }
  if(!isHaveSpecialCharacter) {
    result += "salah karena tidak mimiliki special character"
  }
  if(!isHaveNumber) {
    result += "salah karena tidak mimiliki angka min 2 "
  }
  if(!isNotHaveLoop) {
    result += "salah karena terdapat perulangan character "
  }
  return result
}

let password = 'B4nD3R Ja!L'
console.log(checkPassword(password))