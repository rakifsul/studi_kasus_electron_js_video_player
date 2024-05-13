# Cara Mencoba Kode Ini

## Mode Development

Untuk menjalankan aplikasi ini dalam mode development, masuk ke dalam folder source code-nya (folder project) via command line, lalu:

```
npm install
```

Selanjutnya, untuk menjalankan kode dalam bentuk plaintext:

```
npm run dev
```

## Mode Production

Untuk menjalankan aplikasi ini dalam mode production, masuk ke dalam folder source code-nya (folder project) via command line, lalu:

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
