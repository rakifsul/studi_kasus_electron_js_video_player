// script ini adalah renderer process untuk BrowserWindow.

// ketika dokumen ready
$(document).ready(async function () {
    // ketika button dengan id btn-open-video diklik
    $("#btn-open-video").click(async function () {
        // buka open dialog untuk file dari format: webm, ogv, mp4, dan m4v.
        let result = await preload.openFileDialog();

        // jika path yang diambil ada dan user tidak membatalkannya
        if (result.filePaths[0] && result.cancelled !== false) {
            // bersihkan elemen di bawah elemen dengan id my-video
            $("#my-video").empty();

            // append dengan elemen video (bawaan dari metro css)
            $("#my-video").html(`<video data-role="video-player" data-src="${result.filePaths[0]}"></video>`);
        }
    });
});
