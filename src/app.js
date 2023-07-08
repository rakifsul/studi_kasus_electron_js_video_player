// script ini membuat BrowserWindow.

// begin: import modules.
const { app, BrowserWindow } = require("electron");

const DialogService = require("./background/dialogservice");
// end: import modules.

// variabel penampung BrowserWindow.
let win;

// saat app ready.
app.on("ready", () => {
    // inisialisasi dialog service.
    // agar di renderer process bisa
    // memanggil fitur dialog
    // melalui ipcRenderer.invoke.
    DialogService();

    // buat BrowserWindow.
    win = new BrowserWindow({
        height: 565,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });

    // load URL ini.
    win.loadURL(`file://${__dirname}/foreground/index.html`);
});
