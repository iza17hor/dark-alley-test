export default function decorate(block) {

  const slides = [...block.children];
  let current = 0;

  const track = document.createElement('div');
  track.className = 'carousel-track';

  slides.forEach((slide) => {
    slide.classList.add('carousel-slide');
    track.append(slide);
  });

  const prev = document.createElement('button');
  prev.textContent = '‹';
  prev.className = 'carousel-prev';

  const next = document.createElement('button');
  next.textContent = '›';
  next.className = 'carousel-next';

  function update() {
    track.style.transform = `translateX(-${current * 100}%)`;
  }

  prev.addEventListener('click', () => {
    current = current === 0 ? slides.length - 1 : current - 1;
    update();
  });

  next.addEventListener('click', () => {
    current = current === slides.length - 1 ? 0 : current + 1;
    update();
  });

  block.innerHTML = '';
  block.append(prev, track, next);

  update();
}