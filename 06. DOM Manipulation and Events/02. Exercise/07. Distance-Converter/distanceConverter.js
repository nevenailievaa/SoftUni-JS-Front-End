function attachEventsListeners() {
    const units = {
      'm': 1,
      'km': 1000,
      'cm': 0.01,
      'mm': 0.001,
      'mi': 1609.34,
      'yrd': 0.9144,
      'ft': 0.3048,
      'in': 0.0254,
    };
  
    const convertButton = document.getElementById('convert');
  
    convertButton.addEventListener('click', function () {
      const inputDistance = parseFloat(document.getElementById('inputDistance').value);
      const inputUnits = document.getElementById('inputUnits').value;
      const outputUnits = document.getElementById('outputUnits').value;
  
      const inputValueInMeters = inputDistance * units[inputUnits];
      const result = inputValueInMeters / units[outputUnits];
  
      document.getElementById('outputDistance').value = result;
    });
  }
  