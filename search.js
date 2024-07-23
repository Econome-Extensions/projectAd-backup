$(document).ready(function() {
    const apiKey = 'cc8c9b7e031be2183ce68b254b39ddfd';
    const apiUrl = 'https://api.themoviedb.org/3';

    $('#searchForm').submit(function(e) {
        e.preventDefault();
        const searchTerm = $('#searchInput').val().trim();
        if (searchTerm) {
            window.location.href = `search.html?query=${encodeURIComponent(searchTerm)}`;
        } else {
            alert('Please enter a search term.');
        }
    });
});
