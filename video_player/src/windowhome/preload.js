// script ini berisi preload dari WindowHome.

// begin: import modules
const { contextBridge, ipcRenderer } = require("electron");
// end: import modules

// expose sebagai preload sehingga dapat diakses di renderer.js
contextBridge.exposeInMainWorld("preload", {
    // definisi openFileDialog
    openFileDialog: async () => {
        let result = await ipcRenderer.invoke("dialog-show-open-dialog", {
            title: "Open a Video",
            properties: ["openFile"],
            filters: [
                {
                    name: "MP4 File",
                    extensions: ["mp4"],
                },
                {
                    name: "M4V File",
                    extensions: ["m4v"],
                },
                {
                    name: "WEBM File",
                    extensions: ["webm"],
                },
                {
                    name: "OGV File",
                    extensions: ["ogv"],
                },
            ],
        });

        return result;
    },
});
