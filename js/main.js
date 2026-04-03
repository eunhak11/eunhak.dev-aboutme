// eunhak.dev — main.js
// 나중에 각 페이지 JS 로직을 여기로 분리할 예정

// TODO: api.eunhak.dev 연동 시 아래 BASE_URL 사용
// const BASE_URL = 'https://api.eunhak.dev';

// ── 유틸 ──────────────────────────────────────────
function $(selector) { return document.querySelector(selector); }
function $$(selector) { return document.querySelectorAll(selector); }

// ── 현재 페이지 nav active 처리 ───────────────────
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
