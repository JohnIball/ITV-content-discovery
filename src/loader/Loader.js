// Utility class to load data using the API

class Loader {

    loadPopular() {
        const popularURL = "http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=popular&size=15&broadcaster=ITV";
        return this.load(popularURL);
    }

    load(url) {
        // TODO maybe use the fetch API. Either way, hide the URL and header details etc. in this class
        return new Promise((resolve, reject) => {

            let request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.setRequestHeader("Accept", "application/vnd.itv.ctv.production.v1+hal+json");
            request.timeout = 5000;

            request.onload = e => {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        resolve(request.responseText);
                    } else {
                        reject("response status not 200");
                    }
                } else {
                    reject("ready state not 4");
                }
            };

            request.onerror = e => {
                reject("onerror");
            };

            request.ontimeout = () => {
                reject("ontimeout");
            };

            request.send();
        });
    }
}

export default Loader;