const loginBtnElement = document.getElementById('login-button');

function validLoginInfo() {
  const emailInputElement = document.getElementById('email-input');
  const passwordInputElement = document.getElementById('password-input');

  if (emailInputElement.value === 'tryber@teste.com' && passwordInputElement.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginBtnElement.addEventListener('click', validLoginInfo);
