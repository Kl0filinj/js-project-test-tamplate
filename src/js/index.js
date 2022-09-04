import { validForm, onOpenModal } from './utils';
import { Film } from './film';
import {
  renderCurrentUserName,
  addEventListenerOnExitBtn,
} from './autentification';
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
// refs.authModalBtn.addEventListener('click', () => {
//   // refs.authModal.show;
//   // onOpenModal();
// });
refs.authModalBtn.addEventListener('click', onOpenModal);
window.addEventListener('load', () => {
  if (sessionStorage.getItem('userData') !== null) {
    console.log(111);
    Film.renderFilmList();
    renderCurrentUserName();
    addEventListenerOnExitBtn();
  } else {
    Film.renderFilmList();
  }
});
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
    if (sessionStorage.getItem('userData') !== null) {
      const currentUserName = JSON.parse(
        sessionStorage.getItem('userData')
      ).userName;
      console.log(currentUserName);
      Film.createWithAuth(newFilm, currentUserName);
      refs.filmForm.reset();
      refs.filmSubmitBtn.disabled = false;
      Film.renderFilmList();
      return;
    } else {
      Film.createWithoutAuth(newFilm);
      refs.filmForm.reset();
      refs.filmSubmitBtn.disabled = false;
      Film.renderFilmList();
    }
  }
}
