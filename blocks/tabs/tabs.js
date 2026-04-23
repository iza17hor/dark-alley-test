export default function decorate(block) {
  const rows = [...block.children];


  const tabList = document.createElement('div');
  tabList.className = 'tabs-list';

  const contentContainer = document.createElement('div');
  contentContainer.className = 'tabs-content';

  rows.forEach((row, index) => {
    const [title, content] = row.children;


    const tab = document.createElement('button');
    tab.className = 'tabs-tab';
    tab.textContent = title.textContent;

    tabList.append(tab);

  
    const panel = document.createElement('div');
    panel.className = 'tabs-panel';
    panel.append(content);

    contentContainer.append(panel);


    if (index !== 0) {
      panel.style.display = 'none';
      tab.classList.remove('active');
    } else {
      tab.classList.add('active');
    }


    tab.addEventListener('click', () => {
      // reset all
      [...tabList.children].forEach(t => t.classList.remove('active'));
      [...contentContainer.children].forEach(p => (p.style.display = 'none'));


      tab.classList.add('active');
      panel.style.display = 'block';
    });
  });


  block.innerHTML = '';
  block.append(tabList, contentContainer);
}