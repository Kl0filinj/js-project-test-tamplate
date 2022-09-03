export function validForm(filmLen, ratingLen) {
  return filmLen >= 5 && ratingLen > 0 && ratingLen <= 10;
}

export function onOpenModal() {
  const regBtn = document.getElementById('reg-btn');
  const logBtn = document.getElementById('log-btn');
  const closeBtn = document.querySelector('.btn-close');

  regBtn.addEventListener('click', () => {
    regBtn.disabled = true;
    logBtn.disabled = false;
    logBtn.className = 'btn btn-dark';
  });
  logBtn.addEventListener('click', () => {
    regBtn.disabled = false;
    logBtn.disabled = true;
    regBtn.className = 'btn btn-dark';
  });
  closeBtn.addEventListener('click', () => {});
}
