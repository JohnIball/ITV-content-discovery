// Utility class to load data using the API

const options = {
    headers: {"Accept": "application/vnd.itv.ctv.production.v1+hal+json"}};
const popularURL = "http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=popular&size=15&broadcaster=ITV";

class Loader {

    loadPopular() {
        return fetch(popularURL, options).then(response => {
            return response.json();
        }).catch(e => {
            console.log("Error in loader: " + e);
            // Re-throw the error to the caller
            // This allows us to log it here, but deal with the UI at the caller level
            throw new Error(e);
        });
    }
}

export default Loader;