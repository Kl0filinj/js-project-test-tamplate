import { registration, autentification } from './autentification';
import { Film } from './film';

let regBtn;
let logBtn;
let closeModalBtn;
let modalForm;

export function validForm(filmLen, ratingLen) {
  return filmLen >= 5 && ratingLen > 0 && ratingLen <= 10;
}

export function onOpenModal() {
  regBtn = document.getElementById('reg-btn');
  logBtn = document.getElementById('log-btn');
  closeModalBtn = document.querySelector('.btn-close');
  modalForm = document.getElementById('modal-form');

  regBtn.addEventListener('click', toggleRegBtn);

  logBtn.addEventListener('click', toggleLogBtn);

  modalForm.addEventListener('submit', registration);

  closeModalBtn.addEventListener('click', () => {
    regBtn.removeEventListener('click', toggleRegBtn);
    logBtn.removeEventListener('click', toggleLogBtn);
  });
}

function toggleRegBtn(evt) {
  modalForm.removeEventListener('submit', autentification);
  modalForm.addEventListener('submit', registration);
  evt.target.className += ' selected-btn';
  logBtn.className = 'btn btn-primary';
  const html = `
                  <h6>Registration</h6>
                  <div class="mb-3">
                  <label for="reg-user-name" class="form-label"
                    >Profile Name</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="reg-user-name"
                    aria-describedby="textHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="modal-email" class="form-label"
                    >Email</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="modal-email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="modal-password" class="form-label"
                    >Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="modal-password"
                  />
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-success">Log</button>
                </div>
  `;
  modalForm.innerHTML = html;
}

function toggleLogBtn(evt) {
  modalForm.removeEventListener('submit', registration);
  modalForm.addEventListener('submit', autentification);
  evt.target.className += ' selected-btn';
  regBtn.className = 'btn btn-primary';
  const html = `
                  <h6>Log in</h6>
                  <div class="mb-3">
                  <label for="reg-user-name" class="form-label"
                    >Profile Name</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="reg-user-name"
                    aria-describedby="textHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="modal-password" class="form-label"
                    >Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="modal-password"
                  />
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-success">Log</button>
                </div>
  `;
  modalForm.innerHTML = html;
}

export function regValidation(name, email, pas) {
  let nameVal = /[a-zA-Z\s]+/;
  let emailVal = /[a-zA-Z0-9]+@(gmail|yahoo|mail)\.com/;
  let pasVal = /[a-zA-Z0-9]{5,}/;

  if (nameVal.test(name) && emailVal.test(email) && pasVal.test(pas)) {
    return true;
  }
  return false;
}

export function exitBtnHandler() {
  sessionStorage.clear();
  localStorage.removeItem('films');
  Film.renderFilmList();

  document.getElementById('my-modal-btn').classList.remove('visually-hidden');
  document.getElementById('nav-user-name').innerHTML = '';
}
