const urlParams = new URLSearchParams(window.location.search);
const artistId = urlParams.get("id");
const ulrArtist =
  " https://striveschool-api.herokuapp.com/api/deezer/artist/412";

const returnMinute = function (sec) {
  const minute = Math.floor(sec / 60);
  let restSeconds = sec - minute * 60;
  if (restSeconds < 10) {
    restSeconds = "0" + restSeconds;
  }
  const time = `${minute}:${restSeconds}`;
  return time;
};

const caricaArtista = document.getElementById("artistaCaricato");
const fetchUrlArtist = async function () {
  try {
    let res = await fetch(`${ulrArtist}/${artistId}`);
    if (res.ok) {
      const artista = await res.json();
      let tracklist = await fetch(artista.tracklist);
      const tracks = await tracklist.json();

      caricaArtista.innerHTML += `
       <div class="row pt-4 ">
             <div style="background-image: url(${artista.picture_big}) ;" class="intestazioneArtist">
             <p> <i class="bi bi-patch-check-fill"></i> Artista verificato</p>
                <h5>${artista.name}</h5>
                <p class="mb-3">${artista.nb_fan} ascoltatori mensili</p>
            </div>
            </div>
            <div class="row ps-4">
              <div class="col-12 bottoniArtista ">
                <button onclick="populatePlayer('${tracks.data[0].artist.name}','${tracks.data[0].title}','${tracks.data[0].preview}','${tracks.data[0].album.cover_medium}')" class="play"><i class="bi bi-play-circle-fill"></i></button>
                <button class="follow">FOLLOWING</button>
                <button><i class="bi bi-three-dots"></i></button>
              </div>
            </div>`;

      const elencoTracce = document.getElementById("tracce");
      const elencobraniChetipiacc = document.getElementById("braniChetipiacc");
      elencobraniChetipiacc.innerHTML += `
      <div class="row p-0 braniChetipiacc">
      <div class="col-3 position-relative">
      <img src=${artista.picture_medium} alt="" />
      <span ><i class="bi bi-check-circle-fill"></i></span>
      </div>
      <div class="col-9 d-flex flex-column justify-content-center">
        <h5>Hai messo Mi piace a ${artista.nb_album} Brani</h5>
        <p>Di ${artista.name}</p>
      </div>
    </div>`;
      console.log(tracks.data);

      tracks.data.forEach((el, index) => {
        elencoTracce.innerHTML += `
          <div class="row tracceArtista">
                
                  <div class="col-1 d-flex justify-content-center align-items-center ">
                    <p class="leftPlay cursorP" onclick="populatePlayer('${
                      el.artist.name
                    }','${el.title}','${el.preview}','${
          el.album.cover_medium
        }')"><span class="icona"><i class="bi bi-play-fill text-light"></i></span><span class="numero">${
          index + 1
        }</span></p>
                  </div>
                  <div class="col-5">
                  
                    <p><span><img
                    class="img-fluid"
                    src=${el.album.cover_small}
                    alt="album Cover"
                  /> </span>${el.title}</p>
                    
                
                </div>
                <div class="col-3">
                  <p class="text-end pe-3">${el.rank}</p>
                </div>
                <div class="col-3">
                  <p class="text-end pe-4">${returnMinute(el.duration)}</p>
                </div>
              </div>`;
              document.getElementById("artistaCaricato").appendChild
      });

      return artista;

    }

  } catch (error) {
    console.log(error);
  }
};
fetchUrlArtist();

const closeBtn = document.getElementById("close-friends");
const sidebar = document.getElementById("rightBar");
closeBtn.addEventListener("click", () => {
  sidebar.classList.add("d-none");
});

