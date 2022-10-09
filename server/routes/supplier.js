var express = require("express");
var router = express.Router();
var supplierController = require("./controller/supplier");
/* GET users listing. */

supplierController.addSupplier;
router.get("/", function (req, res, next) {
  res.send("respond from supplier");
});

// router.get("/x", supplierController.showAll);

router.get("/suppliercount", supplierController.supplierRecordCount);
router.post("/insert", supplierController.addSupplier);

router.get("/edit/:id", supplierController.editSupplier);

router.get("/delete/:id", supplierController.deleteSupplier);

router.get("/showASupplierONsearch", supplierController.showASupplierONsearch);
router.get("/showall", supplierController.showAllSupplier);

module.exports = router;
