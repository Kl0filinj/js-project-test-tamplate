export function validForm(filmLen, ratingLen) {
  return filmLen >= 5 && ratingLen > 0 && ratingLen <= 10;
}
