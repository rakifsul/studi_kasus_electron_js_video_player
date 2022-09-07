// script ini adalah renderer process untuk BrowserWindow.

// begin: import modules
const {
    dialog
} = require('electron').remote;
// end: import modules

// ketika dokumen ready
$(document).ready(async function () {
    // ketika button dengan id btn-open-video diklik
    $('#btn-open-video').click(async function () {
        // buka open dialog untuk file
        let ret = await dialog.showOpenDialog({
            properties: ['openFile']
        });

        // bersihkan elemen di bawah elemen dengan id my-video
        $('#my-video').empty();

        // append dengan elemen video (bawaan dari metro css)
        $('#my-video').html(`<video data-role="video-player" data-src="${ret.filePaths[0]}"></video>`);
    });
});