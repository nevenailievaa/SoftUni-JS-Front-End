function attachEvents() {
    const locationEl = document.getElementById('location');
    const submitEl = document.getElementById('submit');
    const forecastDiv = document.getElementById('forecast');
    const currentForecastDiv = document.getElementById('current');
    const upcomingForecastDiv = document.getElementById('upcoming');

    function forecastHandler() {
        function displayCurrentForecast() {
            fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationCode}`)
            .then(response => response.json())
            .then(response => {
                let {name, forecast} = response;                   

                const newForecastDiv = document.createElement('div');
                newForecastDiv.classList.add('forecasts');

                let symbolIcon = '';

                if (forecast.condition === 'Sunny') {
                    const temporaryDiv = document.createElement('div');
                    temporaryDiv.innerHTML = '&#x2600;';
                    symbolIcon = temporaryDiv.textContent;
                }
                else if (forecast.condition === 'Partly Sunny') {
                    const temporaryDiv = document.createElement('div');
                    temporaryDiv.innerHTML = '&#x26C5;';
                    symbolIcon = temporaryDiv.textContent;
                }
                else if (forecast.condition === 'Overcast') {
                    const temporaryDiv = document.createElement('div');
                    temporaryDiv.innerHTML = '&#x2601;';
                    symbolIcon = temporaryDiv.textContent;
                }
                else if (forecast.condition === 'Rain') {
                    const temporaryDiv = document.createElement('div');
                    temporaryDiv.innerHTML = '&#x2614;';
                    symbolIcon = temporaryDiv.textContent;
                }

                const symbolSpan = document.createElement('span');
                symbolSpan.classList.add('condition');
                symbolSpan.classList.add('symbol');
                symbolSpan.textContent = symbolIcon;
                
                const dataSpan = document.createElement('span');
                dataSpan.classList.add('condition');
                
                const nameSpan = document.createElement('span');
                nameSpan.textContent = name;
                nameSpan.classList.add('forecast-data');

                const temporaryDiv = document.createElement('div');
                temporaryDiv.innerHTML = '&#176;';
                const degreeSymbol = temporaryDiv.textContent;

                const tempSpan = document.createElement('span');
                tempSpan.textContent = `${forecast.low}${degreeSymbol}/${forecast.high}${degreeSymbol}`;
                tempSpan.classList.add('forecast-data');

                const conditionSpan = document.createElement('span');
                conditionSpan.textContent = forecast.condition;
                conditionSpan.classList.add('forecast-data');

                dataSpan.append(nameSpan, tempSpan, conditionSpan);

                newForecastDiv.append(symbolSpan, dataSpan);

                currentForecastDiv.append(newForecastDiv);
            })
            .catch(() => {
                forecastDiv.textContent = 'Error';
            });
        }

        function displayUpcomingForecast() {
            fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`)
            .then(response => response.json())
            .then(response => {
                let {name, forecast} = response;    
                
                const newForecastDiv = document.createElement('div');
                newForecastDiv.classList.add('forecast-info');

                forecast.forEach(f => {                        
                    const upcomingSpan = document.createElement('span');
                    upcomingSpan.classList.add('upcoming');
                    
                    let symbolIcon = '';

                    if (f.condition === 'Sunny') {
                        const temporaryDiv = document.createElement('div');
                        temporaryDiv.innerHTML = '&#x2600;';
                        symbolIcon = temporaryDiv.textContent;
                    }
                    else if (f.condition === 'Partly sunny') {
                        const temporaryDiv = document.createElement('div');
                        temporaryDiv.innerHTML = '&#x26C5;';
                        symbolIcon = temporaryDiv.textContent;
                    }
                    else if (f.condition === 'Overcast') {
                        const temporaryDiv = document.createElement('div');
                        temporaryDiv.innerHTML = '&#x2601;';
                        symbolIcon = temporaryDiv.textContent;
                    }
                    else if (f.condition === 'Rain') {
                        const temporaryDiv = document.createElement('div');
                        temporaryDiv.innerHTML = '&#x2614;';
                        symbolIcon = temporaryDiv.textContent;
                    }

                    const symbolSpan = document.createElement('span');
                    symbolSpan.classList.add('symbol');
                    symbolSpan.textContent = symbolIcon;        
                    
                    const temporaryDiv = document.createElement('div');
                    temporaryDiv.innerHTML = '&#176;';
                    const degreeSymbol = temporaryDiv.textContent;

                    const tempSpan = document.createElement('span');
                    tempSpan.textContent = `${f.low}${degreeSymbol}/${f.high}${degreeSymbol}`;
                    tempSpan.classList.add('forecast-data');

                    const conditionSpan = document.createElement('span');
                    conditionSpan.textContent = f.condition;
                    conditionSpan.classList.add('forecast-data');

                    upcomingSpan.append(symbolSpan, tempSpan, conditionSpan);

                    newForecastDiv.append(upcomingSpan);
                });
                
                upcomingForecastDiv.append(newForecastDiv);
            })
            .catch(() => {
                forecastDiv.textContent = 'Error';
            });
        }

        forecastDiv.style.display = 'block';

        let locationName = locationEl.value;
        let locationCode = '';
        
        fetch('http://localhost:3030/jsonstore/forecaster/locations')
        .then(response => response.json())
        .then(response => {
            response.forEach(r => {
                if (r.name === locationName) {
                    locationCode = r.code;                   
                }
            });  
            
            displayCurrentForecast();
            displayUpcomingForecast();
        });        
    }

    submitEl.addEventListener('click', forecastHandler);
}

attachEvents();