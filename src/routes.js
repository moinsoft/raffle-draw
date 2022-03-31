const router = require('express').Router();
const { sellSingleTicket, sellBulkTicket, findAll, findById, findByUsername, updateById, updateByUsername, deleteById, deleteByUsername, drawWinners } = require('./controllers');


 
// router.get('/t/:id');
// router.put('/t/:id');
// router.delete('/t/:id');

router.route('/t/:id').get(findById).put(updateById).delete(deleteById);

// router.get('/u/:username');
// router.put('/u/:username');
// router.delete('/u/:username');

router.route('/u/:username').get(findByUsername).put(updateByUsername).delete(deleteByUsername);

router.post('/bulk', sellBulkTicket);
router.get('/draw', drawWinners);

// router.post('/');
// router.get('/');

router.route('/').post(sellSingleTicket).get(findAll);

module.exports = router;