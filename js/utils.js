// Вспомогательные функции
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}

function formatDuration(minutes) {
  if (!minutes) return '—';
  const hrs = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);
  return hrs > 0 ? `${hrs}ч ${mins}мин` : `${mins}мин`;
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return `${d.getDate().toString().padStart(2, '0')}.${(d.getMonth() + 1).toString().padStart(2, '0')}.${d.getFullYear()}`;
}

function formatPaceFromSeconds(seconds) {
  if (!seconds) return '—';
  const min = Math.floor(seconds / 60);
  const sec = Math.round(seconds % 60);
  return `${min}:${sec.toString().padStart(2, '0')}`;
}

function getAgeGroup(age) {
  if (age >= 18 && age <= 24) return '18-24';
  if (age >= 25 && age <= 29) return '25-29';
  if (age >= 30 && age <= 34) return '30-34';
  if (age >= 35 && age <= 39) return '35-39';
  if (age >= 40 && age <= 44) return '40-44';
  if (age >= 45 && age <= 49) return '45-49';
  if (age >= 50 && age <= 54) return '50-54';
  if (age >= 55 && age <= 59) return '55-59';
  if (age >= 60 && age <= 64) return '60-64';
  if (age >= 65 && age <= 69) return '65-69';
  if (age >= 70) return '70+';
  return '18-24';
}
