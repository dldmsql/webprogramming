# 0509 강의노트
mySQL 워크 벤치는 cli 기반이 아니다.
DB에 대해 강의하는 게 목적이 아니라 서버를 만들 때, 웹 서버에 의해 저장해야 하는 정보를 변수에 담아두면, 서버 종료 시 사라진다.
데이터 유지를 위해 json 파일에 저장했다가 불러와서 원하는 데이터 찾아서 객체로 바꾸고 편집하는 과정을 서버 로직에서 처리해야 한다.
이걸 간단하게 해주는 DB를 이용할 거다. 많은 데이터 저장에 용이, 원하는 데이터 추출, 수정 등 효율성이 있다.

# 데이터베이스란?
## 디비 사용 목적
반영구적으로 보관할 수 있는 공간
서버에 접속할 수 있는 클라이언트가 매우 많다. 하나의 json 파일에 동시 접속해서 write 한다면? 충돌 가능성이 있다. DB가 이걸 알아서 관리해준다.
서버가 종료되도 데이터가 유지되도록 한다.
웹 서버는 DB를 로컬이 아닌 클라우드 등에 두고 쓴다.

## DBMS
데이터베이스 관리해주는 시스템이다.
MySQL은 DBMS 중에서도 RDBMS이다. RDBMS는 관계형 DB를 관리해주는 시스템이다. Relational 유무의 차이는? .... 
데이터베이스 안에 테이블 여러 개 저장해봤지?
테이블 간의 관계 - RDB
사용자와 리뷰 사이의 관계가 있나? 있지.

MongoDB는 RDB가 아니다. 관계가 명확하지 않다. 
RDB -> 데이터를 저장할 때, 형식을 정확히 지정해야 한다. 틀에 맞춰서만 저장할 수 있다. 
NoSQL -> RDB 아닌 거. RDB 안에 저장한 걸 CURD할 때, SQL로 하지 않아. 이건 주로 빅데이터에서 사용한다. 검색엔진? 번역?
# 시퀄라이즈
js 코드로 DB관리 해준다.


# 추가로 작성
## 외래키 FK
다른 테이블과의 관계를 명시할 때 사용한다.
다른 테이블의 기본 키를 저장한다.

문법
`
FOREIGN KEY (컬럼명) REFERENCES DB.TABLE(컬럼)
`
* CASCADE 설정
ON DELETE CASCADE 정보 지워질 때 같이 지워지기
ON UPDATE CASECADE 정보 업데이트될 때 같이 업데이트하기

# CRUD
CREATE
`
INSERT INTO TABLE (컬럼 ...) VALUES (값 ...);
`
READ
`
SELECT 컬럼 FROM TABLE;
SELECT 컬럼 FROM TABLE WHERE 조건;
SELECT 컬럼 FROM TABLE ORDER BY id DESC;
SELECT 컬럼 FROM TABLE LIMIT 1; // 개수 제한 ( 페이지네이션)
SELECT 컬럼 FROM TABLE LIMIT 1 OFFSET 1; // 스킵할 데이터 개수 설정 
`
UPDATE
`
UPDATE TABLE SET 컬럼 = 값 WHERE 조건;
`
DELETE
`
DELETE FROM TABLE WHERE 조건;
`