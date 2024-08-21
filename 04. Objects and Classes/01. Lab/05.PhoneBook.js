function phoneBook (list) {
    let phoneBook = {}

    for (let i = 0; i < list.length; i++) {
        result = list[i].split(' ')
        name = result[0]
        number = result[1]
        phoneBook[name] = number

    }
    for (const phoneBookKey in phoneBook) {
        console.log(`${phoneBookKey} -> ${phoneBook[phoneBookKey]}`)
    }
}