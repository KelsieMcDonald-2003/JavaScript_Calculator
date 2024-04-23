export class SalesforceRestApi {
    constructor() {
        const myHeaders = new Headers();
        const authHeader = "Bearer " + ACCESS_TOKEN; 
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