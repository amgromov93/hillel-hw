class GalleryApi {
    static URL = 'https://jsonplaceholder.typicode.com/';
    static URL_LIST = 'albums';
    static URL_IMAGE_BOX = 'photos?albumId=';
        
    static request(url = '', method = 'GET', body) {
        return fetch(GalleryApi.URL + url, {
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
            throw new Error('Cannot retrieve list from server');
        })
    }
}   

export default GalleryApi;