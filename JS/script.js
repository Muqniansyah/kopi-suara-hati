//Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
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
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  // suapaya aksi defaultnya tidak dilakukan
  // membajak tag a/link tidak jalan agar saat diklik dimanapun tidak scroll keatas.
  e.preventDefault();
};

// klik diluar elemen
// document.querySelector berfungsi mencari elemen yang pertama kali ditemukan saja
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

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
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelectorAll(".item-detail-button");

// looping semua elemen dari itemDetailButton
itemDetailButton.forEach((btn) => {
  // ketika tombol diklik
  btn.onclick = (e) => {
    // kita ambil modalnya dan kita ubah style display jadi flex
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
// cari elemen close icon yang ada didalam modal dan ketika diklik
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik diluar modal untuk tutup close
window.onclick = (e) => {
  // jika yang ditarget adalah modal, maka
  if (e.target === itemDetailModal) {
    // hilangkan modalnya
    itemDetailModal.style.display = "none";
  }
};
