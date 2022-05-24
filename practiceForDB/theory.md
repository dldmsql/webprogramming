# RDB에서 관계 정의
users 모델과 comments 모델 간의 관계 정의
- 1:N 관계 
    사용자 한 명이 댓글 여러 개 작성 가능
시퀄라이즈에서는 1 : N 관계를 hasMany로 표현한다.
`사용자.hasMany(댓글)`

반대의 입장에서는 belongsTo를 사용한다.
`댓글.belongsTo(사용자)`

- 1:1 관계
```` bash
db.User.hasOne(db.Info, {foreignKey: 'UserId'
, sourceKey: 'id'});

db.Info.belongsTo(db.User, {foreignKey: 'UserId', targetKey: 'id'});
````

- N:M 관계
예 ) 게시글과 해시태그 테이블
하나의 게시글이 여러 개의 해시태그를 가질 수 있고, 하나의 해시태그가 여러 개의 게시글을 가질 수 있다.
DB 특성 상, 다대다 관계는 중간 테이블이 생긴다.

``` bash
db.Post.belongsToMany(db.Hashtag, {through: 'PostHashTag'});

db.Hashtag.belongsToMany(db.Post, {through: 'PostHashtag'});
```