export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row, index) => {
    const [title, content] = row.children;

  
    if (index !== 0) {
      content.style.display = 'none';
    } else {
      row.classList.add('active');
      content.style.display = 'block';
    }

    title.style.cursor = 'pointer';

    title.addEventListener('click', () => {

      const isOpen = row.classList.contains('active');

   
      rows.forEach((r) => {
        r.classList.remove('active');
        r.children[1].style.display = 'none';
      });

     
      if (!isOpen) {
        row.classList.add('active');
        content.style.display = 'block';
      }

    });
  });
}