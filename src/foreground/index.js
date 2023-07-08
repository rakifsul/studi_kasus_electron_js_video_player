// script ini adalah renderer process untuk BrowserWindow.

// begin: import modules
const { ipcRenderer } = require("electron");
// end: import modules

// ketika dokumen ready
$(document).ready(async function () {
    // ketika button dengan id btn-open-video diklik
    $("#btn-open-video").click(async function () {
        // buka open dialog untuk file dari format: webm, ogv, mp4, dan m4v.
        let result = await ipcRenderer.invoke("dialog-show-open-dialog", {
            properties: ["openFile"],
            filters: [
                {
                    name: "WEBM File",
                    extensions: ["webm"],
                },
                {
                    name: "OGV File",
                    extensions: ["ogv"],
                },
                {
                    name: "MP4 File",
                    extensions: ["mp4"],
                },
                {
                    name: "M4V File",
                    extensions: ["m4v"],
                },
            ],
        });

        if (result.filePaths[0]) {
            // bersihkan elemen di bawah elemen dengan id my-video
            $("#my-video").empty();

            // append dengan elemen video (bawaan dari metro css)
            $("#my-video").html(`<video data-role="video-player" data-src="${result.filePaths[0]}"></video>`);
        }
    });
});
