# SNS 서비스 프로젝트
<br>

## 프로젝트 요구사항
1. 로그인
2. 이미지 업로드
3. 게시글 작성
4. 해시태그 검색
5. 팔로잉
위의 5가지 중, 3번까지 필수 구현

## 기술 스택
- 관계형 DB MySQL 사용할 것
- Node js


## 프로젝트 구조
image.png
- routes/page.js 템플릿 엔진을 렌더링하는 라우터
- views/layout.html 프론트 화면 레이아웃 ( 로그인, 유저 정보 )
- views/main.html 메인 화면 ( 게시글 )
- views/profile.html 프로필 화면 ( 팔로잉 관계 )
- views/error.html 에러 발생시 화면
- public/main.css