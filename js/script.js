async function fetchCities() {
    const apiEndpoint = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
    const options = {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
            "x-rapidapi-key": "6efe4c136fmshe1c19809fd83fddp139971jsn21cfc5822878"
        }
    };
    try {
        const response = await fetch(apiEndpoint, options);
        const citiesJson = await response.json();
        console.log(citiesJson);
        displayCities(citiesJson);
    } catch (error) {
        console.log(error);
    }
}
fetchCities();

function displayCities(citiesJson) {
    let cities = citiesJson.data;
    console.log(cities.length);
    const citiesContiner = document.querySelector(".results");
    let html = "";

    cities.forEach(element => {
        if (element.name) {
            html += `
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="card">
                        <img class="image" src="https://via.placeholder.com/300" alt="Title/Name" />
                        <div class="details">
                            <h4 class="name">${element.name}</h4>
                            <p><b>latitude : </b> ${element.latitude}</p>
                            <p><b>longitude : </b>${element.longitude}</p>
                            <a class="btn btn-primary" href="details.html?wikiDataId=${element.id}">Details</a>
                        </div>
                    </div>
                </div>`;
        }
    });

    citiesContiner.innerHTML = html;
}