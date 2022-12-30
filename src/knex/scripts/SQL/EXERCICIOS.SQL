-- .1 Insira 5 usuários

insert into users
(first_name, last_name, email, passsoword_hash, salary) values
("Brian1", "Matias1", "00@1", "myPassword", round(rand() * 1000)),
("Brian2", "Matias2", "00@2", "myPassword", round(rand() * 1000)),
("Brian3", "Matias3", "00@3", "myPassword", round(rand() * 1000)),
("Brian4", "Matias4", "00@4", "myPassword", round(rand() * 1000)),
("Brian5", "Matias5", "00@5", "myPassword", round(rand() * 1000))

-- .2 Insira 5 perfís para os usuários inseridos
insert into profiles
(user_id, bio, description) values
((select id from users where email = "00@1"),
"new bio", "new description"),
((select id from users where email = "00@2")
, "new bio", "new description"),
((select id from users where email = "00@3"),
"new bio", "new description"),
((select id from users where email = "00@4"),
"new bio", "new description"),
((select id from users where email = "00@5"),
"new bio", "new description")

-- .3 Insira permisões (roles) para os usúarios inseridos

INSERT into users_roles
(user_id, role_id) values
((select id from users where email = "00@1"),
(select id from roles where name = "put")),
((select id from users where email = "00@2"),
(select id from roles where name = "put")),
((select id from users where email = "00@3"),
(select id from roles where name = "put")),
((select id from users where email = "00@4"),
(select id from roles where name = "put")),
((select id from users where email = "00@5"),
(select id from roles where name = "put")),

-- .4 selecione os últimos 5 usuários por ordem descrescente
select * from users u 
order by id desc
limit 5;

-- .5 atualize o último usuário inserido
update users u
set u.email = "email alterado__"
order by id desc
limit 1;

-- .6 remova uma permissão de algum usuário
delete FROM users_roles u
where
user_id = (select id from users where email = "00@3") AND
role_id = (select id from users where email = "put")

-- .7 Selecione usuários com perfís e permiões ordenado por salário

select
u.first_name,
p.description,
r.name
from users u
left join profiles p 
on u.id = p.user_id
inner join users_roles ur 
on ur.user_id = u.id
inner join roles r
on r.id = ur.role_id
order by u.salary asc