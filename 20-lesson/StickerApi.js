class StickerApi {
    static URL = 'https://62054479161670001741b708.mockapi.io/api/stickers/';

    static request(url = '', method = 'GET', body) {
        return fetch(StickerApi.URL + url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Cannot execute request method', {cause: res});
            }) 
    }

    static get() {
        return StickerApi.request() 
        .catch ((error) => {
            throw new Error('Cannot retrieve list from server');
        })
    }

    static create(sticker) {
        return StickerApi.request('', 'POST', sticker)
        .catch((error) => {
            throw new Error('Can not create sticker on server');
        })
      }
    
    static update(id, changes) {
        return StickerApi.request(id, 'PUT', changes)
        .catch((error) => {
            throw new Error('Can not update sticker on server');
        })
    }

    static delete(id) {
        return StickerApi.request(id, 'DELETE')
        .catch((error) => {
            throw new Error('Can not delete sticker on server');
        })
    }
}