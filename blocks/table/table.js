export default function decorate(block) {

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  const rows = [...block.children];

  rows.forEach((row, index) => {

    const tr = document.createElement('tr');

    [...row.children].forEach((cell) => {

      const tag = index === 0 ? 'th' : 'td';
      const td = document.createElement(tag);

      td.innerHTML = cell.innerHTML;

      tr.append(td);

    });

    if (index === 0) {
      thead.append(tr);
    } else {
      tbody.append(tr);
    }

  });

  table.append(thead);
  table.append(tbody);

  block.replaceChildren(table);
}