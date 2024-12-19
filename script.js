// Select the container of the cards
const cardsContainer = document.querySelector('.cards');
const albumscards=document.querySelector('.albums-cards');
const radioCards=document.querySelector('.radio-cards');
const featuredCards=document.querySelector('.featured-cards');
const playlistsCards=document.querySelector('.playlist-cards');
const episodesCards=document.querySelector('.episodes-cards');




let hamburgericon=document.getElementsByClassName('hamburger');

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
   

}

hamburgericon[0].addEventListener('click',toggleSidebar);

// Function to handle the removal/addition of the last cards
function handleResize() {
    const windowWidth = window.innerWidth;
    const allCards = Array.from(cardsContainer.querySelectorAll('.card'));

    const allAlbumsCards=Array.from(albumscards.querySelectorAll('.album-block'));
    const allRadioCards=Array.from(radioCards.querySelectorAll('.radio-block'))
    const allFeaturedCards=Array.from(featuredCards.querySelectorAll('.featured-block'))
    const allPlaylistCards=Array.from(playlistsCards.querySelectorAll('.playlist-block'))
    const allEpisodeCards=Array.from(episodesCards.querySelectorAll('.episode-block'))


    // Reset display for all cards (ensure all cards are visible before applying conditions)

    allCards.forEach(card => {
        card.style.display = '';
    });

    allAlbumsCards.forEach(card => {
        card.style.display = '';
    });


    allRadioCards.forEach(card => {
        card.style.display = '';
    });

    allFeaturedCards.forEach(card => {
        card.style.display = '';
    });

    allPlaylistCards.forEach(card => {
        card.style.display = '';
    });

    allEpisodeCards.forEach(card => {
        card.style.display = '';
    });


    if (windowWidth < 1200 && windowWidth >= 992) {
        removeLastNCards(1);
    } else if (windowWidth < 992 && windowWidth >= 768) {
        removeLastNCards(2);
    } else if (windowWidth < 768 && windowWidth >= 576) {
        removeLastNCards(3);
    } else if (windowWidth < 576) {
        removeLastNCards(4);
    }

    // Adjust the width of the remaining cards
    adjustCardWidth();
}

// Function to remove the last N cards
function removeLastNCards(n) {
    const allCards = Array.from(cardsContainer.querySelectorAll('.card'));
    const numCards = allCards.length;

    const allAlbumsCards=Array.from(albumscards.querySelectorAll('.album-block'));
    const numAlbumCards = allAlbumsCards.length;


    const allRadioCards=Array.from(radioCards.querySelectorAll('.radio-block'))
    const numRadioCards = allRadioCards.length;
    
    const allFeaturedCards=Array.from(featuredCards.querySelectorAll('.featured-block'))
    const numFeaturedCards = allFeaturedCards.length;
    
    const allPlaylistCards=Array.from(playlistsCards.querySelectorAll('.playlist-block'))
    const numPlaylistCards = allPlaylistCards.length;
    
    const allEpisodeCards=Array.from(episodesCards.querySelectorAll('.episode-block'));
    const numEpisodeCards = allEpisodeCards.length;


    for (let i = 0; i < n; i++) {
        if (numCards - i - 1 >= 0) {
            allCards[numCards - i - 1].style.display = 'none';
            allAlbumsCards[numAlbumCards - i - 1].style.display = 'none';
            allRadioCards[numRadioCards - i - 1].style.display = 'none';
            allPlaylistCards[numPlaylistCards - i - 1].style.display = 'none';
            allEpisodeCards[numEpisodeCards - i - 1].style.display = 'none';

        }
    }


        for (let i = 0; i < n-1; i++) {
            if (numFeaturedCards - i-1 >= 0) {
                allFeaturedCards[numFeaturedCards - i - 1].style.display = 'none';
            }
        }
}

// Function to adjust the card width
function adjustCardWidth() {
    const visibleCards = cardsContainer.querySelectorAll('.card:not([style*="display: none"])');
    const numVisibleCards = visibleCards.length;

    const visibleAlbums=albumscards.querySelectorAll('.album-block:not([style*="display:none"])')
    const numVisibleAlbums=visibleAlbums.length

    const visibleRadios=radioCards.querySelectorAll('.radio-block:not([style*="display:none"])')
    const numVisibleRadios=visibleRadios.length;

    const visibleFeatured =featuredCards.querySelectorAll('.featured-block:not([style*="display:none"])')
    const numVisibleFeatured=visibleFeatured.length

    const visiblePlaylists=playlistsCards.querySelectorAll('.playlist-block:not([style*="display:none"])')
    const numVisiblePlaylists=visiblePlaylists.length

    const visibleEpisodes=episodesCards.querySelectorAll('.episode-block:not([style*="display:none"])')
    const numVisibleEpisodes=visibleEpisodes.length


 
    // visibleCards.forEach(card => {
    //     card.style.flex = `1 1 calc(100% / ${numVisibleCards} - 20px)`; // Adjust width based on the number of visible cards
    // });

        visibleCards.forEach(card => {
            card.style.flex = `1 1 calc(100% / ${numVisibleCards} - 20px)`; // Adjust width based on the number of visible cards
        });    

        visibleAlbums.forEach(card=>{
            card.style.flex = `1 1 calc(100% / ${numVisibleCards} - 20px)`; // Adjust width based on the number of visible cards
        })
        visibleRadios.forEach(card=>{
            card.style.flex = `1 1 calc(100% / ${numVisibleRadios} - 20px)`; // Adjust width based on the number of visible cards
        })
          visiblePlaylists.forEach(card=>{
            card.style.flex = `1 1 calc(100% / ${numVisiblePlaylists} - 20px)`; // Adjust width based on the number of visible cards
        })

        visibleFeatured.forEach(card=>{
            card.style.flex = `1 1 calc(100% / ${numVisibleFeatured} - 20px)`; // Adjust width based on the number of visible cards
        })

        visibleEpisodes.forEach(card=>{
            card.style.flex = `1 1 calc(100% / ${numVisibleEpisodes} - 20px)`; // Adjust width based on the number of visible cards
        })
}

// Run the function once to check the initial size
handleResize();

// Attach the function to the resize event
window.addEventListener('resize', handleResize);
