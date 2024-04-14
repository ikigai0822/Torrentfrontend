
//uploading list of torrentz to the server 
const uploadForm = document.getElementById('upload-form');
const torrentFile = document.getElementById('torrent-file');
const torrentList = document.getElementById('torrent-list');

uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const file = torrentFile.files[0];
  const formData = new FormData();
  formData.append('torrent', file);
  fetch('https://api.example.com/upload', {
    method: 'POST',
    body: formData,
  })
 .then(response => response.json())
 .then(data => {
    const li = document.createElement('li');
    li.textContent = data.name;
    torrentList.appendChild(li);
  })
 .catch(error => {
    console.error(error);
  });
});

//fetching list of torrents from the server
fetch('https://api.example.com/list')
 .then(response => response.json())
 .then(data => {
    const table = document.getElementById('torrent-table');
    const headers = ['Name', 'Size', 'Seeders', 'Leechers', 'Download'];
    const row = document.createElement('tr');
    headers.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      row.appendChild(th);
    });
    table.appendChild(row);
    data.forEach(torrent => {
      const row = document.createElement('tr');
      const cols = [torrent.name, torrent.size, torrent.seeders, torrent.leechers, `<a href="${torrent.downloadLink}">Download</a>`];
      cols.forEach(col => {
        const td = document.createElement('td');
        td.innerHTML = col;
        row.appendChild(td);
      });
      table.appendChild(row);
    });
  })
 .catch(error => {
    console.error(error);
  });