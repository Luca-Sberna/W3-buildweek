const urlParams = new URLSearchParams(window.location.search);
const albumId = urlParams.get("id");

// Recupera i dettagli dell'album dall'API di Deezer
fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/75621062`)
  .then(response => response.json())
  .then(album => {
    // Aggiorna il titolo dell'album
    document.querySelector("#album-details .title-album").textContent = album.title;

    // Aggiorna l'immagine della copertina dell'album
    document.querySelector("#album-details img").setAttribute("src", album.cover_medium);

    // Aggiorna il nome dell'artista e la data di uscita dell'album
    const artistName = album.artist.name;
    const releaseYear = new Date(album.release_date).getFullYear();
    const albumDetailsText = `${artistName} • ${releaseYear} • ${album.nb_tracks} brani, ${album.duration} sec`;
    document.querySelector("#album-details p").textContent = albumDetailsText;
  })
  .catch(error => console.error(error));

fetch("https://striveschool-api.herokuapp.com/api/deezer/album/75621062")
  .then(response => response.json())
  .then(data => {
    const tracks = data.tracks.data;
    const playlistElement = document.getElementById("playlist");

    // Clear any previous content in the playlist element
    playlistElement.innerHTML = "";
    let trackNumber = 1;
    tracks.forEach(track => {
      const trackDiv = document.createElement("div");
      trackDiv.className = "d-flex text-white align-items-center row";
      trackDiv.innerHTML = `
        <div class="col-1 d-none d-md-block">${trackNumber}</div>
        <div class="p-3 flex-grow-1 col-6">
          <h6 class="fw-bold">${track.title}</h6>
          <p class="fs-6">${track.artist.name}</p>
        </div>
        <div class="p-3 flex-grow-1 col-3 d-none d-md-block">${track.duration}</div>
        <div class="p-3 w-12 flex-shrink-0 col-1 d-none d-md-block">${track.duration}</div>
      `;
      document.getElementById("playlist").appendChild(trackDiv);
      trackNumber++;
    });
  })
  .catch(error => console.log(error));
