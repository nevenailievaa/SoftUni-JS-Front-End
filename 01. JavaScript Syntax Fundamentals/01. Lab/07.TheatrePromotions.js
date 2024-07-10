function theatrePromotions(day, age) {
    let price = 0;
    let isInvalid = false;

    //Calculations
    if (day == 'Weekday') {
        if (0 <= age && age <= 18) {
            price = 12;
        } else if (18 < age && age <= 64) {
            price = 18;
        } else if (64 < age && age <= 122) {
            price = 12;
        } else {
            isInvalid = true;
        }
    } else if (day == 'Weekend') {
        if (0 <= age && age <= 18) {
            price = 15;
        } else if (18 < age && age <= 64) {
            price = 20;
        } else if (64 < age && age <= 122) {
            price = 15;
        } else {
            isInvalid = true;
        }
    } else if (day == 'Holiday') {
        if (0 <= age && age <= 18) {
            price = 5;
        } else if (18 < age && age <= 64) {
            price = 12;
        } else if (64 < age && age <= 122) {
            price = 10;
        } else {
            isInvalid = true;
        }
    } else {
        isInvalid = true;
    }

    //Output
    if (isInvalid) {
        console.log('Error!');
    } else {
        console.log(`${price}$`);
    }
}