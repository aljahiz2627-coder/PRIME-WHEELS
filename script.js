// Mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

// Inventory category filters
const filters = document.querySelectorAll('.filter');
const cars = document.querySelectorAll('.car-card');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const category = button.dataset.filter;
  cars.forEach(car => car.classList.toggle('hide', category !== 'all' && car.dataset.category !== category));
}));

// Favorite buttons
document.querySelectorAll('.heart').forEach(button => button.addEventListener('click', () => {
  button.classList.toggle('liked');
  button.textContent = button.classList.contains('liked') ? '♥' : '♡';
}));

// Car detail dialog
const dialog = document.querySelector('#carDialog');
const dialogTitle = document.querySelector('#dialogTitle');
const dialogWhatsapp = document.querySelector('#dialogWhatsapp');
document.querySelectorAll('.detail-btn').forEach(button => button.addEventListener('click', () => {
  const name = button.dataset.car;
  dialogTitle.textContent = name;
  dialogWhatsapp.href = `https://wa.me/6281234567890?text=${encodeURIComponent('Halo GARASI DRIFT, saya tertarik dengan ' + name + '. Bisa minta informasi lebih lanjut?')}`;
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

// Reveal-on-scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
