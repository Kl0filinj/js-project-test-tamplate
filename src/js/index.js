import { validForm } from './utils';
import { Film } from './film';

const refs = {
  filmForm: document.getElementById('film-form'),
  filmName: document.getElementById('film'),
  filmRating: document.getElementById('rating'),
  filmSubmitBtn: document.getElementById('film-submit-btn'),
};

window.addEventListener('load', Film.renderFilmList);
refs.filmForm.addEventListener('submit', filmSubmitHandler);
refs.filmForm.addEventListener('input', () => {
  refs.filmSubmitBtn.disabled = !validForm(
    refs.filmName.value.length,
    refs.filmRating.value.length
  );
});

function filmSubmitHandler(evt) {
  evt.preventDefault();

  if (validForm(refs.filmName.value.length, refs.filmRating.value.length)) {
    const newFilm = {
      title: refs.filmName.value.trim(),
      rating: refs.filmRating.value.trim(),
    };

    refs.filmSubmitBtn.disabled = true;
    // async fetch
    Film.createWithoutAuth(newFilm);
    refs.filmName.value = '';
    refs.filmRating.value = '';
    refs.filmSubmitBtn.disabled = false;
    Film.renderFilmList();
  }
}
