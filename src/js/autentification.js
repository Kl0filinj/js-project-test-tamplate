import { getDatabase, ref, set, child, get } from 'firebase/database';
import { regValidation } from './utils';
import { initializeApp } from 'firebase/app';

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

export function registration(evt) {
  evt.preventDefault();
  const db = getDatabase();
  const userName = document.getElementById('reg-user-name');
  const email = document.getElementById('modal-email');
  const password = document.getElementById('modal-password');
  if (!regValidation(userName.value, email.value, password.value)) {
    return alert('You filled form uncorrect');
  }
  const dbRef = ref(db);

  get(child(dbRef, 'UsersList/' + userName.value)).then(snapshot => {
    if (snapshot.exists()) {
      alert('User already exist !');
    } else {
      set(ref(db, 'UsersList/' + userName.value), {
        userName: userName.value,
        email: email.value,
        password: password.value,
      })
        .then(alert('User Successfuly registraited'))
        .then(document.getElementById('modal-form').reset())
        .catch(console.log);
    }
  });
}

export function autentification(evt) {
  evt.preventDefault();
  const db = getDatabase();
  const userName = document.getElementById('reg-user-name');
  const password = document.getElementById('modal-password');
  const dbRef = ref(db);

  get(child(dbRef, 'UsersList/' + userName.value)).then(snapshot => {
    if (snapshot.exists()) {
      let dbpas = snapshot.val().password;
      console.log(dbpas);
      console.log(password.value);
      if (dbpas === password.value) {
        alert(`You Successfuly enter in your accaunt  ${userName.value} !`);
        logIn(snapshot.val());
      }
    } else {
      return alert('User not exist yet !');
    }
  });
}

function logIn(userData) {
  sessionStorage.setItem('userData', JSON.stringify(userData));
  document.querySelector('.modal-backdrop').className = 'modal-backdrop fade';
  document.getElementById('my-modal').className = 'modal fade';
}
