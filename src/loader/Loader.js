// Utility class to load data using the API

class Loader {
    loadPopular() {
        let request = new XMLHttpRequest();

        const url = "http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=popular&size=15&broadcaster=ITV";
        request.open("GET", url, true);

        request.setRequestHeader("Accept", "application/vnd.itv.ctv.production.v1+hal+json");

        request.timeout = 5000;

        request.onload = (e) => {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    const response = JSON.parse(request.responseText);
                    console.log("XXXX success: " + JSON.stringify(response));
                } else {
                    console.log("XXXX error: " + request.responseText);
                }
            } else {
                console.log("XXXX error: " + request.responseText);
            }

        };

        request.onerror = (e) => {
            console.log("XXXX error");
        };

        request.ontimeout = () => {
            console.log("XXXX error");
//            error('{"status_code":408,"status_message":"Request timed out"}');
        };

        request.send(null);
    }
}

export default Loader;