-- CREATE DATABASE webboard DEFAULT CHARACTER SET utf8;

-- 이미 존재하는 table 삭제
-- table 삭제시 유의: 
-- users의 id를 외래키로 사용하는 comments 테이블을 지우지 않은채로 
-- users 테이블을 삭제할 경우 오류 발생 
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS users;

-- users table 생성
CREATE TABLE webboard.users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  age TINYINT UNSIGNED NOT NULL,
  notice BOOLEAN NOT NULL,
  comment TEXT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY name_UNIQUE (name ASC)
) COMMENT='사용자 정보' DEFAULT CHARSET=utf8 ENGINE=InnoDB;


-- comments table 생성
-- DROP TABLE IF EXISTS comments;

CREATE TABLE webboard.comments (
  id INT NOT NULL AUTO_INCREMENT,
  commenter INT NOT NULL,
  comment VARCHAR(100) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT now(),
  PRIMARY KEY (id),
  INDEX commenter_idx (commenter ASC),
  CONSTRAINT commenter 
  FOREIGN KEY (commenter) REFERENCES users (id) 
  ON DELETE CASCADE 
  ON UPDATE CASCADE
) COMMENT='댓글' DEFAULT CHARSET=utf8mb4 ENGINE=InnoDB;
