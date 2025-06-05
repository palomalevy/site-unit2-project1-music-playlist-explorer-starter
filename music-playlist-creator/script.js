let playlists = document.querySelectorAll(".playlist")

for (let playlist of playlists) {
    playlist.addEventListener('click', function (event){
        console.log(event.target)

        let classTarget = event.target;
        //console.log(classTarget.getElementById());

        let popup = document.querySelector('.popup');

        let title = playlist.querySelector('h2').innerText;
        console.log(title);
        let image = playlist.querySelector('img').src;
        let createdBy = playlist.querySelector('p').innerText;

        document.getElementById('Playlist Title').innerText = title;
        document.getElementById('Playlist Image').src = image;
        document.getElementById('Created By').innerText = createdBy;

        // let popupTitle = playlist.querySelector('.popup-header h2');
        // let popupImage = playlist.querySelector('.popup-header img');
        // let popupCreator = playlist.querySelector('.popup-header p');

        // if (popupTitle) popupTitle.innertext = title;
        // if (popupImage) popupImage.src = image;
        // if (popupCreator) popupCreator.innerText = createdBy

        popup.style.display = 'flex';
    })
}

let closeButton = document.querySelector('.close');
closeButton.addEventListener('click', function() {
    let popup = document.querySelector('.popup');
    popup.style.display = 'none';
})

function openFeatureTab() {
    console.log('feature.click')
}

function openAllTab() {
    console.log('feature.all')
}