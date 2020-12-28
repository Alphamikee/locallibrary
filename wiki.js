const router = require('express').Router();
router.get('/', (req, res) => {
    res.send('wiki home page');
});
router.get('/about', (req, res) => {
    res.send(req.params); 	
});
module.exports = router