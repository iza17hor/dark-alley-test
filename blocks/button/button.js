export default function decorate(block) {
  const link = block.querySelector('a');
  
  if (link) {
    link.classList.add('button-link');
    
    const buttonText = block.textContent.toLowerCase();
    if (buttonText.includes('primary')) link.classList.add('primary');
    if (buttonText.includes('secondary')) link.classList.add('secondary');

    block.textContent = '';
    block.append(link);
  }
}
