const router = require('express').Router();
const dayjs = require('dayjs')

router.get('/', (req, res) => {
    const now = dayjs().format('MMMM');
    res.render('index', {
        now: now,
    });
});

module.exports = router;