export default function decorate(block) {
  
  
  const rows = [...block.children];
  const contentRow = rows[1]; 

  if (contentRow) {
    const link = contentRow.querySelector('a');
    
    if (link) {
   
      link.classList.add('button-link');

  
      const textContent = contentRow.textContent.toLowerCase();
      if (textContent.includes('primary')) link.classList.add('primary');
      if (textContent.includes('secondary')) link.classList.add('secondary');


      block.replaceChildren(link);
    }
  }
}
