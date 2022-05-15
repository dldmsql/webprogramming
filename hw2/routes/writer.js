/*
    모듈 정의
*/
const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const router = express.Router();

/*
    GET 정의
*/ 
router.get('/', (req, res) => {
    res.render('writer', {title: 'TODO 작성'});
});

router.get('/writers', (req, res) => {
    res.sendFile(path.join(__dirname, '../writers.json'));
});

router.use('/writer', async (req, res, next) => {
    req.writers = JSON.parse(
        await fs.readFile(path.join(__dirname, '../writers.json'))
    );
    console.log('use 지나감');
    next();
});

/*
    POST 정의
*/
router.post('/writer', async (req, res) => {
    const { contents, date, done } = req.body;
    const id = Date.now();
    req.writers[id] = { contents, date, done };
    await fs.writeFile(
        path.join(__dirname, '../writers.json'),
        JSON.stringify(req.writers)
    );
    res.end();
});

/*
    PUT, DELETE 정의
*/
router.route('/writer/:id')
.put( async (req, res) => {
    const { contents, date, done } = req.body;
    req.writers[req.params.id] = { contents, date, done };
    await fs.writeFile(
        path.join(__dirname, '../writers.json'),
        JSON.stringify(req.writers)
    );
    res.end();
})
.delete( async (req, res) => {
    delete req.writers[req.params.id];
    await fs.writeFile(
        path.join(__dirname, '../writers.json'),
        JSON.stringify(req.writers)
    );
    res.end();
});

module.exports = router;