export default function decorate(block) {
  [...block.children].forEach((section) => {
    const title = section.querySelector('.accordion-title');
    const content = section.querySelector('.accordion-content');
    if (!title || !content) return;

    title.style.cursor = 'pointer';
    content.style.display = 'none';

    title.addEventListener('click', () => {
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
      section.classList.toggle('active');
    });
  });
}