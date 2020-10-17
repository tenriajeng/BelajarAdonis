"use strict";

class DataMahasiswaController {
  async tampil({ view }) {
    const kata = "Selamat datang";

    return view.render("data.mhs", {
      title: "Data Mahasiswa terbaru",
      mhs: kata,
    });
  }
}

module.exports = DataMahasiswaController;
