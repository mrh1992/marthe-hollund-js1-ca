const detailContainer = document.querySelector(".container-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url ="http://api.citybik.es/v2/networks/" + id;

console.log(url);

async function fetchBike() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);

    }
    catch(error) {
        console.log(error);
    }
}

fetchBike();

function createHtml(details) {
    detailContainer.innerHTML = `<div class="details-bike">
                                    <h3>Company: ${details.network.company}</h3>
                                    <p>Name: ${details.network.name}</p>
                                    <p> City: ${details.network.location.city}</p>
                                    <p> Country: ${details.network.location.country}</p>
                                    <p> Latitude: ${details.network.location.latitude}</p>
                                    <p> Longitude: ${details.network.location.longitude}</p>
                                </div>`;
}