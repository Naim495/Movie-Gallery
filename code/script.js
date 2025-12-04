// script.js

// Movie data
const movies = [
    { title: 'Avengers Endgame', category: 'Hollywood', img: 'images/post1.jpg' },
    { title: 'Underground', category: 'Hollywood', img: 'images/post2.jpg' },
    { title: 'All of Us Are Dead', category: 'Korean', img: 'images/alll of us are dead.jpg' },
    { title: 'Uncharted', category: 'Hollywood', img: 'images/uncharted.jpg' },
    { title: 'Doctor Strange', category: 'Hollywood', img: 'images/doctor-strange-2.jpg' },
    { title: 'X-Men', category: 'Hollywood', img: 'images/x-men.jpg' },
    { title: 'Money Heist', category: 'Series', img: 'images/money-heist.jpg' },
    { title: 'Ms Marvel', category: 'Hollywood', img: 'images/ms marvel.webp' },
    { title: 'Red Notice', category: 'Hollywood', img: 'images/red notice.jpg' },
    { title: 'Sandman', category: 'Series', img: 'images/sandman.webp' },
    { title: 'Spiderman No Way Home', category: 'Hollywood', img: 'images/spiderman no way home.jpg' },
    { title: 'Squid Game', category: 'Korean', img: 'images/squid game.jpg' }
];

const movieContainer = document.getElementById('movieContainer');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-btn');

// Function to display movies
function displayMovies(movieList) {
    movieContainer.innerHTML = '';
    movieList.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';

        movieCard.innerHTML = `
            <img src="${movie.img}" alt="${movie.title}" />
            <p>${movie.title}</p>
        `;

        movieContainer.appendChild(movieCard);
    });
}

// Initial display of all movies
displayMovies(movies);

// Search functionality
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = movies.filter(movie => movie.title.toLowerCase().includes(query));
    displayMovies(filtered);
});

// Category filter
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        if (category === 'all') {
            displayMovies(movies);
        } else {
            const filtered = movies.filter(movie => movie.category === category);
            displayMovies(filtered);
        }
    });
});

// Align category buttons with search bar
const header = document.querySelector('header');
const categoryContainer = document.createElement('div');
categoryContainer.style.display = 'flex';
categoryContainer.style.gap = '0.5rem';
categoryContainer.style.alignItems = 'center';
categoryButtons.forEach(btn => categoryContainer.appendChild(btn));
header.appendChild(categoryContainer);