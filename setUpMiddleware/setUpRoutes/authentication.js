const router = require('express').Router();

router.get('/api/sample', (req, res) => {
  res.json({ message: 'successfull' });
});

module.exports = router;
