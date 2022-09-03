export function validForm(filmLen, ratingLen) {
  return filmLen >= 5 && ratingLen > 0 && ratingLen <= 10;
}

export function onOpenModal() {
  console.log(111);
}
//   const regBtn = document.getElementById('reg-btn');
//   const logBtn = document.getElementById('log-btn');
//   const closeBtn = document.querySelector('.btn-close');

//   regBtn.addEventListener('click', () => {
//     onRegBtnClick(regBtn, logBtn);
//   });
//   logBtn.addEventListener('click', () => {
//     onLogBtnClick(regBtn, logBtn);
//   });
//   closeBtn.addEventListener('click', () => {
//     onCloseBtnClick(regBtn, logBtn, closeBtn);
//   });
// }

// function onRegBtnClick(reg, log) {
//   reg.className.add('btn-light');
//   reg.className.remove('btn-dark');
//   log.disabled = true;
// }

// function onLogBtnClick(reg, log) {
//   log.className.add('btn-light');
//   log.className.remove('btn-dark');
//   reg.disabled = true;
// }

// function onCloseBtnClick(reg, log, close) {
//   reg.removeEventListener('click', onRegBtnClick);
//   log.removeEventListener('click', onLogBtnClick);
//   close.removeEventListener('click', onCloseBtnClick);
// }
