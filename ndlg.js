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
