// Добавление, удаление, восстановление тренировок
async function addByLink() {
  const link = document.getElementById('link-url').value;
  const errorDiv = document.getElementById('link-error');
  
  if (!link) {
    errorDiv.innerHTML = '❌ Введите ссылку';
    return;
  }
  
  errorDiv.innerHTML = '<span class="loader"></span> Обработка...';
  
  const url = `${SUPABASE_URL}/functions/v1/parse-activity`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: link })
    });
    
    const result = await response.json();
    
    if (!result.success) {
      errorDiv.innerHTML = '❌ ' + (result.error || 'Ошибка парсинга');
      return;
    }
  
    const { error: insertError } = await sb
      .from('activities')
      .insert({
        user_id: currentUser.id,
        platform: 'strava',
        activity_id: 'strava_' + Date.now(),
        name: result.name,
        distance_km: result.distance,
        duration_min: result.duration,
        pace_min_per_km: result.pace,
        activity_date: result.date,
        url: result.url || link
      });
  
    if (insertError) {
      errorDiv.innerHTML = '❌ ' + insertError.message;
    } else {
      navigateTo('trainings');
      setTimeout(() => {
        document.getElementById('link-url').value = '';
      }, 500);
    }
  } catch (err) {
    console.error('Fetch error:', err);
    errorDiv.innerHTML = '❌ Ошибка соединения: ' + err.message;
  }
}

async function addByScreenshot() { /* ... ваш код ... */ }
async function addManually() { /* ... ваш код ... */ }
function parseActivityText(text) { /* ... ваш код ... */ }

async function softDeleteActivity(activityId, activityName) { /* ... ваш код ... */ }
async function restoreActivity(activityId) { /* ... ваш код ... */ }
