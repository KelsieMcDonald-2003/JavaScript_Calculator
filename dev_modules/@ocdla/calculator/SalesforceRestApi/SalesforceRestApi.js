export class SalesforceRestApi {
    constructor() {
        const myHeaders = new Headers();
        const authHeader = "Bearer " + ACCESS_TOKEN; 
        myHeaders.append("Authorization", authHeader);
    }

    /*
    This is an saynchronous method that sends a fetch request to the
    salesforce API. It creates an authorization header using an access
    token, sends a GET request to the Salesforce API with the provided
    query string, and returns fetched data
    */
    async query(queryString) {
        //const myHeaders = new Headers();
        //const authHeader = "Bearer " + ACCESS_TOKEN; 
        //myHeaders.append("Authorization", authHeader);

        let fetchedData;
        //query string example: query?q=SELECT+name,id+from+CourseInfo__c
        await fetch(`${INSTANCE_URL}/services/data/v60.0/${queryString}`, { headers: myHeaders })
        .then(response => response.json())
        .then(data => { fetchedData = data;});

        return fetchedData;
    }

    create() {

    }

    update() {

    }

    delete() {
        
    }
}