const form = document.getElementById('orderForm');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  message.classList.remove('hidden');
  form.reset();
});
