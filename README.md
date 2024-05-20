# Studi Kasus Electron JS Membuat Aplikasi Video Player

-   [Studi Kasus Electron JS Membuat Aplikasi Video Player](#studi-kasus-electron-js-membuat-aplikasi-video-player)
    -   [Cara Mencoba Kode Ini](#cara-mencoba-kode-ini)
        -   [Mode Development](#mode-development)
        -   [Mode Production](#mode-production)
    -   [Source Code Project Ini](#source-code-project-ini)
    -   [Pendahuluan](#pendahuluan)
    -   [Tujuan](#tujuan)
    -   [Prasyarat](#prasyarat)
    -   [Langkah-langkah](#langkah-langkah)
        -   [Menginisialisasi Project dengan npm](#menginisialisasi-project-dengan-npm)
        -   [Meng-install Dependencies](#meng-install-dependencies)
        -   [Membuat 3 Script Utama](#membuat-3-script-utama)
        -   [Membuat Folder "shb_el_video_player/build"](#membuat-folder-shb_el_video_playerbuild)
        -   [Membuat Folder "shb_el_video_player/src"](#membuat-folder-shb_el_video_playersrc)
        -   [Membuat Folder "shb_el_video_player/src/vendor"](#membuat-folder-shb_el_video_playersrcvendor)
        -   [Membuat Folder "shb_el_video_player/src/windowhome"](#membuat-folder-shb_el_video_playersrcwindowhome)
        -   [Pembuatan Project Selesai](#pembuatan-project-selesai)

## Cara Mencoba Kode Ini

### Mode Development

Untuk menjalankan aplikasi ini dalam mode development, masuk ke dalam folder source code-nya (folder "shb_el_video_player") via command line, lalu:

```
npm install
```

Selanjutnya, untuk menjalankan kode dalam bentuk plaintext:

```
npm run dev
```

### Mode Production

Untuk menjalankan aplikasi ini dalam mode production, masuk ke dalam folder source code-nya (folder "shb_el_video_player") via command line, lalu:

```
npm install
```

Generate lisensi pihak ke-3:

```
npm run genlicense
```

Obfuscate kode plaintext nya:

```
npm run obfuscate
```

jalankan kode yang sudah di-obfuscate:

```
npm run start
```

Untuk mem-build installer untuk Windows, obfuscate dahulu, karena kode plaintext untuk development, bukan production:

```
npm run obfuscate
```

Build installer:

```
npm run dist
```

Hasilnya ada di folder "./dist".

## Source Code Project Ini

Source code project ini ada di folder "shb_el_video_player".

## Pendahuluan

File video adalah file yang jika dibuka dengan aplikasi video player, akan menampilkan suatu kumpulan frame gambar yang bergerak seiring waktu.

Contoh yang paling mudah adalah file .mp4.

Jika Anda membuka file .mp4 dengan video player yang dapat memainkan file .mp4, maka akan tampil video-nya.

Video adalah sebuah media yang banyak gunanya.

Mulai dari hiburan hingga edukasi bisa menggunakan video.

Untuk memainkan video, dibutuhkan suatu aplikasi.

Yaitu aplikasi yang dapat menampilkan isi dari file berformat video.

Saat ini, sudah cukup banyak aplikasi pemutar video yang ada di pasaran.

Teknologi yang digunakan untuk membuatnya pun cukup beragam.

Electron adalah salah satunya.

Anda pasti tahu bahwa web browser saat ini bisa memainkan video.

Electron pun bisa dianggap sebagai web browser.

Maka, tidak aneh juga jika Electron menyediakan fitur untuk memainkan video dan memang faktanya demikian.

Bahkan, pembuatan aplikasi video player di Electron hanya memerlukan sedikit baris kode.

Bagaimana kita bisa membuat aplikasi video player dengan Electron? Itulah yang akan dibahas dalam studi kasus kali ini.

Dalam studi kasus ini, saya juga akan memperkenalkan sebuah library CSS bernama Metro UI.

Metro memiliki fitur yang cukup lengkap, salah satunya adalah untuk membuat elemen video player yang sudah memiliki controller-nya.

## Tujuan

Tujuan dari studi kasus ini adalah:

-   Pembaca mengenal Electron, Metro UI, dan bagian-bagiannya.
-   Pembaca mampu menggunakan main process, renderer process, dan preload.
-   Pembaca memahami bahwa pembuatan video player dengan Electron dan Metro UI adalah sangat sederhana.

## Prasyarat

Prasyarat dari studi kasus ini adalah:

-   Menggunakan sistem operasi Windows 10 atau yang lebih baru.
-   Menggunakan Node.js versi 20.9.0 dan npm versi 10.1.0.
-   Menggunakan Visual Studio Code.
-   Telah mengenal HTML, CSS, dan JavaScript sebelumnya.
-   Pernah melakukan coding sebelumnya.
-   Terbiasa menggunakan command line.

## Langkah-langkah

Walaupun saya telah menyediakan file project yang sudah jadi, ada baiknya jika Anda tahu langkah demi langkah yang harus dilakukan untuk membentuk project tersebut.

Di bagian ini, Anda akan dijelaskan bagaimana membentuk project tersebut.

Di bagian ini, saya tidak akan banyak menjelaskan kode.

Itu karena bagian "Langkah-Langkah" terfokus bagaimana cara membentuk project yang siap pakai.

Adapun pembahasan ada pada bagian "Pembahasan".

### Menginisialisasi Project dengan npm

Pertama, buatlah sebuah folder bernama "shb_el_video_player".

Kemudian, masuk ke dalam folder tersebut dengan:

```
cd shb_el_video_player
```

Selanjutnya, jalankan perintah ini:

```
npm init -y
```

Nanti, Anda akan mendapatkan file "package.json".

Sekarang, replace isi file "package.json" dengan kode ini:

```
{
    "name": "shb_el_video_player",
    "version": "2023.12.02",
    "description": "Aplikasi video player",
    "main": "main.js",
    "scripts": {
        "start": "electron .",
        "dev": "electron . --dev",
        "obfuscate": "node obfuscate.js",
        "dist": "electron-builder",
        "genlicense": "node ndlg.js"
    },
    "build": {
        "buildVersion": "0",
        "appId": "com.rakifsul.shb_el_video_player",
        "productName": "SHB EL Video Player",
        "win": {
            "target": "nsis",
            "icon": "build/icon.png"
        },
        "asar": true,
        "publish": null,
        "directories": {
            "output": "./dist"
        },
        "files": [
            "**/*",
            "!src",
            "!obfuscate.js",
            "!ndlg.js"
        ],
        "extraFiles": [
            "LICENSE",
            "3rdparty_licenses/*.*"
        ]
    },
    "keywords": [],
    "devDependencies": {
        "copy-dir": "^1.3.0",
        "electron": "^27.1.3",
        "electron-builder": "^24.9.1",
        "javascript-obfuscator": "^4.1.0",
        "license-checker": "^25.0.1"
    }
}
```

### Meng-install Dependencies

Saat ini, Anda telah menginisialisasi project.

Dengan menginisialisasi project, Anda mendapatkan "shb_el_video_player/package.json"

Di "shb_el_video_player/package.json" itulah dependencies akan atau telah didaftarkan.

Maka dari itu, jalankan ini dari folder "shb_el_video_player":

```
npm install
```

Untuk meng-install dan mendaftarkan dependencies yang telah terdaftar.

Jika itu sudah dilakukan, maka akan muncul folder baru di dalam folder "shb_el_video_player" bernama folder "node_modules".

### Membuat 3 Script Utama

Pada project ini ada 3 script utama yang tugasnya adalah untuk mendukung development dan sebagai bootstrapper.

Ketiga script tersebut adalah:

-   main.js
-   ndlg.js
-   obfuscate.js

Sekarang, buatlah file "shb_el_video_player/main.js" kemudian isi dengan kode ini:

```
// script ini berfungsi sebagai bootstrapper
// karena kita bisa menggunakan dua jenis script
// yakni yang obfuscated (ada di folder srcc)
// maupun yang plaintext (ada di folder src).

// jika panjang argument command line >= 3...
if (process.argv.length >= 3) {
    // jika argument ke 2 nya adalah --debug...
    if (process.argv[2] == "--dev") {
        // maka jalankan app.js yang plaintext.
        require("./src/app.js");
    } else {
        // maka jalankan app.js yang obfuscated.
        require("./srcc/app.js");
    }
} else {
    // jika argument command line selain itu
    // maka jalankan app.js yang obfuscated.
    require("./srcc/app.js");
}
```

Selanjutnya, buatlah file "shb_el_video_player/ndlg.js" kemudian isi dengan kode ini:

```
// script ini berfungsi untuk mengumpulkan file license dari node_modules
// dan menyatukannya dalam folder target.

// begin: import modules.
const fs = require("fs");
const path = require("path");
const checker = require("license-checker");
// end: import modules.

// folder tempat meletakkan license 3rd party.
let licenseFolder = "./3rdparty_licenses";

// buat foldernya jika belum ada.
if (!fs.existsSync(licenseFolder)) {
    fs.mkdirSync(licenseFolder);
}

// jalankan license-checker.
// dimulai dari folder di mana script ini berada.
// yakni, dalam hal ini, root folder.
checker.init(
    {
        start: "./",
        deps: "true",
    },
    function (err, packages) {
        if (err) {
        } else {
            console.log(packages);
            let theParsed = packages;

            // untuk setiap file license yang di-parse,
            // jika file license tersebut ada,
            // copy ke target folder.
            for (let obj in theParsed) {
                if (fs.existsSync(theParsed[obj].licenseFile)) {
                    console.log(theParsed[obj].licenseFile);
                    let tgt = licenseFolder + path.sep + path.dirname(theParsed[obj].licenseFile).split(path.sep).pop() + ".txt";
                    fs.copyFileSync(theParsed[obj].licenseFile, tgt);
                }
            }
        }
    }
);
```

Sekarang, buatlah file "shb_el_video_player/obfuscate.js" kemudian isi dengan kode ini:

```
// script ini berfungsi untuk meng-obfuscate script-script
// yang ada dalam folder src ke dalam folder srcc.

// begin: import modules.
const JavaScriptObfuscator = require('javascript-obfuscator');
const copydir = require('copy-dir');
const fs = require('fs');
// end: import modules.

// copy seluruh isi folder src ke dalam folder srcc.
copydir.sync('./src', './srcc', {
    utimes: true,
    mode: true,
    cover: true
});

// untuk meng-obfuscate script-script yang ada di dalam folder srcc.
function walkDirRecursive(pathInput) {
    // baca seluruh isi folder.
    let dir = fs.opendirSync(pathInput)
    let val = dir.readSync()

    // selama masih ada...
    while (val) {
        // jika nama foldernya mengandung kata "vendor"...
        if ((pathInput + '/' + val.name).includes('vendor')) {
            // maka skip.
            console.log("SKIPPED: " + pathInput + '/' + val.name);
        } else {
            // jika nama file nya memiliki ekstensi ".js"...
            if (val.name.includes('.js')) {
                // maka proses.
                console.log(pathInput + '/' + val.name);

                // baca file nya.
                let scriptContent = fs.readFileSync(pathInput + '/' + val.name, 'utf8');

                // kemudian obfuscate.
                let obfuscationResult = JavaScriptObfuscator.obfuscate(scriptContent, {
                    compact: false,
                    controlFlowFlattening: true
                });

                // ini hasil obfuscate nya.
                let protectedScriptContent = obfuscationResult.getObfuscatedCode();

                // rewrite.
                fs.writeFileSync(pathInput + '/' + val.name, protectedScriptContent);
            }
        }

        // jika folder...
        if (val.isDirectory()) {
            // maka panggil secara recursive fungsi ini.
            walkDirRecursive(pathInput + '/' + val.name);
        }

        val = dir.readSync();
    }
}

// obfuscate script-script yang ada di dalam folder srcc.
walkDirRecursive('./srcc');
```

### Membuat Folder "shb_el_video_player/build"

Sekarang, buatlah folder bernama "shb_el_video_player/build".

Isi folder tersebut dengan gambar .png dengan resolusi 512x512 pixel.

Beri nama gambar tersebut dengan "icon.png".

### Membuat Folder "shb_el_video_player/src"

Sekarang, buatlah folder bernama "shb_el_video_player/src".

Di folder "shb_el_video_player/src", buatlah file "shb_el_video_player/src/app.js", kemudian isi dengan kode ini:

```
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
```

Di folder "shb_el_video_player/src" juga, buatlah file "shb_el_video_player/src/appservices.js", kemudian isi dengan kode ini:

```
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
```

### Membuat Folder "shb_el_video_player/src/vendor"

Sekarang, kita akan membuat folder "shb_el_video_player/src/vendor".

Folder ini berisi dependency yang bukan diinstal via npm.

Dependencies tersebut adalah:

-   jquery
-   Metro UI

Website resmi jquery ada di:

https://jquery.com/

Repository Metro UI ada di:

https://github.com/olton/Metro-UI-CSS

Sebenarnya, Anda bisa membuild Metro UI dari source code, tapi itu tidak dibahas di sini.

jQuery juga bisa di-download langsung dari website-nya, tapi saya khawatir versinya beda.

Jadi, agar lebih akurat, Anda juga bisa meng-copy folder vendor dari project yang telah saya sediakan. Lokasinya ada di "shb_el_video_player/src/vendor" pada project yang disertakan bersama artikel ini.

Mungkin cara itu lebih baik agar tidak keliru versinya dan Anda tidak perlu repot-repot mem-build-nya.

### Membuat Folder "shb_el_video_player/src/windowhome"

Selanjutnya, kita akan membuat folder "shb_el_video_player/src/windowhome".

Di dalam folder "shb_el_video_player/src/windowhome", ada beberapa script:

-   main.js
-   preload.js
-   renderer.js
-   renderer.html

"shb_el_video_player/src/windowhome/main.js" adalah script dari main process, sedangkan "shb_el_video_player/src/windowhome/renderer.js" adalah script dari renderer process.

"shb_el_video_player/src/windowhome/main.js" akan memuat file "shb_el_video_player/src/windowhome/preload.js" dan "shb_el_video_player/src/windowhome/renderer.html".

"shb_el_video_player/src/windowhome/renderer.html" akan memuat "shb_el_video_player/src/windowhome/renderer.js".

Sekarang buatlah file "shb_el_video_player/src/windowhome/main.js" kemudian isi dengan kode ini:

```
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
```

Selanjutnya, buatlah file "shb_el_video_player/src/windowhome/preload.js" kemudian isi dengan kode ini:

```
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
```

Selanjutnya, buatlah file "shb_el_video_player/src/windowhome/renderer.js" kemudian isi dengan kode ini:

```
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
```

Selanjutnya, buatlah file "shb_el_video_player/src/windowhome/renderer.html" kemudian isi dengan kode ini:

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- import css -->
  <link rel="stylesheet" href="../vendor/metrocss/css/metro-all.min.css">

  <!-- judul header -->
  <title>SHB EL Video Player</title>
</head>

<body>
  <button id="btn-open-video" class="button outline large alert w-100">Open Video</button>

  <div id="my-video">
    <!-- video akan dipasang di sini -->
  </div>

  <!-- import script -->
  <script src="../vendor/jquery/jquery.min.js"></script>
  <script src="../vendor/metrocss/js/metro.min.js"></script>
  <script src="renderer.js"></script>
</body>

</html>
```

### Pembuatan Project Selesai

Sekarang, Anda telah membangun struktur file dan folder dalam project ini.

Selanjutnya Anda bisa menjalankan project ini dengan perintah:

npm run dev

Tampilannya seperti ini:

![Screenshot 1](./.md_asset/screenshot_1.png)

![Screenshot w](./.md_asset/screenshot_2.png)
