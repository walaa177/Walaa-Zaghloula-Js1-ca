const queryString = document.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
const id = params.get("wikiDataId");
const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities/" + id;
const options = {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
        "x-rapidapi-key": "6efe4c136fmshe1c19809fd83fddp139971jsn21cfc5822878"
    }
};
async function getCityId() {
    const heading = document.querySelector("h1");
    try {
        const respose = await fetch(url, options);
        const details = await respose.json();
        console.log(details);
        heading.innerHTML = details.data.name;
        const latitude = document.querySelector("#latitude");
        const longitude = document.querySelector("#longitude");
        latitude.innerHTML = "latitude : " + details.data.latitude;
        longitude.innerHTML = "longitude : " + details.data.longitude;
        document.title = details.data.name;

    }
    catch (error) {
        heading.innerHTML = "An error occured";
        console.log(error);
    }
}
getCityId();
