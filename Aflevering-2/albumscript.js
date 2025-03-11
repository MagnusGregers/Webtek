/* Kommentarer til hvordan jeg lavede denne opgave.
(de er mest til mig selv, så jeg kan kigge tilbage på det senere.) 

Jeg starter ud med at sige fetch til mit json data.
Jeg forsøgte virkelig at bruge fetchContent ligesom i din kode, men kunne ikke få det til at fungere,
så vi må nøjes med "fetch" her.
*/

fetch("./albums.json")
.then( res => res.json()
.then(data => {
    /* Efter at jeg har fetched mit data, og logget det i konsollen (hvor det kom frem),
    skabte jeg en div i mit index, som hedder (musicContainer).
    I mit index, er der også en h1 med et id på "header", som jeg brugte til at teste innerHTML med.
    */
    let musicContainer = document.getElementById('musicContainer');
/*
Jeg laver et kald til min div i indexet vha. getElementByID, 
ved at lave en "let" variable af samme navn til mit script.
*/
    let html = "<table border=1>";
/*
Jeg laver efterfølgende en html variable og skriver den string ind som skal blive til min tabel.
"border=1" betyder her om der skal være en border eller ej. Kan ses da 1-tallet er en boolean.
*/ 
    html += "<tr><th>Album</th><th>Artist</th><th>Year</th><th>Rating</th></tr>";
/*
Jeg gør det samme her, for at give struktur til tabellen,
hvor de 4 objekter fremgår. I det her tilfælde:
Album, Artist, Year og Rating. 
"+=" er sat ind for at tilføje nyt data til eksisterende html (lærte jeg på youtube).
*/
    data.forEach(album =>{
/*
Det næste er selve loopet som skal vise mit content, 
uden at jeg behøver skrive det hele 1 mia gange.

for (let i = 0; i < data.length; i++) {}
virkede og føltes som en kæmpe sejr, men det kunne jeg kun få logget i konsollen, 
så brugte "data.forEach" istedet.
*/
        html += `
        <tr>
            <td>${album.albumName}</td>
            <td>${album.artistName}</td>
            <td>${album.productionYear}</td>
            <td>${album.rating}</td>
        </tr>
        `;
/* 
html += igen for at ændre på eksisterende html, hvor jeg sætter resten af tabellen og de objekter som skal loopes op.
bruger ${} til at indsætte data i midten af en string,
hvor jeg sætter json dataen ind. 

Data bliver taget fra fetch, forEach looper hvert objekt jeg har lavet,
album kalder på dataen
*/
    });
    html += "</table>";
/*
Jeg lukker tabellen igen.
*/
    musicContainer.innerHTML = html;
    }
/*
Jeg kalder på den div, hvor mit data skal ind. 
Bruger .innerHTML til at lave DOM.
Vælger hvilken variable der skal sættes ind istedet for min div.
*/
))

/*
Og så burde det virke. Fik ikke lavet en knap desværre. Næste gang.
jeg ved godt det er en meget bare-bones aflevering jeg har lavet, 
som ikke helt har fulgt din kode.
Men havde sgu svært ved det. 
*/





/*
Nedenstående kode er et par af mine tidligere forsøg på at finde ud af det. 
Det er slet ikke relevant for opgaven, 
men det gik op for mig at jeg slettede alle mine forsøg når det ikke virkede,
så for at lære lidt af fejlene, har jeg beholdt dem som kommentarer.

fetch("./albums.json")
.then(res => res.json())
.then(data => {
    console.log(data)
})

function handleData(data) {
    console.log("modtaget data", data);
}

fetch("./albums.json")
.then(res => res.json())
.then(handleData)
.catch(error => console.error("error fetching data")
)*/

/* Let album tester
let album1 = new Album("Black Holes and revelations", "Muse", "2006");

console.log(album1)*/

/*const MusikArkiv = "./albums.json";
fetch(MusikArkiv)
.then(res => res.json())
.then(data =>{
    for (let i = 0; i < data.length; i++) {
        let album = data[i]
        console.log(
            data[i].albumName,
            data[i].artistName,
            data[i].productionYear,
        )
    }
})
    */

/*let albumObjects =[]
console.log(albumObjects)
const MusikArkiv = "./albums.json"

fetch(MusikArkiv)
.then(res => res.json())
.then(data =>{
    let tBody = document.querySelector("#tabel1 tbody");
    data.albumObjects.forEach(album => {
        let row = document.createElement("tr");
        row.innerHTML = `
        <td>${album.albumName}</td>
        <td>${album.artistName}</td>
        <td>${album.productionYear}</td>
        `;
        tBody.appendChild(row);
        
    });
})
Bliver snart skingrende sindssyg    
*/
/*let albumObjects = []
const MusikArkiv = "./albums.json"

function Album(album, artist, year) {
    this.albumName = album;
    this.artistName = artist;
    this.productionYear = year;
}

fetch(MusikArkiv)
.then(res => res.json())
.then(data => {
    let tableBody = document.querySelector("#table1 tbody");
    MusikArkiv.albumObjects.forEach(album => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${album.albumName}</td>
            <td>${album.artistName}</td>
            <td>${album.productionYear}</td>
            `;
            tableBody.appendChild(row);
    });
})*/

// virker heller

/*const MusikArkiv = "./albums.json"
fetch(MusikArkiv)
.then(res => res.json())
.then(data =>{
    for(let i = 0; i < data.length; i++) {
        let album = data[i];
        console.log(data[i]);
        const tableBody = document.querySelector("#albumTable tbody");

        data.forEach(album =>{
            const row = document.createElement("tr");
            Object.values(albumName, artistName, productionYear).forEach(value =>{
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        });
    
    }
})*/

/*
Det her virker, lad det være en backup plan:
fetch("./albums.json")
.then(res => res.json())
.then(data => {
        for (let i = 0; i < data.length; i++) {
            let albums = data[i];
            console.log(albums);
            document.getElementById("musikFyld").innerHTML = `
            <td>${data[i].artistName}</td>
            <td>${data[i].albumName}</td>
            <td>${data[i].productionYear}</td>`
        }
})*/
