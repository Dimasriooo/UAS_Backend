// import PatientController

const PatientController = require('../controllers/PatientController');

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Covid API Express");
});

/**
 * routing patient
*/  
// Route untuk menampilkan semua pasien 
router.get('/patients', PatientController.index);
//route untuk menambahkan pasien
router.post('/patients', PatientController.store);
//route untuk mengedit data pasien
router.put('/patients/:id', PatientController.update);
// route untuk menghapus data pasien
router.delete('/patients/:id', PatientController.destroy);
// route untuk menampilakan data pasien secara spesifik
router.get('/patients/:id', PatientController.show);
// route ini untuk mencari nama pasien
router.get('/patients/search/{name}', PatientController.search);
// route status untuk melihat pasien yang positif
router.get('/patients/status/positive', PatientController.positive);
// route status untuk melihat pasien yang recovered
router.get('/patients/status/recovered', PatientController.recovered);
// route status untuk melihat pasien yang dead
router.get('/patients/status/dead', PatientController.dead);

// export router
module.exports = router;
