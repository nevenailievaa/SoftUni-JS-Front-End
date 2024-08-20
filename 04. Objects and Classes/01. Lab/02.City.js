function city (object) {
    for (const property in object) {
        console.log(`${property} -> ${object[property]}`)
    }
}