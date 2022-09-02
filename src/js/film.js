export class Film {
  static firebaseConfig = {
    apiKey: 'AIzaSyCv6MxU8A-pjcYfh7e--9UuG9oU8ESw1yo',
    authDomain: 'test-template-f17b9.firebaseapp.com',
    projectId: 'test-template-f17b9',
    storageBucket: 'test-template-f17b9.appspot.com',
    messagingSenderId: '739422049395',
    appId: '1:739422049395:web:61f14da0b2bfc36e7f8606',
  };
  static createWithoutAuth(newFilm) {
    const all = getFilmsFromLocalStorge();
    all.push(newFilm);
    localStorage.setItem('films', JSON.stringify(all));
  }
  static renderFilmList() {
    const films = getFilmsFromLocalStorge();
    const list = films.length
      ? films.map(renderOneFilm).join('')
      : `<li><p>У вас ещё нету фильмов в списке :(</p></li>`;

    document.getElementById('list').innerHTML = list;
  }
}

function getFilmsFromLocalStorge() {
  return JSON.parse(localStorage.getItem('films') || '[]');
}

function renderOneFilm(film) {
  return `
    <li>
        <p class="h4">Название: ${film.title}</p>
        <p class="h4">Рейтинг: <span class="rating">${film.rating}</span></p>
    </li>`;
}
