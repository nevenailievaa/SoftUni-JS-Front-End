function vacation(peopleCount, groupType, weekDay) {
    let price;

    if (groupType == 'Students') {

        if (weekDay == 'Friday') {
            price = peopleCount * 8.45;
        } else if (weekDay == 'Saturday') {
            price = peopleCount * 9.80;
        }
        else if (weekDay == 'Sunday') {
            price = peopleCount * 10.46;
        }

        //Discount
        if (peopleCount >= 30) {
            price = price * 0.85;
        }
    } else if (groupType == 'Business') {
        
        //Discount
        if (peopleCount >= 100) {
            peopleCount -= 10;
        }

        if (weekDay == 'Friday') {
            price = peopleCount * 10.90;
        } else if (weekDay == 'Saturday') {
            price = peopleCount * 15.60;
        }
        else if (weekDay == 'Sunday') {
            price = peopleCount * 16;
        }
    }
    else if (groupType == 'Regular') {
        
        if (weekDay == 'Friday') {
            price = peopleCount * 15;
        } else if (weekDay == 'Saturday') {
            price = peopleCount * 20;
        }
        else if (weekDay == 'Sunday') {
            price = peopleCount * 22.50;
        }

        //Discount
        if (peopleCount >= 10 && peopleCount <= 20) {
            price = price * 0.95;
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}