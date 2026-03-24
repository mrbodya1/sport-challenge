// Авторизация
async function register() {
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;
  const firstName = document.getElementById('reg-firstname').value;
  const lastName = document.getElementById('reg-lastname').value;
  const gender = document.getElementById('reg-gender').value;
  const birthDate = document.getElementById('reg-birthdate').value;
  const errorDiv = document.getElementById('register-error');
  
  if (!username || !password || !firstName || !lastName || !gender || !birthDate) {
    errorDiv.innerHTML = '❌ Заполните все поля';
    return;
  }
  
  errorDiv.innerHTML = '<span class="loader"></span> Регистрация...';
  
  const { data, error } = await sb.auth.signUp({
    email: username + '@challenge.local',
    password: password,
    options: {
      data: {
        username: username,
        first_name: firstName,
        last_name: lastName,
        name_full: `${firstName} ${lastName}`,
        gender: gender,
        birth_date: birthDate
      }
    }
  });
  
  if (error) {
    errorDiv.innerHTML = '❌ ' + (error.message.includes('already registered') ? 'Логин уже занят' : error.message);
  } else {
    errorDiv.style.color = '#1e6f5c';
    errorDiv.innerHTML = '✅ Регистрация успешна! Теперь войдите.';
    setTimeout(() => {
      navigateTo('home');
    }, 1500);
  }
}

async function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const errorDiv = document.getElementById('login-error');
  
  errorDiv.innerHTML = '<span class="loader"></span> Вход...';
  
  const { data, error } = await sb.auth.signInWithPassword({
    email: username + '@challenge.local',
    password: password
  });
  
  if (error) {
    errorDiv.innerHTML = '❌ Неверный логин или пароль';
  } else {
    currentUser = data.user;
    navigateTo('home');
  }
}

async function logout() {
  await sb.auth.signOut();
  currentUser = null;
  navigateTo('home');
}
