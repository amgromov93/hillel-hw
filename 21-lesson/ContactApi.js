class ContactApi {
    static URL = 'https://6366959a79b0914b75d41ae9.mockapi.io/api/students';

    static getList() {
        return fetch(ContactApi.URL)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not retrieve TodoList from server')
            })
    }

    static create(todo) {
        return fetch(ContactApi.URL, {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json',
            }
        })
        .then(res => {
            if (res.ok) {
            return res.json();
            }

            throw new Error('Can not create Todo on server');
        })
    }

    static update(id, changes) {
        return fetch(`${ContactApi.URL}/${id}`, {
          method: 'PUT',
          body: JSON.stringify(changes),
          headers: {
            'Content-type': 'application/json',
            }
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
    
            throw new Error('Can not update Todo on server');
        });
    }

    static delete(id) {
        return fetch(`${ContactApi.URL}/${id}`, {
            method: 'DELETE',
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
    
            throw new Error('Can not delete Todo on server');
        });
    }
}