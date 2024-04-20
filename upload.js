// const form = document.getElementById('upload-form');
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const formData = new FormData(form);
//   for (item of formData){
//     console.log(item[0],item[1]);
//   }
//   fetch('http://65.0.110.20:8007/torrents', {
//     method: 'POST',
//     body: formData,
//   })
//  .then(response => response.json())
//  .then(data => {
//     console.log('Success:', data);
//   })
//  .catch((error) => {
//     console.error('Error:', error);
//   });
// });

const form = document.getElementById('upload-form');
form.addEventListener('submit', (e) => {
 e.preventDefault(); // Correctly calling the preventDefault method

 const formData = new FormData(form);
 console.log(typeof formData);
 console.log(formData.getAll);
 console.log(formData);
 
 for (let pair of formData.entries()) {
  console.log(pair[0]+ ', '+ pair[1]); 
}

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