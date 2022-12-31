SELECT 
-- \/ precisa ser valores possiveis de agregação \/ --
max(salary) as max_salary, -- pega o valor maximo
min(salary) as min_salary, -- pega o valor minimo
avg(salary) as avg_salary, -- pega um valor médio
sum(salary) as sum_salary, -- pega uma soma dos valores
-- /\ precisa ser valores possiveis de agregação /\ --
count(salary) as count_salary -- retorna uma contagem de <x>
FROM users;