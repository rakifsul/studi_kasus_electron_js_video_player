// script ini berisi handler untuk open dialog

// begin: import modules
const { ipcMain, dialog } = require("electron");
// end: import modules

function setup() {
    // begin: handle apa yang dikirimkan dari renderer process
    ipcMain.handle("dialog-show-open-dialog", async (event, args) => {
        // tampilkan open dialog
        let ret = await dialog.showOpenDialog(args);
        return ret;
    });
    // end: handle apa yang dikirimkan dari renderer process
}

module.exports = setup;
