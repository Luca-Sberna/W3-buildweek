// // Scomparsa sidebar destra
// const closeButton = document.querySelector("#close-friends");
// const asideElement = document.querySelector("#rightBar");

// closeButton.addEventListener("click", () => {
//   asideElement.style.display = "none";
// });

// // recupera l'id dell'album dai search params
// const searchParams = new URLSearchParams(window.location.search);
// const albumId = searchParams.get("id");

// // recupera le informazioni sull'album dall'API
// fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`)
//   .then(response => response.json())
//   .then(album => {
//     // popola la pagina HTML con le informazioni sull'album
//     const albumImage = document.getElementById("album-image");
//     albumImage.src = album.cover_medium;
//     albumImage.alt = album.title;

//     const albumTitle = document.getElementById("album-title");
//     albumTitle.innerText = album.title;

//     const albumArtist = document.getElementById("album-artist");
//     albumArtist.innerText = album.artist.name;

//     const albumReleaseDate = document.getElementById("album-release-date");
//     albumReleaseDate.innerText = album.release_date;

//     const albumDuration = document.getElementById("album-duration");
//     albumDuration.innerText = album.duration;

//     const albumTrackCount = document.getElementById("album-track-count");
//     albumTrackCount.innerText = album.nb_tracks;
//   })
//   .catch(error => console.log(error));

// //counter minuti e secondi dell'album
// function formatDuration(durationInSeconds) {
//   const minutes = Math.floor(durationInSeconds / 60);
//   const seconds = durationInSeconds % 60;
//   return `${minutes}:${seconds.toString().padStart(2, "0")}`;
// }
