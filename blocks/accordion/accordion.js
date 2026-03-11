export default function decorate(block) {
  [...block.children].forEach((row) => {
    const [title, content] = row.children;

    content.style.display = 'none';

    title.addEventListener('click', () => {
      content.style.display =
        content.style.display === 'block' ? 'none' : 'block';
    });
  });
}