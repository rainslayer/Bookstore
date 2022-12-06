fetch(`http://localhost:3000/files`)
  .then((res) => res.json())
  .then((res) => {
    const tableBody = document.getElementById('table_body');
    res.map((file) => {
      const row = tableBody.insertRow();
      row.insertCell(0).innerHTML = file.title;
      row.insertCell(
        1,
      ).innerHTML = `<a href="http://localhost:3000/files/${file.secret}" target="_blank">Скачать</a>`;
    });
  });
