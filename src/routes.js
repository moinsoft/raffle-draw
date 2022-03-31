const router = require('express').Router();
const { sellSingleTicket, sellBulkTicket, findAll, findById, findByUsername } = require('./controllers');


 
// router.get('/t/:id');
// router.put('/t/:id');
// router.delete('/t/:id');

router.route('/t/:id').get(findById).put().delete();

// router.get('/u/:username');
// router.put('/u/:username');
// router.delete('/u/:username');

router.route('/u/:username').get(findByUsername).put().delete();

router.post('/bulk', sellBulkTicket);
router.get('/draw');

// router.post('/');
// router.get('/');

router.route('/').post(sellSingleTicket).get(findAll);

module.exports = router;