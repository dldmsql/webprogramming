const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Post, User } = require('../models');

const router = express.Router();

// req.user의 사용자 데이터를 넌적스 템플릿에서 이용가능하도록 res.locals에 저장
router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// 사용자 프로필 조회
router.get('/profile', isLoggedIn, async (req, res, next) => {
  console.log(req.user.id);
  try {
    const posts = await Post.findAll({
      attributes : ['content', 'updatedAt'],
      include: {
        model: User,
        attributes: ['id', 'nick'],
        where : {id: req.user.id},
      },
      order: [['createdAt', 'DESC']],
    });
    res.render('profile', { 
      title: '내 정보 - NodeBird' ,
      twits : posts
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
 
});

// 회원가입
router.get('/join', isNotLoggedIn, (req, res) => {
  res.render('join', { title: '회원가입 - NodeBird' });
});


// 포스트 전체 목록 조회
router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ['id', 'nick'],
      },
      order: [['createdAt', 'DESC']],
    });
    res.render('main', {
      title: 'NodeBird',
      twits: posts,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});



module.exports = router;
