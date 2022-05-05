const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const router  = express.Router();

router.get('/', (req,res) => {
    res.render('diary', {title: '일기장'});
});

router.get('/diarys', (req, res) => {
    res.sendFile(path.join(__dirname, './diarys.json'));
});
router.use('/diary', async (req, res, next) => {
    req.diarys = JSON.parse(
        await fs.readFile(path.join(__dirname, './diarys.json'))
    );
    next();
});

router.post('/diary', async (req, res) => {
    const userName = req.session.user.name;
    const {title, contents} = req.body;
    const created = Date.now();
    diarys[userName] = {title,contents, created};
    await fs.writeFile(
        path.join(__dirname, './diarys.json'),
        JSON.stringify(req.diarys)
    );
    res.end();
});

router.route('/diary/:id')
.get( (req, res) => {
    res.sendFile(path.join(__dirname, './diarys.json'));
})
.put( async (req, res) => {
    const {title, contents, created} = req.body;
    req.diarys[req.params.id] = {title, contents, created};
    await fs.writeFile(
        path.join(__dirname, './diarys.json'),
        JSON.stringify(req.diarys)
    );
    res.end();
})
.delete(async (req, res) => {
    delete diarys[req.params.id];
    await fs.writeFile(
        path.join(__dirname, './diarys.json'),
        JSON.stringify(req.diarys)
    );
    res.end();
});

module.exports = router;