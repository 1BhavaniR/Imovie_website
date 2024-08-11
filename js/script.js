function toggleVideo() {
  const trailer = document.querySelector('.trailer');
  const video = document.querySelector('video');
  trailer.classList.toggle('active');
  
  if (trailer.classList.contains('active')) {
    video.play();
  } else {
    video.pause();
  }
}

function changeBg(bg, title) {
  const banner = document.querySelector('.banner');
  const contents = document.querySelectorAll('.content');

  // Use the bg parameter directly in the URL
  banner.style.background = `url(${bg}) no-repeat`;
  banner.style.backgroundSize = 'cover';
  banner.style.backgroundPosition = 'center';

  contents.forEach(content => {
    content.classList.remove('active');
    if (content.classList.contains(title)) {
      content.classList.add('active');
    }
  });
}

$(document).ready(function(){
  $('.carousel').carousel();
});
