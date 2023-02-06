function capToFront(str) {
  // 1. Split the string into an array of characthers
  // 2. Categorize uppercase and lowercase letters
  // 3. Merge both arrays into 1 by putting uppercase infront
  // 4. Return string with .join()

  arrStr = str.split('')

  const lowers = arrStr.filter((char) => char.toUpperCase() !== char)

  const uppers = arrStr.filter((char) => char.toUpperCase() === char)
   
    // console.log(lowers)
    // console.log(uppers)

    const mergedArr = [...uppers, ...lowers]
    const joinedStr = mergedArr.join('')

    return joinedStr
}

console.log(capToFront('hApPy')) // 'APhpy'
console.log(capToFront('moveMENT')) // 'MENTmove'
console.log(capToFront('shOrtCAKE')) // 'OCAKEshrt'