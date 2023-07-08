// kumpulan handler untuk dialog: messagebox, open dialog, dan save dialog

const { ipcMain, dialog } = require("electron");

function setup() {
    // begin: handle apa yang dikirimkan dari renderer process
    ipcMain.handle("dialog-show-message-box", async (event, args) => {
        // tampilkan message box
        let ret = await dialog.showMessageBox(args);
        return ret;
    });

    ipcMain.handle("dialog-show-open-dialog", async (event, args) => {
        // tampilkan open dialog
        let ret = await dialog.showOpenDialog(args);
        return ret;
    });

    ipcMain.handle("dialog-show-save-dialog", async (event, args) => {
        // tampilkan save dialog
        let ret = await dialog.showSaveDialog(args);
        return ret;
    });
    // end: handle apa yang dikirimkan dari renderer process
}

module.exports = setup;
