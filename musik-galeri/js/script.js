function filterVideos(category) {
  const videos = document.querySelectorAll(".video-item");
  videos.forEach(video => {
    if (category === "all" || video.dataset.category === category) {
      video.style.display = "block";
    } else {
      video.style.display = "none";
    }
  });
}
