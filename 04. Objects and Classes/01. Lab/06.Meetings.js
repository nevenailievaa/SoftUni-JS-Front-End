function meetings (input) {
    let meetings = {};

    for (let elem of input) {
        let [day, name] = elem.split(' ');

        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`)
        }
    }
    
    for (meet in meetings) {
        console.log(`${meet} -> ${meetings[meet]}`);      
    }
}