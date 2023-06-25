CREATE DATABASE backendII;

USE backendII;

CREATE TABLE clientes(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(25) NOT NULL,
	sobrenome VARCHAR(25) NOT NULL,
	email VARCHAR(50),
	idade INT
    );
    
CREATE TABLE produtos(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(25) NOT NULL,
    descricao VARCHAR(125),
    preco DECIMAL(8,2) NOT NULL,
    data_atualizado DATETIME DEFAULT NOW()
);

insert into clientes(nome, sobrenome, email, idade)
values('Lucas','Vieira','lucasvieira@gmail.com', 22),
('leonardo','augusto','leonardoaugusto@hotmail.com',22),
('gabriel','monteiro','gabsmont@outlook.com',27),
('Gustavo','Professor','gusProf@unilavras.edu',30);
    
insert into produtos(nome,descricao,preco)
values('produto1','descricao produto1',100.00),
('produto2','descricao produto 2',55.50),
('produto3','descricao produto 3',5.75),
('produto4','descricao produto 4',1250.50);

select * from clientes;
select * from produtos;


