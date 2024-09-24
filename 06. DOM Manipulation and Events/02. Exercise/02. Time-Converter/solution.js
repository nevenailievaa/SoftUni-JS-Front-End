function attachEventsListeners() {
    let dayInputElement = document.getElementById("days");
    let dayConvertButton = document.getElementById("daysBtn");
  
    let hourInputElement = document.getElementById("hours");
    let hourConvertButton = document.getElementById("hoursBtn");
  
    let minuteInputElement = document.getElementById("minutes");
    let minuteConvertButton = document.getElementById("minutesBtn");
  
    let secondInputElement = document.getElementById("seconds");
    let secondConvertButton = document.getElementById("secondsBtn");
  
    dayConvertButton.addEventListener('click', function(){
        let dayValue = Number(dayInputElement.value);
        hourInputElement.value = dayValue * 24;
        minuteInputElement.value = dayValue * 1440;
        secondInputElement.value = dayValue * 86400;
    })
  
    hourConvertButton.addEventListener('click', function(){
        let hourValue = Number(hourInputElement.value);
        dayInputElement.value = hourValue / 24;
        minuteInputElement.value = hourValue * 60;
        secondInputElement.value = hourValue * 3600;
    })

    minuteConvertButton.addEventListener('click', function(){
        let minuteValue = Number(minuteInputElement.value);
        dayInputElement.value = minuteValue / 1440;
        hourInputElement.value = minuteValue / 60;
        secondInputElement.value = minuteValue * 60;
    })

    secondConvertButton.addEventListener('click', function(){
        let secondValue = Number(secondInputElement.value);
        dayInputElement.value = secondValue / 86400;
        hourInputElement.value = secondValue / 3600;
        minuteInputElement.value = secondValue / 60;
    })
  }
  