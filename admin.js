const uploadForm = document.getElementById('uploadForm');
const uploadMsg = document.getElementById('uploadMsg');

uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  uploadMsg.classList.remove('hidden');
  uploadForm.reset();
});
