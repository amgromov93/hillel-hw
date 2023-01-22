export default class GalleryApi {
  static URL_USERS = 'https://jsonplaceholder.typicode.com/users/';
  static URL_ALBUMS = 'https://jsonplaceholder.typicode.com/albums/';
  static URL_PHOTOS = 'https://jsonplaceholder.typicode.com/photos/';

  static getUserList() {
    return fetch(GalleryApi.URL_USERS)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Can not retrieve User list from server');
      })
  }

  static getAlbumList(id) {
    return fetch(`${GalleryApi.URL_ALBUMS}?userId=${id}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Can not retrieve Albums list from server');
      })
  }

  static getPhotoList(id) {
    return fetch(`${GalleryApi.URL_PHOTOS}?albumsId=${id}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Can not retrieve Photo list from server');
      })
  }

}