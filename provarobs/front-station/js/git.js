const CLIENT_ID = 'YOUR_CLIENT_ID';  // Substitua pelo seu client_id do GitHub
const REDIRECT_URI = 'http://localhost/front-station/home.html';

document.getElementById('login-btn').onclick = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
};

// No arquivo home.html, você precisará de código para manipular o token de acesso do GitHub após o login
