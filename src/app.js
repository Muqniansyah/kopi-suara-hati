// memakai template global data dari alpine
// alpine:init merupakan inisialisasi alpine.
document.addEventListener("alpine:init", () => {
  // membuat data dengan alpine.data
  Alpine.data("products", () => ({
    // data kopi
    items: [
      {
        id: 1,
        name: "Robusta Brazil",
        img: "products1.jpg",
        price: 20000,
      },
      {
        id: 2,
        name: "Arabica Blend",
        img: "products2.jpg",
        price: 25000,
      },
      {
        id: 3,
        name: "Affogato",
        img: "products3.jpg",
        price: 30000,
      },
      {
        id: 4,
        name: "Cold Brew",
        img: "products4.jpg",
        price: 20000,
      },
      {
        id: 5,
        name: "Long Black",
        img: "products5.jpg",
        price: 25000,
      },
    ],
  }));

  // menghubungkan data kita dengan shopping cart dengan alpine.store
  Alpine.store("cart", {
    // nilai awal
    items: [], //untuk menyimpan data barang yang udah ditambahain kedalam shopping cart kita
    total: 0, //untuk total harga
    quantity: 0, //untuk total jumlah

    // method untuk nambahin data
    add(newItem) {
      // cek apakah ada barang yang sama dicart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika belum ada / cart masih kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price }); // kita pecah jadi objek lalu sambil menambahkan komponen baru yaitu quantity per item dan totalnya yaitu awal harga barang itu
        this.quantity++; // setiap masuk 1 barang maka quantity nambah 1
        this.total += newItem.price; //setiap masuk barang maka total nambah dengan harga dari newItem
      } else {
        // jika barang sudah ada dicart, cek apakah barang beda atau sama dengan yang ada di cart.
        this.items = this.items.map((item) => {
          // jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang sudah ada, tambah quantity dan totalnya
            // ini untuk menghitung quantity dari sebuah item
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++; // dan ini untuk menghitung quantity dari keseluruhan barang yang ada di cart.
            this.total += item.price;
            return item;
          }
        });
      }
      console.log(this.items);
      console.log(this.total);
    },
    // method untuk menghapus data
    remove(id) {
      // ambil item yang mau diremove berdasarkan id nya
      const cartItem = this.items.find((item) => item.id === id);

      // jika item lebih dari satu
      if (cartItem.quantity > 1) {
        // telsuri satu per satu
        this.items = this.items.map((item) => {
          // jika bukan barang yang diklik
          if (item.id !== id) {
            return item;
          } else {
            // jika merupakan barang yang diklik
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // jika item sama dengan 1 atau jika barangnya sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// Konversi ke Rupiah menggunakan Intl.NumberFormat
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
