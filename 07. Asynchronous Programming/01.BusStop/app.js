function getInfo() {
    //console.log('// TODO:');

    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';

    const inputStopIdElement = document.getElementById('stopId');
    const divStopNameElement = document.getElementById('stopName');
    const ulBusesElement = document.getElementById('buses');

    const stopId = inputStopIdElement.value;
    const url = `${baseUrl}/${stopId}`;

    if (!stopId) {
        clear();
        divStopNameElement.textContent = 'Error'
        return;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const busStopName = data.name;
            const buses = data.buses;

            clear();

            divStopNameElement.textContent = busStopName;
            for (const busId in buses) {
                const liElement = document.createElement('li');
                liElement.textContent = `Bus ${busId} arrives in ${buses[busId]} minutes`;
                ulBusesElement.appendChild(liElement);
            }
        })
        .catch(error => {
            clear();
            divStopNameElement.textContent = 'Error';
        });

    function clear() {
        divStopNameElement.textContent = '';
        ulBusesElement.innerHTML = '';
    }
}


