document.addEventListener("DOMContentLoaded", () => {
  getPlaylistInformation();
});

function getSongInformation(playlistID) {
    console.log('getting song info');
    const foundPlaylist = allPlaylists.find(playlist => playlist.id === playlistID);

    let songHTML = '';
    for(let songInfo of foundPlaylist.songs) {
        songHTML += `
            <div class="song">
                        <div class="songImage">
                            <img class="songImage" src="https://picsum.photos/200" alt="Song cover" width="100px">
                        </div>
                        <div class="songDetails">
                            <h3 class="songTitle">${songInfo.title}</h3>
                            <p class="artistName">${songInfo.artist}</p>
                            <p class="albumTitle">${songInfo.album}</p>
                            <p class="songDuration">${songInfo.duration}</p>
                        </div>
                    </div>
        `;
    }
    document.querySelector('.allSongs').innerHTML = songHTML;
};

function getPlaylistInformation() {
    console.log("getting information");
    const playlistBody = document.getElementById("playlist-body");
    allPlaylists.forEach((playlist) => {
        console.log(playlist);
        const playlistElem = createPlaylistElem(playlist);
        console.log(playlistElem);
        playlistBody.appendChild(playlistElem);
    });

    let playlists = document.querySelectorAll(".playlist");

    for (let playlistElem of playlists) {
        playlistElem.addEventListener("click", function (event) {
            console.log(event.target);

            if (event.target.classList.contains("heart-button")) {
                event.stopPropagation();
            } else {
                let popup = document.querySelector(".popup");

                let title = playlistElem.querySelector("h2").innerText;
                console.log(title);
                let image = playlistElem.querySelector("img").src;
                let createdBy = playlistElem.querySelector("p").innerText;

                document.getElementById("Playlist Title").innerText = title;
                document.getElementById("Playlist Image").src = image;
                document.getElementById("Created By").innerText = createdBy;

                getSongInformation(parseInt(playlistElem.id));
                console.log(playlistElem.id);
                
                popup.style.display = "flex";
            }
        });
    }
}


function createPlaylistElem(playlist) {
  console.log("creating playlist");
  const article = document.createElement("article");
  article.id = `${playlist.id}`
  article.className = "playlist";
  article.innerHTML = `
    <img src="https://picsum.photos/200" alt="" width="200px">
    <div class="playlist-name">
        <h2>${playlist.title}</h2>
        <p>${playlist.creator}</p>
    </div>
    <button class='heart-button' type="button">🤍<div id='like-counter'>
            <h3 id="likeCount">${playlist.likes}</h3>
        </div>
    </button>
    `;

    const heartButton = article.querySelector('.heart-button');

    const likeCounter = heartButton.querySelector('#like-counter');
    const likeNumber = likeCounter.querySelector('h3');

    let currentLikes = parseInt(likeNumber.textContent);
    let heartActive = false;

    // Changes like button when clicked and increments/decrements like count
    heartButton.addEventListener('click', () => {
        const childNodes = heartButton.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
            if (childNodes[i].nodeType === Node.TEXT_NODE) {
                if (childNodes[i].textContent === '🤍') {
                    childNodes[i].textContent = '💖';
                    heartActive = true;
                    currentLikes++;
                } else if (childNodes[i].textContent === '💖') {
                    childNodes[i].textContent = '🤍';
                    heartActive = false;
                    currentLikes--;
                }
            }
        }
        likeNumber.textContent = currentLikes.toString();
    });

    return article;
}

let closeButton = document.querySelector(".close");
closeButton.addEventListener("click", function () {
  let popup = document.querySelector(".popup");
  popup.style.display = "none";
});

function openFeatureTab() {
  console.log("feature.click");
}

function openAllTab() {
  console.log("feature.all");
}
