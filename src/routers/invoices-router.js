const { Router } = require("express");
const invoicesCtr = require("../controllers/invoices-controller");
// const {
//   userValidate,
//   postValidate,
//   commentValidate,
//   replyValidate,
// } = require("../middlewares/validation-middleware");
// const { verifyToken } = require("../middlewares/auth-middleware");

const router = Router();

//posts

router.get("/invoices", invoicesCtr.GET_INVOICES);
router.get("/invoices/:id", invoicesCtr.GET_ONE_INVOICE);
// router.post("/filter-active-posts", postCtr.FILTER_ACTIVE_POSTS);
// router.get("/get-active-posts/:id", postCtr.GET_ONE_ACTIVE_POST);
// router.get("/get-rejected-posts", verifyToken, postCtr.GET_REJECTED_POSTS);

//categories

// router.get("/get-categories", postCtr.GET_CATEGORIES);
// router.get("/get-names", postCtr.GET_NAMES);

// //

// router.post("/add-post", postValidate, postCtr.ADD_POST);
// router.post("/moderate-post", verifyToken, postCtr.MODERATE_POSTS);

//comments

// router.get("/get-comments", postCtr.GET_COMMENTS);

// router.post("/add-comment", commentValidate, postCtr.ADD_COMMENT);

// router.post("/add-reply-to-comment", replyValidate, postCtr.ADD_REPLY);

module.exports = router;
