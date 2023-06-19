const { signupValidation } = require("../validation/user-validation");
const addInvoiceValidation = require("../validation/invoice-validation");

exports.userValidate = function (req, res, next) {
  try {
    const { error } = signupValidation(req.body);
    if (error) {
      console.log(error);
      return res.status(400).json({ msg: error.details[0].message });
    }
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal server error" });
  }
};

exports.invoiceValidate = function (req, res, next) {
  try {
    const { error } = addInvoiceValidation(req.body);
    if (error) {
      console.log(error);
      return res.status(400).json({ msg: error.details[0].message });
    }
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal server error (validation)" });
  }
};
