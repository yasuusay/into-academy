// login.js
import { auth } from './firebase-config.js';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';

const form = document.getElementById('login-form');
const errorMessage = document.getElementById('login-error');
const googleBtn = document.getElementById('google-login');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = form.email.value;
  const password = form.password.value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('ログイン成功:', userCredential.user);
    window.location.href = 'dashboard.html';
  } catch (error) {
    console.error('ログイン失敗:', error.message);
    errorMessage.textContent = `ログインに失敗しました: ${error.message}`;
  }
});

googleBtn.addEventListener('click', async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log('Googleログイン成功:', result.user);
    window.location.href = 'dashboard.html';
  } catch (error) {
    console.error('Googleログイン失敗:', error.message);
    errorMessage.textContent = `Googleログインに失敗しました: ${error.message}`;
  }
});
