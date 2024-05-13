// script ini adalah tempat membuat objek WindowHome.

// begin: import modules.
const { app } = require("electron");
const AppServices = require("./appservices");
const WindowHome = require("./windowhome/main");
// end: import modules.

let windowhome;

// saat app ready
app.on("ready", () => {
    // panggil AppServices
    AppServices();

    // buat objek WindowHome
    windowhome = new WindowHome();
});

// saat semua window di-close
app.on("window-all-closed", () => {
    // keluar aplikasi
    app.quit();
});

// saat app di-activate
app.on("activate", () => {
    // jika tidak ada objek WindowHome
    if (!windowHome) {
        // buat WindowHome
        windowHome = new WindowHome();
    }
});
