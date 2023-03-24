const caricaArtista = function (event) {
    console.log(event);
    location.assign(
      `../artist.html?id=${event.target.getAttribute("idartist")}`
    );
  };