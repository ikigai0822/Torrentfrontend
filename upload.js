const form = document.getElementById('upload-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  fetch('http://3.110.77.116/torrents', {
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
