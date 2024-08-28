function towns (townsList) {
    for (let i = 0; i < townsList.length; i++) {
        let [town, latitude, longitude] = townsList[i].split(' | ');
        
        let currentTownInfo = {
			town: town,
			latitude: Number(latitude).toFixed(2),
			longitude: Number(longitude).toFixed(2),
		};
		console.log(currentTownInfo);   
    }
}