const url = "http://api.citybik.es/v2/networks";

const resultsContainer = document.querySelector(".results");

async function getBikes() {

    const response = await fetch(url);

    const results = await response.json();

    const bikes = results.networks;

    resultsContainer.innerHTML = "";

    for(let i = 0; i < bikes.length; i++) {
        console.log(bikes[i].company);

        if (i === 60) {
            break;
        }

        resultsContainer.innerHTML += `<div class="citybike">
        <h3>Company: ${bikes[i].company}</h3>
        <h4>Name: ${bikes[i].name}<h4>
        <p>City: ${bikes[i].location.city}</p>
        <p>Country: ${bikes[i].location.country}</p>
        </div>`;
    }
}

getBikes();