document.addEventListener('mousemove', (e) => {
  const background = document.querySelector('.background');
  const speed = 2;
  const x = (window.innerWidth - e.pageX * speed) / 150;
  const y = (window.innerHeight - e.pageY * speed) / 150;

  background.style.transform = `translateX(${x}px) translateY(${y}px)`;
});
