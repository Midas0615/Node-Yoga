const express = require('express');
const router = new express.Router();
const typeController = require('../../controllers/typeController')

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're an authorized administrator.",
    // user values passed through from auth middleware
    user: req.user
  });
});

router.post('/types', typeController.postTypes);

module.exports = router;
