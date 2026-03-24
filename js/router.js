// Маршрутизация
function navigateTo(page, userId = null) {
  let hash = '#/';
  if (page === 'home') hash = '#/';
  else if (page === 'trainings') hash = '#/activities';
  else if (page === 'leaderboard') hash = '#/leaderboard';
  else if (page === 'add') hash = '#/add';
  else if (page === 'abilities') hash = '#/abilities';
  else if (page === 'settings') hash = '#/settings';
  else if (page === 'points') hash = '#/points';
  else if (page === 'achievements') hash = '#/achievements';
  else if (page === 'nominations') hash = '#/nominations';
  else if (page === 'feed') hash = '#/feed';
  else if (page === 'userProfile' && userId) hash = `#/profile/${userId}`;
  
  window.location.hash = hash;
  currentPage = page;
  if (userId) viewedUserId = userId;
  render();
}

function handleRouting() {
  const hash = window.location.hash.slice(2);
  
  if (hash.startsWith('activities')) {
    currentPage = 'trainings';
  } else if (hash.startsWith('leaderboard')) {
    currentPage = 'leaderboard';
  } else if (hash.startsWith('profile/')) {
    const userId = hash.split('/')[1];
    viewedUserId = userId;
    currentPage = 'userProfile';
  } else if (hash.startsWith('add')) {
    currentPage = 'add';
  } else if (hash.startsWith('abilities')) {
    currentPage = 'abilities';
  } else if (hash.startsWith('settings')) {
    currentPage = 'settings';
  } else if (hash.startsWith('points')) {
    currentPage = 'points';
  } else if (hash.startsWith('achievements')) {
    currentPage = 'achievements';
  } else if (hash.startsWith('nominations')) {
    currentPage = 'nominations';
  } else if (hash.startsWith('feed')) {
    currentPage = 'feed';
  } else {
    currentPage = 'home';
  }
  
  render();
}

function showPage(page) {
  navigateTo(page);
}

function closeMenu() {
  menuOpen = false;
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('menu-overlay');
  if (menu) menu.classList.remove('open');
  if (overlay) overlay.style.display = 'none';
}

function openMenu() {
  menuOpen = true;
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('menu-overlay');
  if (menu) menu.classList.add('open');
  if (overlay) overlay.style.display = 'block';
}
