class StudentsApi {
    static URL = 'https://6391adecac688bbe4c4f165a.mockapi.io/api/students/';
  
    static request(url = '', method = 'GET', body) {
        return fetch(StudentsApi.URL + url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
            'Content-type': 'application/json',
            }
        })
        .then(response => {
        if (response.ok) {
            return response.json();
        }

        throw new Error('Canot execute request method', { cause: response });
        })
    }
  
    static getList() {
        return StudentsApi.request('').catch((error) => {
            throw new Error('Can not retrieve student list from server', );
        })
    }
  
    static create(student) {
        return StudentsApi.request('', 'POST', student).catch((error) => {
            throw new Error('Can not create student on server');
        })
    }
  
    static update(id, student) {
        return StudentsApi.request(id, 'PUT', student).catch((error) => {
            throw new Error('Can not update student on server');
        })
    }
  
    static delete(id) {
        return StudentsApi.request(id, 'DELETE').catch((error) => {
            throw new Error('Can not delete student on server');
        })
    }
}