// Конфигурация Supabase
const SUPABASE_URL = 'https://idkghmydocvjhuwtgojh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlka2dobXlkb2N2amh1d3Rnb2poIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNTU3NzgsImV4cCI6MjA4OTgzMTc3OH0.omQ4zi4gILIk8nQtbYPstcORhEyEhFvKDnFs5qwFlSM';

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Глобальные переменные
let currentUser = null;
let currentPage = 'home';
let menuOpen = false;
let deletedActivities = new Map();
let viewedUserId = null;
let feedPage = 1;
let feedLoading = false;
let feedHasMore = true;
