var Songs =
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
];

function InitializeWebSite(){
    AmplitudePlayersInit();
    AmplitudeInit();
    CloseLoadingHover();
    
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
}

function AmplitudePlayersInit() {
    var songsNumber = Songs.length;
    var BeatsCardBody = document.getElementById("BeatsCardBody");
    var templateElement = document.getElementById("PlayerTemplate");

    for(var i = 0; i < songsNumber; i++){
        templateClone = templateElement.content.cloneNode(true);
        templateClone.querySelectorAll('[data-amplitude-song-index=""]').forEach(function(element) {
            $(element).attr("data-amplitude-song-index", this.valueOf());
        }, i)
        
        BeatsCardBody.append(templateClone);
    }
}

function AmplitudeInit() {
    Amplitude.init({
        "songs": Songs
    });
}

function CloseLoadingHover(){
    setTimeout(function() { $("#LoadingHover").fadeOut(800, function() {}); }, 400);
    setTimeout(function() { $("#Content").fadeIn(800, function() { console.timeEnd("LoadingTime"); }); }, 400);
}