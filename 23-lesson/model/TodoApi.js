class TodoApi {
    static URL = 'https://6366959a79b0914b75d41ae9.mockapi.io/api/todo/'
  
    static request(url = '', method = 'GET', body) {
        return fetch(TodoApi.URL + url, {
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
        return TodoApi.request('').catch((error) => {
            throw new Error('Can not retrieve todo list from server', );
        })
    }
  
    static create(todo) {
        return TodoApi.request('', 'POST', todo).catch((error) => {
            throw new Error('Can not create todo on server');
        })
    }
  
    static update(id, changes) {
        return TodoApi.request(id, 'PUT', changes).catch((error) => {
            throw new Error('Can not update todo on server');
        })
    }
  
    static delete(id) {
        return TodoApi.request(id, 'DELETE').catch((error) => {
            throw new Error('Can not delete todo on server');
        })
    }
}