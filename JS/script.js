//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  //jika di klik diluar hamburger menu dan navbar atau selama yg diklik bukan navbar dan hamburger menu berarti kita hilangin class aktifnya.
  //e.target artinya yg diklik dengan mouse pada saat itu
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
