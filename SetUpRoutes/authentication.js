const router = require('express').Router();

router.get('/api/sample', (req, res) => {
  res.json({ message: 'successful' });
});

module.exports = router;
