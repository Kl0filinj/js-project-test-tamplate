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

  closeModalBtn.addEventListener('click', () => {
    regBtn.removeEventListener('click', toggleRegBtn);
    logBtn.removeEventListener('click', toggleLogBtn);
  });
}

function toggleRegBtn(evt) {
  evt.target.className += ' selected-btn';
  logBtn.className = 'btn btn-primary';
  const html = `
                  <h6>Registration</h6>
                  <div class="mb-3">
                  <label for="exampleInputText1" class="form-label"
                    >Profile Name</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputText1"
                    aria-describedby="textHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Email</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
  `;
  modalForm.innerHTML = html;
}

function toggleLogBtn(evt) {
  evt.target.className += ' selected-btn';
  regBtn.className = 'btn btn-primary';
  const html = `
                  <h6>Log in</h6>
                  <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Email</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
  `;
  modalForm.innerHTML = html;
}
