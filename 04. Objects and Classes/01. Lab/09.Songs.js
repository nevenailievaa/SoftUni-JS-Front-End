function songs (arrayInfo) {

    class Song {
        constructor(type, name, time) {
            this.type = type,
            this.name = name,
            this.time = time
        }
    }

    let songs = [];
    let songsCount = arrayInfo[0];
    let typeList = arrayInfo[arrayInfo.length - 1];

    for (let i = 1; i <= songsCount; i++) {
        let [type, name, time] = arrayInfo[i].split('_');
        songs.push(new Song(type, name, time));
    }


    if (typeList == 'all') {
        for (song of songs) {
            console.log(song.name);
        }
    } else {
        for (song of songs) {
            if (song.type == typeList) {
                console.log(song.name);
            }
        }
    }
}