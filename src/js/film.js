export class Film {
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
    </li>
    `;
}
