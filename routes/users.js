var express = require('express');
const User = require('../models/User.model');
var router = express.Router();

/* GET users listing. */
router.put('/user/:id', function (req, res, next) {
  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body)
    .then((user) => {
      return res.json(user);
    })
    .catch((err) => next(err));

});



router.get('/user/:userId', function (req, res, next) {
  const userId = req.params.userId;
  User.findById(userId)
    .then((user) => {
      return res.json(user);
    })
    .catch((err) => next(err));
});

module.exports = router;
