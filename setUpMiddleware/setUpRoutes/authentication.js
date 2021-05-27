const router = require('express').Router();
const db = require('../../database');

router.get('/api/sample', (req, res) => {
  let user = new db.users();

  user.profileName = 'Serad';
  user.profileSummary = "Serad's profile summarry";
  user.accessToken = 'accessToken';

  user
    .save()
    .then(() => {
      res.json({ message: 'successfull' });
    })
    .catch((err) => {
      throw err;
    });
});

module.exports = router;
