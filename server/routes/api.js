const express = require('express');

const router = express.Router();

router.use('/my-protected-api', function (req, res, next) {
  if (!req.user) {
    return res.status(401).end();
  }
  res.send({ hello: 'world' });
});

module.exports = router;
