import { validForm, onOpenModal } from './utils';
import { Film } from './film';
import * as bootstrap from 'bootstrap';

const refs = {
  filmForm: document.getElementById('film-form'),
  filmName: document.getElementById('film'),
  filmRating: document.getElementById('rating'),
  filmSubmitBtn: document.getElementById('film-submit-btn'),
  authModalBtn: document.getElementById('my-modal-btn'),
  authModal: document.getElementById('my-modal'),
  // openModalBtn: document.getElementById('my-modal-btn'),
};
console.log(refs.authModalBtn);
refs.authModalBtn.addEventListener('click', () => {
  // refs.authModal.show;
  // onOpenModal();
});
refs.authModalBtn.addEventListener('click', onOpenModal);
window.addEventListener('load', Film.renderFilmList);
// refs.openModalBtn.addEventListener('click', onOpenModal);
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
