document.getElementById("backToTopBtn").addEventListener("click", function backToTop() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
      window.requestAnimationFrame(backToTop);
      window.scrollTo(0, c - c / 30);
  }
});

document.getElementById("FylleKjøring").addEventListener("click", function() {
  var target = document.getElementById("6");
  var targetPosition = target.offsetTop - (window.innerHeight - target.offsetHeight) / 2;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
});


document.getElementById("Effekt").addEventListener("click", function() {
  var target = document.getElementById("3");
  var targetPosition = target.offsetTop - (window.innerHeight - target.offsetHeight) / 2;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
});



document.getElementById("Spillinfo").addEventListener("click", function() {
  var target = document.getElementById("4");
  var targetPosition = target.offsetTop - (window.innerHeight - target.offsetHeight) / 2;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
});


const links = document.querySelectorAll('a');
const currentPage = window.location.pathname;

links.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});


  