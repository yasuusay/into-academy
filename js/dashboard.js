// dashboard.js
import { auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';

const welcomeMessage = document.getElementById('welcome-message');
const logoutButton = document.getElementById('logout-button');

// ログイン状態の監視
onAuthStateChanged(auth, (user) => {
  if (user) {
    // 表示名があれば使い、なければメールアドレスを表示
    const name = user.displayName || user.email || 'ユーザー';
    welcomeMessage.textContent = `ようこそ、${name} さん！`;
  } else {
    // 未ログインならログインページへリダイレクト
    window.location.href = 'login.html';
  }
});

// ログアウト処理
logoutButton.addEventListener('click', async () => {
  try {
    await signOut(auth);
    window.location.href = 'login.html';
  } catch (error) {
    alert('ログアウトに失敗しました: ' + error.message);
  }
});
