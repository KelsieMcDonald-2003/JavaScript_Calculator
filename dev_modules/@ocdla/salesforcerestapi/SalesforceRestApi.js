/*
export class SalesforceRestApi {
    constructor(accessToken) {
        const myHeaders = new Headers();
        const authHeader = "Bearer " + accessToken; 
        myHeaders.append("Authorization", authHeader);
    }

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

    async create(objectName, data) {
        const response = await fetch(`${INSTANCE_URL}/services/data/v60.0/sobjects/${objectName}`, {
            method: 'POST',
            headers: this.myHeaders,
            body: JSON.stringify(data)
        });
        return response.json();
    }

    async update(objectName, id, data) {
        const response = await fetch(`${INSTANCE_URL}/services/data/v60.0/sobjects/${objectName}/${id}`, {
            method: 'PATCH',
            headers: this.myHeaders,
            body: JSON.stringify(data)
        });
        return response.json();
    }

    async delete(objectName, id) {
        const response = await fetch(`${INSTANCE_URL}/services/data/v60.0/sobjects/${objectName}/${id}`, {
            method: 'DELETE',
            headers: this.myHeaders
        });
        return response.json();
    }
}
*/

export class SalesforceRestApi {
    instanceUrl;
    accessToken;
    method;
    body;

    static API_VERSION = 'v60.0'

    static BASE_URL = '/services/data/' + SalesforceRestApi.API_VERSION + '/';

    constructor(instanceURL, accessToken) {
        this.instanceUrl = instanceUrl;
        this.accessToken = accessToken;
        this.headers = new Headers();
        this.authHeader = "Bearer " + this.accessToken;
        this.headers.append("Authorization", this.authHeader);
        this.headers.append('Content-Type', 'application/json');
    }

    query(queryString) {
        this.method = 'GET';
        this.path = SalesforceRestApi.BASE_URL + 'query?=' + queryString;
        return this.send(); // Keep? Remove? Change?
    }

    update(objectName, record) {
        this.method = 'PATCH';
        this.path = SalesforceRestApi.BASE_URL + 'sobjects/' + objectName + `/${record.id}`;
        this.body = JSON.stringify(record);

        return this.send();
    }

    delete(objectName, record) {
        this.method = 'DELETE';
        this.path = SalesforceRestApi.BASE_URL + 'sobjects/' + objectName + `/${record.id}`
    }

    send() {
        let config = {
            method: this.method,
            headers: this.headers
        };

        if (this.method != 'GET' && this.method != 'DELETE') {
            config.body = this.body;
        }

        return fetch(`${this.instanceUrl}${this.path}`, config)
        .then(resp => {
            let json = resp.json();
            return json;
        })
        .catch((err) => {
            console.error('Error:', err);
        });
    }

    createCalculation(record) {
        this.method = 'POST';
        this.path = SalesforceRestApi.BASE_URL + 'sobjects/Calculator__c'; 
        this.body = JSON.stringify(record);
    
        return this.send();
    }    
}
