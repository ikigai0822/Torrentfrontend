// fetch('http://3.110.77.116/torrents')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     let obj = data.Torrents
//     console.log(obj[0])
    
//   })

//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });


fetch('http://3.110.77.116/torrents')
.then(response => response.json())
.then(data => {
     if (Array.isArray(data.Torrents)) {
      console.log(data.Torrents) 
      const torrentsBody = document.getElementById('torrents-body');
       data.Torrents.forEach(torrent => {
         const row = document.createElement('tr');
         const categoryCell = document.createElement('td');
         categoryCell.textContent = torrent.category;
         const descriptionCell = document.createElement('td');
         descriptionCell.textContent = torrent.description;
         row.appendChild(categoryCell);
         row.appendChild(descriptionCell);
         torrentsBody.appendChild(row);
       });
     } else {
       console.error('The data.Torrents is not an array');
     }
   })
.catch(error => {
     console.error(error);
   });