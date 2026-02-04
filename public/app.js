function order() {
  alert("Оплата и заказ будут подключены позже");
}

// автопауза других видео
const videos = document.querySelectorAll("video");

videos.forEach(v => {
  v.addEventListener("play", () => {
    videos.forEach(o => {
      if (o !== v) o.pause();
    });
  });
});
