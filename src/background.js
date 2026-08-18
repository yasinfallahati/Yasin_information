import backgroundImage from '../assets/car-background.jpg';

export function mountBackground() {
  const background = document.createElement('div');
  background.className = 'scroll-background';
  document.body.prepend(background);

  const update = () => {
    background.style.setProperty('--background-image', `url("${backgroundImage}")`);
    background.style.setProperty('--background-offset', `${Math.min(window.scrollY * 0.04, 120)}px`);
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
}
