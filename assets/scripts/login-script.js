/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/* Membuat variabel untuk setiap elemen view */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/* Membuat variabel untuk menyimpan informasi email dan password */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* Menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    // Mendapatkan nilai dari masing-masing input (email dan password) ketika tombol ditekan
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;

    /* Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan */
    if(email == expectedEmail && password == expectedPassword){
      goToHome(); //jika sesuai maka program akan berpindah ke halamn login
    }else{
      showPopUp(); //namun jika tidak sesuai akan  menampilkan informasi bahwa input salah
    }
});
