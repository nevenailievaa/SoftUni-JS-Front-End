function convertToObject (JSONobject) {
    let object = JSON.parse(JSONobject);

    for (key in object) {
        console.log(`${key}: ${object[key]}`);
    }
}