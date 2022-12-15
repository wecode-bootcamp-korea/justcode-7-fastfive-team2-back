-- migrate:up
INSERT INTO
`grades`(`grade_name`)
VALUES
("일반가입자"),
("일반입주자"),
("관리자"),
("대표"),
("퇴주자");

INSERT INTO
`users`(`email`,`password`,`grade_id`)
VALUES
("codeGa@justcode.com","X@4ow,1pZ}:",1),("codeNa@justcode.com","3t+s1_*f2K*",1),("codeDa@justcode.com",")9:BVD4F:>6",1),
("codeRa@justcode.com","55Eyf8aU>27",2),("codeMa@justcode.com","Exbpfb^8#Ue",2),("codeBa@justcode.com","pFAL#Bb)2yc",2),
("codeKim@justcode.com","codeKim1",3),("codeSa@justcode.com",",)R>CC:_P27",3),("codeAh@justcode.com","W0UVyn,G70)",3),
("codeJa@justcode.com","ZY,my6tBTk0",4),("codeCha@justcode.com","DQY%6=tfeBn",4),("codeCa@justcode.com","6)aEM}!qK,U",4),
("codeTa@justcode.com","4iV?U_aef.@",5),("codePa@justcode.com","X%RpU]0?yQf",5),("codeHa@justcode.com","!?d4Up@AFK}",5);
-- migrate:down

