export default function decorate(block) {

  [...block.children].forEach((section) => {
    const title = section.children[0]; 
    const content = section.children[1]; 


    title.addEventListener('click', () => {
      const isVisible = content.style.display === 'block';
      content.style.display = isVisible ? 'none' : 'block';
      section.classList.toggle('active'); 
    });
  });
}