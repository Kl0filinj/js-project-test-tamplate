import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, child, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCv6MxU8A-pjcYfh7e--9UuG9oU8ESw1yo',
  authDomain: 'test-template-f17b9.firebaseapp.com',
  databaseURL:
    'https://test-template-f17b9-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'test-template-f17b9',
  storageBucket: 'test-template-f17b9.appspot.com',
  messagingSenderId: '739422049395',
  appId: '1:739422049395:web:61f14da0b2bfc36e7f8606',
};

const app = initializeApp(firebaseConfig);

export class Film {
  static createWithAuth(newFilm, userName) {
    const db = getDatabase();
    const dbRef = ref(db);
    Film.createWithoutAuth(newFilm);
    // let restFilms;
    set(ref(db, `UsersList/${userName}/userFilmList/` + `${newFilm.title}`), {
      filmTitle: newFilm.title,
      filmRate: newFilm.rating,
    }).catch(console.log);
    get(child(dbRef, `UsersList/${userName}/` + 'userFilmList')).then(
      snapshot => console.dir(snapshot.val())
    );
    // console.log(restFilms);
  }

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
