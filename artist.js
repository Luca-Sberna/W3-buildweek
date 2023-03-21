const ulrArtist = "https://striveschool-api.herokuapp.com/api/deezer/artist";
let params = new URLSearchParams(location.search);

let ourIDArtist = params.get("id");