/*
Creating Variables
Hamburger Menu click funciton

const HamburgerButton = document.querySelector('#HamburgerIcon');
const HamburgerMenuContainer = document.querySelector('#HamburgerMenuContainer');

HamburgerButton.addEventListener('click', () => {
    const toggleHamburgerMenu = HamburgerMenuContainer.style.display;
    if (toggleHamburgerMenu === '' || toggleHamburgerMenu === 'none') {
        HamburgerMenuContainer.style.display = 'block';
        HamburgerMenuContainer.classList.remove('menu-slide-up');
        HamburgerMenuContainer.classList.add('menu-slide-down');
    } else {
        HamburgerMenuContainer.style.display = 'none';
        HamburgerMenuContainer.classList.remove('menu-slide-down');
        HamburgerMenuContainer.classList.add('menu-slide-up');
    }
})
*/

// Hamburger Menu click funcitonallity
$(document).ready(function(){
    const HamburgerButton = $('#HamburgerIcon');
    const HamburgerMenuContainer = $('#HamburgerMenuContainer');
        HamburgerButton.on('click', () => {
        HamburgerMenuContainer.slideToggle(1000);
        console.log('Play button clicked');
        });
    }

);

// Latest releases home page play and pause button functionallity
const PlayButtons = document.querySelectorAll('.latestReleasesPlayButton');
const FooterBox = document.querySelector('#FooterBox');

PlayButtons.forEach(function(button){
    button.addEventListener('click', function(){
        // Checking classes of play and pause
        if(button.classList.contains('fa-play')){
            button.classList.remove('fa-play');
            button.classList.add('fa-pause');
            FooterBox.style.display = 'block';
        }else{
            button.classList.remove('fa-pause');
            button.classList.add('fa-play');
            FooterBox.style.display = 'none';
        }
    });
});


// Artist play button functionallity
const ArtistPlayButton = document.querySelector('.ArtistPlayButton');

// Checking if artistplaybutton is present in targeted page
if(ArtistPlayButton){
    ArtistPlayButton.addEventListener('click', () => {
        if(ArtistPlayButton.classList.contains('fa-play')){
            ArtistPlayButton.classList.remove('fa-play');
            ArtistPlayButton.classList.add('fa-pause');
        }else{
            ArtistPlayButton.classList.remove('fa-pause');
            ArtistPlayButton.classList.add('fa-play');
        }
    });

};

// Latest releases more options button click functionallity
const moreOptionsButtons = document.querySelectorAll('.moreOptions');

moreOptionsButtons.forEach(function(moreOptionsButton) {
    
    try{
        const moreOptionsListParent = moreOptionsButton.nextElementSibling;
    const moreOptionsList = moreOptionsListParent.nextElementSibling;

    moreOptionsButton.addEventListener('click', () => {
        if (moreOptionsList.style.display === 'none' || moreOptionsList.style.display === '') {
            moreOptionsList.style.display = 'block';
        } else {
            moreOptionsList.style.display = 'none';
        }
        });
    }
    catch(error){
        console.warn('Warning');
    }
});

// Goto top button functionallity
document.addEventListener('DOMContentLoaded', ()=> {
    const GoToTop = document.querySelector('.GoToTopContainer');
    const GoToTopContent = document.querySelector('.GoToTopContent')
    const PopularArtistsContainer = document.querySelector('.PopularArtistsContainer');

    window.addEventListener('scroll', ()=> {
        const rect = PopularArtistsContainer.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if(scrollTop > rect.top + window.pageYOffset){
            GoToTop.style.display = 'block';
        }else{
            GoToTop.style.display = 'none';
        }
    });

        // For smooth effect 
        GoToTop.querySelector('.GoToTopContent').addEventListener('click', (e)=> {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });
});

















