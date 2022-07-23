const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/pricelist", require("./pricelist.routes"));
router.use("/signs", require("./signs.routes"));
router.use("/idn", require("./idn.routes"));

module.exports = router;
