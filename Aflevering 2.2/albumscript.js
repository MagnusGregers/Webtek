
//Constructor function til album objekter
function Album(artist, album, rating, productionYear) {
    this.artist = artist;
    this.album = album;
    this.rating = rating;
    this.productionYear = productionYear;
}

//Function til at indsætte HTML elementer (samt json data) ind i en tabel på mit index
function addDivWithAlbum(album, musicContainer) {
    let musicElement = document.getElementById(musicContainer)
    let htmlElement = 
    "<table>" +
    "<tr><th>Album</th><th>Artist</th><th>Year</th><th>Rating</th></tr>" +
    `<tr>
        <td>${album.album}</td>
        <td>${album.artist}</td>
        <td>${album.productionYear}</td>
        <td>${album.rating}</td>
        
    `
    + "</table>"
    
    musicElement.innerHTML = musicElement.innerHTML + htmlElement
}

//Command til at hente data fra albums.json
fetch("./albums.json").then(res => res.json()).then(albums => {
    console.log("Data fra Albums.json");
    console.log(albums)

    //Tomt array, hvor albums.json dataene skal indsættes
    let albumObjects = [];
console.log("Album Array: ")
    console.log(albumObjects);

    //For loop til at loope json filens data gennem min constructor function Album's objekter
    for (let i = 0; i < albums.length; i++) {
        
        const album = new Album(
            albums[i].artistName,
            albums[i].albumName,
            albums[i].rating,
            albums[i].productionYear,
        );
        albumObjects.push(album);
    }

/*
forEach loop for at loope json filens data gennem det tomme array og indsætte 
HTML elementer på index gennem DOM.
*/
albumObjects.forEach (
    function (a) {
        addDivWithAlbum(a, 'musicContainer');
    }
)
})


//Async function, som virker.
async function fetchContent(url) {
    let request = await fetch(url);
    let json = await request.json();
    return json;
  }
  
