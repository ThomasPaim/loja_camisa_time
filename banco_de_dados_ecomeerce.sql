## ID se retrata do id_usuario

create database ecommerce_camisa_time character set utf8mb4 collate utf8mb4_unicode_ci;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha varchar(20) not null
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

create table produto (
	nome_produto varchar(100) not null,
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    preco decimal(5,2) not null
);

create table imagem(
	url_imagem varchar(255),
    id_imagem INT AUTO_INCREMENT PRIMARY KEY
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

alter table produto add id_imagem int, add FOREIGN KEY(id_imagem) references imagem(id_imagem);

create table itemPedido(
 id_produto int not null, 
 quantidade int,
 precoUnitario decimal(5,2),
 subtotal decimal(6,2),
 foreign key(id_produto)
 references produto(id_produto)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 
 
 
ALTER TABLE itemPedido add id_item_pedido int auto_increment primary key;

create table pedido(

	id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_item_pedido int not null,
    valorTotal decimal(6,2) not null,
    data_pedido DATETIME not null

)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


create table pagamento(
	id_pagamento int AUTO_INCREMENT PRIMARY KEY,
    meio_pagamento VARCHAR(100) not null,
    valor_pagamento decimal(6,2) not null,
    status_pagamento enum("Concluido", 'Pendente', 'Processando', 'Cancelado'),
    id_pedido int not null,
    foreign key(id_pedido)
    references pedido(id_pedido)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE endereco (
    id_endereco INT AUTO_INCREMENT PRIMARY KEY,
    pais VARCHAR(60) NOT NULL,          
    estado VARCHAR(50) NOT NULL,
    cidade VARCHAR(100) NOT NULL,      
    rua VARCHAR(150) NOT NULL,         
    numero VARCHAR(10) NOT NULL,       
    complemento VARCHAR(100),         
    bairro VARCHAR(100) NOT NULL,      
    cep CHAR(8) NOT NULL              
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

alter table pedido add id_endereco int not null, add foreign key(id_endereco) references endereco(id_endereco);


create table carrinho(
	id_carrinho int AUTO_INCREMENT PRIMARY KEY,
    id int not null,
    id_produto INT not null,
    quantidade int not null,
    preco_unitario int not null,
    foreign key(id)
    references usuarios(id),
    foreign key(id_produto)
    references produto(id_produto)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

create table itemCarrinho(
	id_item_carrinho  int AUTO_INCREMENT PRIMARY KEY,
    id_carrinho int not null,
    id_produto INT not null,
    quantidade int not null,
    precoUnitario int not null,
    
    foreign key(id_carrinho) references carrinho(id_carrinho),
    foreign key(id_produto) references produto(id_produto)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

alter table carrinho add id_item_carrinho int not null, add foreign key(id_item_carrinho) references itemCarrinho(id_item_carrinho);
