fetch('http://3.110.77.116/torrents')
 .then(response => response.json())
 .then(data => {
    if (Array.isArray(data.Torrents)) {
      console.log(data.Torrents)
      const torrentsBody = document.getElementById('torrents-body');
      data.Torrents.forEach(torrent => {
        const row = document.createElement('tr');
        const titleCell = document.createElement('td');
        titleCell.textContent = torrent.title;
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
        const actionsCell = document.createElement('td');
        const downloadButton = document.createElement('button');
        downloadButton.textContent = 'Download';
        console.log(torrent.title);
        downloadButton.addEventListener('click', () => {
          const url = `http://3.110.77.116/static/${torrent.title}`;
          const link = document.createElement('a');
          console.log(url);
          link.href = url;
          link.download = torrent.title;
          link.click();
        });
        actionsCell.appendChild(downloadButton);
        row.appendChild(titleCell);
        row.appendChild(categoryCell);
        row.appendChild(descriptionCell);
        row.appendChild(sizeCell);
        row.appendChild(typeCell);
        row.appendChild(healthCell);
        row.appendChild(downloadsCell);
        row.appendChild(actionsCell);
        torrentsBody.appendChild(row);
      });
    } else {
      console.error('The data.Torrents is not an array');
    }
  })
 .catch(error => {
    console.error(error);
  });