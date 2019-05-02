document.body.onload = function() {
  setTimeout(function() {
    var preloader = document.querySelector('#page-preloader');
    preloader.classList.add('preloader--done');
  }, 1000);
}
