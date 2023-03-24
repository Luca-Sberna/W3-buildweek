
// Scomparsa sidebar destra
const closeButton = document.querySelector('.nascondiAnnunci');
const asideElement = document.querySelector('#cont-song');

closeButton.addEventListener('click', () => {
  asideElement.style.display = 'none';
});



// recupera l'id dell'album dai search params
const searchParams = new URLSearchParams(window.location.search);
const albumId = searchParams.get('id');

// recupera le informazioni sull'album dall'API
fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/75621062${albumId}`)
  .then(response => response.json())
  .then(album => {
    // popola la pagina HTML con le informazioni sull'album
    const albumImage = document.getElementById('album-image');
    albumImage.src = album.cover_medium;
    albumImage.alt = album.title;

    const albumTitle = document.querySelector('.title-song');
    albumTitle.innerText = album.title;

    const albumArtist = document.querySelector('.artistiNomi');
    albumArtist.innerText = album.artist.name;

  })
  .catch(error => console.log(error));




document.addEventListener("DOMContentLoaded", () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/album/75621062")
    .then(response => response.json())
    .then(data => {
      const tracks = data.tracks.data;
      const cardMain = document.querySelector('#card-main');
      cardMain.innerHTML = "";

      tracks.slice(0, 6).forEach((track) => {
        const sectionCard = `
            <div class="col mb-2 p-0 px-2">
              <div class="card bg-transparent">
                <div class="first-section col p-0 d-flex align-items-center rounded">
                  <div class="col-4">
                    <img class="img-fluid rounded-start" src="${track.album.cover}" alt="cover-song" />
                  </div>
                  <div class="col-8">
                    <h6 class="m-0 ps-1 text-light text-truncate">${track.title}</h6>
                  </div>
                </div>
              </div>
            </div>
          `;

        cardMain.innerHTML += sectionCard;
      });
    })
    .catch(error => console.log(error));
});



document.addEventListener("DOMContentLoaded", () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/album/75621062")
    .then(response => response.json())
    .then(data => {
      const tracks = data.tracks.data;
      const cardMainSecond = document.querySelector('#card-main-second');
      cardMainSecond.innerHTML = "";

      tracks.slice(6, 11).forEach((track) => {
        const sectionCardSecond = `
      <div class="second-section text-white card col-12 col-md p-4 p-md-0 d-flex rounded-4">

        <div class="col d-flex">
          <img src="${track.album.cover}" class="card-img-top w-50 img-fluid rounded p-md-2" alt="..." />
          <div class="flex-column ps-3">
            <p class="d-md-none link-nav text-light opacity-25 fs-5">Playlist</p>
            <h2 class="d-md-none link-nav text-light fs-1 pt-4">${track.title_short}</h2>
          </div>
        </div>

        <div class="card-body p-2 d-none d-md-block">
          <h6 class="card-title">${track.title_short}</h6>
          <p class="card-text">
          ${track.title_version}
          </p>
        </div>
        
        <div class="ps-3 d-flex align-items-center justify-content-between d-md-none pt-3">
          <div>
            <button type="button" class="link-nav btn fs-1 text-success"><i class="bi bi-heart-fill"></i></button>
            <button type="button" class="threeDots btn fs-1 text-light opacity-25">
              <i class="bi bi-three-dots-vertical"></i>
            </button>
          </div>

          <div class="d-flex align-items-center">
            <p>${track.album.nb_tracks}</p>
            <button type="button" class="playBtn btn text-success"><i class="bi bi-play-circle-fill"></i></button>
          </div>
        </div>

      </div>
          `;

        cardMainSecond.innerHTML += sectionCardSecond;
      });
    })
    .catch(error => console.log(error));
});