function validLoginInfo() {
  const emailInputElement = document.getElementById('email-input');
  const passwordInputElement = document.getElementById('password-input');

  if (emailInputElement.value === 'tryber@teste.com' && passwordInputElement.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function submitButtonStateSwitch() {
  const submitBtnElement = document.getElementById('submit-btn');
  submitBtnElement.disabled = !submitBtnElement.disabled;
}

document.getElementById('login-button').addEventListener('click', validLoginInfo);
document.getElementById('agreement').addEventListener('click', submitButtonStateSwitch);
