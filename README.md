# shb_el_video_player - Aplikasi Video Player dengan Electron js

## Software Apakah Ini?

shb_el_video_player adalah aplikasi Video Player yang dibuat dengan Electron js...

Uniknya, kita hanya perlu mengetikkan sedikit baris kode saja sampai jadi.

Aplikasi ini menggunakan Metro CSS dan JQuery.

## Cara Kerja

Pertama-tama kita membuat BrowserWindow yang me-load URL dari file HTML.

Di file HTML tadi kita mengimpor JQuery dan CSS dan JS dari Metro CSS.

Karena Metro CSS memiliki komponen video player, kita tinggal menggunakannya saja untuk memainkan video.

Di window utama, kita membuat sebuah button atau tombol yang jika di-klik, maka dialog akan dibuka untuk memilih file video.

Selanjutnya, jika user kembali membuka video maka tempelan komponen video player akan dibuat dan ditempelkan ulang.

## Cara Mencoba Kode Ini

### Mode Development

Untuk menjalankan aplikasi ini dalam mode development, masuk ke dalam folder source code-nya (folder ini) via command line, lalu:

```
npm install
```

Selanjutnya, untuk menjalankan kode dalam bentuk plaintext:

```
npm run dev
```

### Mode Production

Untuk menjalankan aplikasi ini dalam mode production, masuk ke dalam folder source code-nya (folder ini) via command line, lalu:

```
npm install
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

Hasilnya ada di "../\_Release/shb_el_video_player".

## Screenshot

![ScreenShot](https://github.com/shbfrlnc/shbfrlnc-images/blob/main/gratisan/shb-el-video-player/screenshot-1.png?raw=true)

![ScreenShot](https://github.com/shbfrlnc/shbfrlnc-images/blob/main/gratisan/shb-el-video-player/screenshot-2.png?raw=true)
