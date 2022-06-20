const express = require("express");
const router = express.Router();

const checkRole = (roles) => (req, res, next) =>
  req.user && roles.includes(req.user.role)
    ? next()
    : res.render("index", {
        roleErrorMessage: `Necesitas ser  ${roles} para acceder aquí`,
      });

router.get("/editor-page", checkRole(["COMPANY", "ADMIN"]), (req, res) =>
  res.json("../../web-front/src/components/pages/roles/company-page", {
    user: req.user,
  })
);
router.get("/admin-page", checkRole(["ADMIN"]), (req, res) =>
  res.json("../../web-front/src/components/pages/roles/admin-page", {
    user: req.user,
  })
);

module.exports = router;
