const preloader = document.getElementById('preloader');
const main = document.getElementById('main');
const video = document.getElementById('preloaderVideo');

const preloadTime = 4000; 
let preloaderHidden = false;

function hidePreloader() {
  if (preloaderHidden) return;
  preloaderHidden = true;

  if (preloader) {
    preloader.classList.add('fade-out');
    preloader.setAttribute('aria-hidden', 'true');
  }

  if (main) {
    main.setAttribute('aria-hidden', 'false');
    main.classList.remove('hidden');
  }

  setTimeout(() => {
    if (preloader) preloader.style.display = 'none';
  }, 1000); // match CSS fade duration
}

// If video exists, hide when it ends
if (video) {
  // If autoplay is blocked and video never plays, this may never fire, so we also have a timeout below
  video.addEventListener('ended', hidePreloader);
}

// Fallback: hide after a short time
setTimeout(hidePreloader, preloadTime);
