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
        const sizeCell = document.createElement('td');
        sizeCell.textContent = torrent.size;
        const typeCell = document.createElement('td');
        typeCell.textContent = torrent.type;
        const healthCell = document.createElement('td');
        healthCell.textContent = torrent.health;
        const downloadsCell = document.createElement('td');
        downloadsCell.textContent = torrent.downloads;
        const titleCell = document.createElement('td');
        titleCell.textContent = torrent.title;
        row.appendChild(titleCell);
        row.appendChild(categoryCell);
        row.appendChild(descriptionCell);
        row.appendChild(sizeCell);
        row.appendChild(typeCell);
        row.appendChild(healthCell);
        row.appendChild(downloadsCell);
        torrentsBody.appendChild(row);
      });
    } else {
      console.error('The data.Torrents is not an array');
    }
  })
 .catch(error => {
    console.error(error);
  });