const dataBase = require("../../config/database");

function supplierRecordCount(req, res) {
  const sqlstatment = `SELECT count(id) as count  FROM supplier`;

  dataBase.myDB.execute(sqlstatment, (err, data) => {
    err && console.log(err);
    res.status(200).send(data);
  });
}

function showAllSupplier(req, res) {
  const page = parseInt(req.query.page);
  const perPage = parseInt(req.query.perPage);
  const pageNo = perPage * (page - 1);

  const limitex = ` Limit ${pageNo},${perPage}`;
  console.log(limitex);
  const sqlstatment = `SELECT *  FROM supplier ${limitex}`;

  dataBase.myDB.execute(sqlstatment, (err, data) => {
    err && console.log(err);
    res.status(200).send(data);
  });
}

function addSupplier(req, res, next) {
  const mydata = req.body;
  const { SupplerData } = req.body;
  console.log("SupplerData", SupplerData);

  let newSupplier = `INSERT INTO supplier 
    (sup_name ,sales_name ,open_balance ,limit_balance ,alert_limit, salse_mobile,  sales_email)    VALUES(?,?,?,?,?,?,?);
    `;
  dataBase.myDB.execute(
    newSupplier,
    [
      SupplerData.supplierName,
      SupplerData.salesName,
      SupplerData.openingBalance,
      SupplerData.accountLimit,
      SupplerData.alertCheck,
      SupplerData.saleMobile,
      SupplerData.salesEmail,
    ],
    (err, results) => {
      err && console.log(err);
      res.status(200).send("row added");
    }
  );
}
function editSupplier(req, res, next) {
  res.send(`edit supplier from controller system  ${req.params.id}`);
}
function deleteSupplier(req, res, next) {
  res.send(`delete supplier from controller system  ${req.params.id}`);
}

module.exports = {
  addSupplier,
  editSupplier,
  deleteSupplier,
  showAllSupplier,
  supplierRecordCount,
};
