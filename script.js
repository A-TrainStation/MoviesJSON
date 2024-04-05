class Movie {
    constructor(movieID, title, genre, length, rating) {
        this.movieID = movieID;
        this.title = title;
        this.genre = genre;
        this.length = length;
        this.rating = rating;
    }

    // Method to display movie details
    showMovie() {
        return `Movie ID: ${this.movieID}\nTitle: ${this.title}\nGenre: ${this.genre}\nLength: ${this.length}\nRating: ${this.rating}`;
    }
}

async function MyFavoriteMovies() {
    try {
        const response = await fetch('movies.json'); // Fetch movie data from JSON file
        const moviesData = await response.json(); // Parse JSON data

        const moviesList = document.getElementById('moviesData'); // Get reference to the <ul> element

        const movies = moviesData.Movies.map(movieData => new Movie(movieData.MovieID, movieData.Title, movieData.Genre, movieData.Length, movieData.Rating));

        const randomIndex = Math.floor(Math.random() * movies.length); // Get a random index
        const randomMovie = movies[randomIndex]; // Get a random movie from the array

        const listItem = document.createElement('li'); // Create a new <li> element
        listItem.textContent = randomMovie.showMovie(); // Set the text content of the <li> to the movie details

        moviesList.appendChild(listItem); // Append the <li> to the <ul> element
    } catch (error) {
        console.log('Error reading movies.json:', error);
    }
}

MyFavoriteMovies();
