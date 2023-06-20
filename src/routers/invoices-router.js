const { Router } = require("express");
const invoicesCtr = require("../controllers/invoices-controller");
const { verifyToken } = require("../middlewares/auth-middleware");
const { invoiceValidate } = require("../middlewares/validation-middleware");

const router = Router();

//invoices

router.get("/invoices", invoicesCtr.GET_INVOICES);
router.get("/invoices/:id", invoicesCtr.GET_ONE_INVOICE);
router.post("/invoices", verifyToken, invoiceValidate, invoicesCtr.ADD_INVOICE);
router.put("/invoices/:id", verifyToken, invoicesCtr.UPDATE_INVOICE);
router.patch("/invoices/:id", verifyToken, invoicesCtr.PAID_INVOICE);
router.delete("/invoices/:id", verifyToken, invoicesCtr.DELETE_INVOICE);

module.exports = router;
