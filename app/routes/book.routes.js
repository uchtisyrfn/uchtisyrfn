module.exports = app => {
    const books = require("../controllers/book.controller");
    //cara mengakses gambar 
    http://polibatam.ac.id/img/perpustakaan.png
    //mengambil semua data
    app.get("/api/books", books.findAll)
};