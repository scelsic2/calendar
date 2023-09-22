const router = require('express').Router();
const dayjs = require('dayjs')

router.get('/', async (req, res) => {
    res.render('index')
})

// router.get('/day', async (req, res) => {
//     console.log(req.params)
//     let date = 1
//     res.render('day', {date: date})
// });

module.exports = router;