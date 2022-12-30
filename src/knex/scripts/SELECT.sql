-- *** SELECT ***
-- ? seleciona colunas
select 
u.email uemail, u.id uid, u.first_name ufirst_name
from users as u;

-- *** WHERE ***
-- ? filtra registros
-- operadores de comparação = < <= > >= <> !=
-- operadores lógicos and e or
select * from users
where 
created_at < '2020-12-15 23:33:41'
and first_name = 'Luiz' 
and password_hash = 'a_hash';

-- *** BETWEEN ***
-- seleciona um range
select * from users
where 
created_at between 
'2020-06-12 00:00:00' 
and '2020-09-04 23:59:59'
and id between 163 and 210;

-- *** IN ***
-- ? seleciona elementos entre os valores enviados
select * from users
where id in (110,115,120,125,130,1000,12200,1212545)
and first_name in ('Luiz', 'Keelie');

-- *** LIKE ***  (parecido) 
-- % qualquer coisa 
-- _ um caractere
select * from users
where first_name like '%ma%_';

-- *** Group ***
-- group consegue agrupar valores iguais
-- não pode ser diferente as tabelas para agrupar
-- por exemplo com id daria erro, para ver
-- a quantidade que é repetido os valores
-- utilizasse count()
select first_name, count(id) as total from users u 
group by first_name 
order by total desc

-- obs:
-- group deve ser chamado antes de "order"

-- *** Order ***
-- ordena valores:
-- order by id asc (id crescente)
-- order by id desc (id decrescente)
-- order by id asc, first_name desc (prioriza o id)
select id, first_name, email as uemail 
from users
where id between 100 and 150
order by first_name desc;

-- *** limit & offset ***
-- ? limit limita a qtd de valores
-- ? offset indica o inicio da contagem dos valores
-- ? forma de definir os dois: LIMIT <OFFSET>, <LIMIT>
select id, first_name, email as uemail 
from users
where id between 100 and 150
order by id asc
limit 9,3;

-- * SELECT MULTIPLE TABLES *
-- Seleciona users.id, profiles.id, profiles.bio
-- profiles.description, users.first_name
-- da tabela users e da tabela profiles
-- onde o id do usuário for o mesmo que
-- o user_id de profiles
SELECT u.id as uid, p.id as pid,
p.bio, u.first_name 
FROM users as u, profiles as p
WHERE u.id = p.user_id;
