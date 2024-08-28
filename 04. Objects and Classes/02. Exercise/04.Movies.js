function movies (commandsList) {

    class Movie {
        constructor(name, director, date){
            this.name = name,
            this.director = director
            this.date = date
        }
    }

    let movies = [];

    for (let i = 0; i < commandsList.length; i++) {

        if (commandsList[i].includes('addMovie')) {
            let info = commandsList[i].split('addMovie ');
            let movieName = info[1];
            movies.push(new Movie(movieName, null, null));

        } else if (commandsList[i].includes('directedBy')) {
            let info = commandsList[i].split(' directedBy ');
            let movieName = info[0];
            let directorName = info[1];

            let movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.director = directorName;
            }

        } else if (commandsList[i].includes('onDate')) {
            let info = commandsList[i].split(' onDate ');
            let movieName = info[0];
            let date = info[1];

            let movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }

    movies.filter(movie => movie.director && movie.date)
        .forEach(movie =>console.log(JSON.stringify(movie)));
}