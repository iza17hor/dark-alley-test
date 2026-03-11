export default function decorate(block) {

  [...block.children].forEach((section) => {
    const titleDiv = section.children[0]; 
    const contentDiv = section.children[1]; 


    titleDiv.style.cursor = 'pointer';
    contentDiv.style.display = 'none';


    titleDiv.addEventListener('click', () => {
      contentDiv.style.display = contentDiv.style.display === 'block' ? 'none' : 'block';
      section.classList.toggle('active');
    });
  });
}