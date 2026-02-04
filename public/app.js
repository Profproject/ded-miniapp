function openVideo(file) {
  const modal = document.getElementById('modal');
  const player = document.getElementById('player');

  player.src = `/videos/${file}`;
  modal.style.display = 'flex';

  // важно для iOS
  player.muted = false;
  player.play().catch(() => {});
}

function closeModal() {
  const modal = document.getElementById('modal');
  const player = document.getElementById('player');

  player.pause();
  player.src = '';
  modal.style.display = 'none';
}
