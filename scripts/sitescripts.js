function InitializeWebSite(){
    Amplitude.init({
        "songs":
        [
            {
                "name": "Garden Of Giants",
                "artist": "Rici",
                "album": "",
                "url": "songs/GardenOfGiants.mp3",
                "cover_art_url": "covers/No_Album.png"
            },
            {
                "name": "Buio",
                "artist": "Rici",
                "album": "",
                "url": "songs/Buio.mp3",
                "cover_art_url": "covers/No_Album.png"
            }
        ]
    });
    
    $('.amplitude-song-played-progress').click(function(e){
        var offset = this.getBoundingClientRect();
        var x = e.pageX - offset.left;

        Amplitude.setSongPlayedPercentage((parseFloat(x)/parseFloat(this.offsetWidth))*100);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    loadingCompleted();
}

function loadingCompleted(){
    setTimeout(function() { $("#LoadingHover").fadeOut(800, function() {}); }, 200);
    setTimeout(function() { $("#Content").fadeIn(800, function() {}); }, 200);
}