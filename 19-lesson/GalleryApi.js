class GalleryApi {
    static URL_LIST = 'https://jsonplaceholder.typicode.com/';
        
    static request(url = '', method = 'GET', body) {
        return fetch(GalleryApi.URL_LIST + url, {
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

    static get(url) {
        return GalleryApi.request(url) 
        .catch ((error) => {
            throw new Error('Cannot retrieve gallery from server');
        })
    }
}   

export default GalleryApi;