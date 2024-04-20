fetch('http://65.0.110.20:8007/torrents')
 .then(response => response.json())
 .then(data => {
    if (Array.isArray(data.Torrents)) {
      console.log(data.Torrents)
      console.log(typeof data.Torrents)
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
          const url = `http://65.0.110.20:8007/static/${torrent.title}`;
          fetch(url)
            .then(response => response.blob())
            .then(blob => {
              const blobUrl = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = blobUrl;
              link.download = torrent.title;
              link.click();
              URL.revokeObjectURL(blobUrl);  // Free up memory
            })
            .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
            });
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