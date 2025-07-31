// register.js
import { auth } from './firebase-config.js';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';

const form = document.getElementById('register-form');
const errorMessage = document.getElementById('register-error');
const googleBtn = document.getElementById('google-register');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = form.email.value;
  const password = form.password.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('登録成功:', userCredential.user);
    window.location.href = 'dashboard.html'; // 登録後に遷移
  } catch (error) {
    console.error('登録失敗:', error.message);
    errorMessage.textContent = `登録に失敗しました: ${error.message}`;
  }
});

googleBtn.addEventListener('click', async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log('Googleログイン成功:', result.user);
    window.location.href = 'dashboard.html'; // ログイン後に遷移
  } catch (error) {
    console.error('Googleログイン失敗:', error.message);
    errorMessage.textContent = `Googleログインに失敗しました: ${error.message}`;
  }
});
