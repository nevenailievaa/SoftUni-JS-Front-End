function charactersInRange(charA, charB) {
    const charANumber = charA.charCodeAt()
    const charBNumber = charB.charCodeAt()
    let result = []

    for (let i = Math.min(charANumber, charBNumber) + 1; i < Math.max(charANumber, charBNumber); i++) {
        result.push(String.fromCharCode(i))
    }

    console.log(result.join(' '))
}