// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArr = moviesArray.map((movie) => movie.director)
    return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {

    const spielDramas = moviesArray.filter((movies) => movies.director == 'Steven Spielberg' && movies.genre.includes('Drama'))

    let spielbergCount = spielDramas.length;
    return spielbergCount;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) { return 0 };

    const sum = moviesArray.reduce((sum, movie) => {
        if (movie.score) {
            return sum + movie.score
        } else { return sum }
    }, 0);

    let avg = sum / moviesArray.length;

    return Math.round(avg * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {

    const dramas = moviesArray.filter((movies) => movies.genre.includes('Drama'))

    if (!dramas.length) { return 0 };

    const dramaSum = dramas.reduce((sum, movie) => { return sum + movie.score }, 0);
    let dramaAvg = dramaSum / dramas.length;
    return +dramaAvg.toFixed(2);

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let sortedArray = [...moviesArray];

    sortedArray.sort(function (a, b) {
        if (a.year < b.year) return 1;
        if (a.year > b.year) return -1;
        if (a.year === b.year) {
            a.title.localeCompare(b.title);
        }
    })

    return sortedArray.reverse();
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const sortedMovies = [...moviesArray];

    sortedMovies.sort((a, b) => a.title.localeCompare(b.title));

    const titles = sortedMovies.map((movie) => movie.title)
    return titles.splice(0, 20)
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {



    const timeArr = moviesArray.map(function (movie) {
        let duration = movie.duration.split('h');
        // console.log(movie);
        let hours = Number(duration[0]) * 60;
        let minutes = duration[1].replace(' ', '');
        minutes = Number(duration[1].replace('min', ''));
        let properFormat = hours + minutes;
        return { ...movie, duration: properFormat };
    })

    // console.log(timeArr);
    return timeArr;

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) { return null };

    let sums = {}
    let counts = {};
    let result = [];
    let year = '';

    for (let i = 0; i < moviesArray.length; i++) {
        year = moviesArray[i].year;
        if (!sums[year]) {
            sums[year] = 0;
            counts[year] = 0;
        }
        sums[year] += moviesArray[i].score;
        counts[year]++;
    }
    console.log('sums', sums);

    for (year in sums) {
        result.push({ year: year, avgScore: Number(sums[year] / counts[year]) })
    }
    console.log('aaa', counts);

    console.log(result);
    let sortedResult = result.sort((year1, year2) => { return year1.avgScore - year2.avgScore }).reverse();
    console.log('s', sortedResult);
    return `The best year was ${sortedResult[0].year} with an average score of ${sortedResult[0].avgScore}`;

}
