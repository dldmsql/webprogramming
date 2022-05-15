/*
    모듈 정의
*/
const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const upload = multer({dest: 'uploads/'});

router.get('/', (req, res) => {
    res.render('upload', {title: '업로드할 파일 기록'});
});

router.post('/', upload.single('image'), (req, res) => {
    res.send('UPLOAD!');
});

module.exports = router;