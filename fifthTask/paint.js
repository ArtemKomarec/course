let table = document.body.firstElementChild;
for (let i = 0; i < table.rows.length; i++) {
    let paintCell = table.rows[i];
    paintCell.cells[i].style.background = 'red';
}