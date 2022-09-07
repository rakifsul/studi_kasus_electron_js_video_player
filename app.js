// script ini membuat BrowserWindow.

// begin: import modules.
const {
    app,
    BrowserWindow
} = require('electron');
// end: import modules.

// variabel penampung BrowserWindow.
let win;

// saat app ready.
app.on('ready', () => {
    // buat BrowserWindow.
    win = new BrowserWindow({
        height: 565,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });

    // load URL ini.
    win.loadURL(`file://${__dirname}/assets/index.html`)
})