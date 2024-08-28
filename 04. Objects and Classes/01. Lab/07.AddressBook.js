function addressBook (list) {
    let addresses = {};

    for (let i = 0; i < list.length; i++) {
        let [name, address] = list[i].split(':');

        addresses[name] = address;
    }   

    for (name of Object.keys(addresses).sort()) {
        console.log(`${name} -> ${addresses[name]}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
   );