// ============= ОСНОВНОЙ ФАЙЛ =============
// Инициализация приложения и главный цикл рендеринга

async function initSession() {
  const { data: { session } } = await sb.auth.getSession();
  if (session) {
    currentUser = session.user;
  }
  handleRouting();
}

async function render() {
  if (!currentUser) {
    renderAuth();
    return;
  }
  
  switch (currentPage) {
    case 'home':
      await renderHome();
      break;
    case 'add':
      await renderAddPage();
      break;
    case 'trainings':
      await renderTrainingsPage();
      break;
    case 'leaderboard':
      await renderLeaderboardPage();
      break;
    case 'feed':
      await renderFeedPage();
      break;
    case 'abilities':
      await renderAbilitiesPage();
      break;
    case 'settings':
      await renderSettingsPage();
      break;
    case 'points':
      await renderPointsPage();
      break;
    case 'achievements':
      await renderAchievementsPage();
      break;
    case 'nominations':
      await renderNominationsPage();
      break;
    case 'userProfile':
      await renderUserProfile();
      break;
    default:
      await renderHome();
  }
}

// Запуск приложения
initSession();
window.addEventListener('popstate', () => handleRouting());
