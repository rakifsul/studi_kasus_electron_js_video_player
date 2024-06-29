// script ini berisi definisi dari WindowHome

// begin: import modules
const { BrowserWindow } = require("electron");
const path = require("node:path");
// end: import modules

// definisi WindowHome
class WindowHome {
    constructor() {
        // buat BrowserWindow.
        // preload ada di folder ini.
        let self = this;
        self.browserWindow = new BrowserWindow({
            height: 565,
            webPreferences: {
                preload: path.join(__dirname, "preload.js"),
            },
        });

        // load file ini.
        self.browserWindow.loadFile(path.join(__dirname, "renderer.html"));

        // fokus pada window ini
        self.browserWindow.focus();
    }
}

// export module ini.
module.exports = WindowHome;
