function piccolo(input) {
    let parkingLots = {};

    for (let row of input) {
       let [direction, carNumber] = row.split(', ');

       direction === 'IN'
       ? parkingLots[carNumber] = true
       : delete parkingLots[carNumber];
    }

    if (Object.values(parkingLots).length !== 0) {
        Object.keys(parkingLots)
            .sort((a, b) => a.localeCompare(b))
            .forEach(item => console.log(item));
    } else {
        console.log(`Parking Lot is Empty`)
    }
}