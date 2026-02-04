function playVideo(video) {
  // Остановить все остальные
  document.querySelectorAll("video").forEach(v => {
    if (v !== video) {
      v.pause();
      v.currentTime = 0;
    }
  });

  // Запуск
  video.muted = false;
  video.play().catch(e => {
    console.log("Play error:", e);
  });
}

function order(name) {
  alert("Заказ видео: " + name);
}
