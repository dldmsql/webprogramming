const express = require('express');
const Post = require('../models/post');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();


// 포스트 생성
router
.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    console.log('Post:', post.content, post.UserId);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    next(error);
  }
})
// 포스트 수정
.put('/:id', isLoggedIn, async (req, res, next) => {
  try {
    const postId = req.params.id;
    const content = req.body.content;
    const post = await Post.findOne({where:{id:postId}});
    console.log(post);
    if(post){
      Post.update({
        content : content,
      }, {
        where: {id: postId},
      });
      res.render('main', {
        title: 'NodeBird',
        twit: post,
      });
    } else {
      res.status(404).send('no post');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
})
// 포스트 삭제
.delete('/:id', isLoggedIn, async (req, res, next) => {
  try {
    const postId = req.params.id;
    await Post.destroy({
      where: {id: postId}
    })
    res.send("게시물 삭제 완료");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
