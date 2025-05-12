# belajar-typescript-generic

To install dependencies:

```bash
bun install
```

This project was created using `bun init` in bun v1.2.11. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

# RANGKUMAN MATERI

## Tanpa Generic

Kita tidak menggunakan generic ketika kita ingin membuat class yang berisi tipe data yang bisa berubah-ubah. Biasanya kita menggunakan tipe data `any`. Pada file `nongeneric.ts` awalnya diinisiasikan sebagai string dengan isi `Aldi`. Kemudian kita mau `value` dari object `data` ini diubah ke huruf besar (toUpperCase) tidak akan terjadi error karena `value` bertipe data string. Akan tetapi ketika tipe data dari `value` ini diganti contohnya diganti menjadi 100 seperti kode program `data.value = 100;`, maka akan terjadi error ketika dijalankan walaupun ketika dilakukan compile tidak terjadi error. Jadi tipe data `any` ini tidak aman, jadi dengan adanya `generic` kita bisa tahu error yang terjadi ketika dilakukan kompilasi kode program. 