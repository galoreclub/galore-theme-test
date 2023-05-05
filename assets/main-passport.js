const btns = document.querySelectorAll('.dropdown');
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    btn.children[1].classList.toggle('open');
  })
})
