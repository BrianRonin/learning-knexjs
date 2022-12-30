-- ? adicionando uma role para todos usuarios
insert into users_roles (user_id, role_id)
select
id,
(select id from roles order by rand() limit 1) as qualquer
from users


-- * fazendo uma consulta Many to Many *
-- ? para todo many to many prescisa de uma tabela extra
-- ? no meio para fazer a conexão entre elas

SELECT u.first_name, r.name
from users u
inner join users_roles ur ON u.id = ur.user_id
inner join roles r on ur.role_id = r.id
order by u.first_name;