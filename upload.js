const form = document.getElementById('upload-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  fetch('http://65.0.110.20:8007/torrents', {
    method: 'POST',
    body: formData,
  })
 .then(response => response.json())
 .then(data => {
    console.log('Success:', data);
  })
 .catch((error) => {
    console.error('Error:', error);
  });
});
