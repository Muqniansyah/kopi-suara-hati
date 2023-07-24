//Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
// ketika search menu diklik
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  // supaya inputnya langsung aktif
  searchBox.focus();
  // suapaya aksi defaultnya tidak dilakukan
  // membajak tag a/link tidak jalan agar saat diklik dimanapun tidak scroll keatas.
  e.preventDefault();
};

// Toogle class active untuk shopping-cart
const shoppingCart = document.querySelector(".shopping-cart");
// ketika shopping-cart diklik
document.querySelector("#shopping-cart").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  // suapaya aksi defaultnya tidak dilakukan
  // membajak tag a/link tidak jalan agar saat diklik dimanapun tidak scroll keatas.
  e.preventDefault();
};

// klik diluar elemen
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = documnet.querySelector("#search-button");
const shoppingCartButton = document.querySelector("#shopping-cart");

document.addEventListener("click", function (e) {
  //jika di klik diluar hamburger menu dan navbar atau selama yg diklik bukan navbar dan hamburger menu berarti kita hilangin class aktifnya.
  //e.target artinya yg diklik dengan mouse pada saat itu
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  // jika diklik diluar search-button
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  // jika diklik diluar shopping-cart
  if (
    !shoppingCartButton.contains(e.target) &&
    !shoppingCart.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = documnet.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelector(".item-detail-button");

// ketika tombol diklik
itemDetailButton.onclick = (e) => {
  // kita ambil modalnya dan kita ubah style display jadi flex
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};
