# HW2
## 주제
express를 이용한 웹 서버 만들기

## 스택
nodejs
express
mySQL

## 서비스
* 블로그 같은 일기장 서비스

use case
1. 일기 작성
- 사용자는 {제목, 내용}를 작성한다.
- 시스템은 {제목, 작성자, 날짜, 내용}을 DB에 저장한다.
2. 일기 열람
- 시스템은 작성된 일기 리스트를 보여준다.
- 사용자는 리스트에서 일기를 하나 선택한다.
- 시스템은 선택한 일기를 보여준다.
3. 일기 수정
- 시스템은 작성된 일기 리스트를 보여준다.
- 사용자는 리스트에서 수정할 일기를 하나 선택한다.
- 시스템은 선택한 일기를 보여준다.
- 사용자는 일기를 수정한 후, 저장한다.
- 시스템은 변경된 사항을 DB에 저장한다.
4. 일기 삭제
- 시스템은 작성된 일기 리스트를 보여준다.
- 사용자는 리스트에서 수정할 일기를 하나 선택한다.
- 시스템은 선택한 일기를 DB에서 삭제한다.
    시스템은 페이지를 리다이렉트한다.

end point
1. 일기 작성
method: post
url: localhost:8080/diary

2. 일기 열람 ( 전체 )
method: get
url: localhost:8080/diary

3. 일기 열람 ( 개별 )
method: get
url: localhost:8080/diary/{diaryId}
param: diaryId

4. 일기 수정
method: put
url: localhost:8080/diray/{diaryId}
param: diaryId

5. 일기 삭제
method: delete
url: localhost:8080/diary/{diaryId}
param: diaryId

도메인
Diary
    id(pk)        | int
    title         | varchar(200)
    contents      | varchar(255)
    writer_id(fk) | int
    created       | TimeStamp
-------------------------------
User
    id(pk)        | int
    name          | varchar(20)
-------------------------------

SQL
CREATE TABLE nodejs.user (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE nodejs.diary (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    contents VARCHAR(255) NOT NULL,
    writer INT NOT NULL,
    created DATETIME NOT NULL DEFAULT now(),
    PRIMARY KEY (id),
    CONSTRAINT writer
    FOREIGN KEY (writer) REFERENCES nodejs.user(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);