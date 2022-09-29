<div  align="center">
	<a  href="https://www.alphaedtech.org.br/">
	<img  src="https://user-images.githubusercontent.com/79182711/187928980-1c1c834c-d92c-4565-b7b6-9cf5b644873e.png"  alt="Alpha EdTech"  title="Alpha EdTech"  width="250" />
	</a>
	<h4>
		Atividade de Banco de Dados 🪑🎲
		<a  href="https://www.alphaedtech.org.br/">
		Alpha EdTech
		</a>
	</h4>
</div>
<br />

## 🧐 Sobre a atividade

Para o sistema de e-commerce:

1.  Crie as seguintes **queries** para **produtos**:

    -   [x] **Inserção;**
    -   [x] **Alteração** dos dados por seu **ID**;
    -   [x] **Listagem**, filtrando-os por categoria e marca, ordenados do **menor** ao **maior** preço;
    -   [x] **Listagem**, filtrando-os por categoria **e marca, ordenados do **maior** ao **menor\*\* preço;
    -   [x] **Deleção** por seu **ID**.

2.  Crie as seguintes **queries** para **clientes**:

    -   [x] **Inserção**;
    -   [x] **Alteração** dos dados por seu **ID**;
    -   [x] **Listagem**;
    -   [x] **Deleção**.

3.  Crie as seguintes **queries** para **administradores**:

    -   [x] **Inserção**;
    -   [x] **Alteração** dos dados por seu **ID**;
    -   [x] **Listagem**;
    -   [x] **Deleção** por seu **ID**;

4.  Na pasta **repositories**:

    -   [ ] Para cada query criada na questão anterior, crie uma função na pasta “repositories” que receba Como parâmetros os valores necessários e execute a referida query. Cada função deve retornar um erro, que deve ser nulo quando a query for bem sucedida. Para queries de listagens devem ser retornados, além do erro, os dados solicitados.

5.  Alterando as **queries**:

    -   [x] Altere as queries de listagem para buscar registros unindo dados de mais de uma tabela. Por exemplo: para uma tabela de produtos que possui um relacionamento com uma tabela de categorias de produtos, a query de listagem de produtos deve retornar, além dos dados do produto, os dados da categoria a que o produto pertence.

6.  Para implementar o carrinho de compras do sistema de e-commerce, crie as seguintes
    queries:

    -   [x] Adição de um produto ao carrinho do cliente;
    -   [x] Remoção de um produto do carrinho do cliente;
    -   [x] Listagem dos produtos do carrinho do cliente;
    -   [x] Cálculo da quantidade de produtos existente no carrinho do cliente;
    -   [ ] Cálculo do valor total dos produtos do carrinho do cliente.

7.  Na pasta **repositories**:

    -   [ ] Para cada query criada na questão anterior, crie uma função na pasta “repositories” que receba como parâmetros os valores necessários e execute a referida query. Cada função deve retornar um erro, que deve ser nulo quando a query for bem sucedida. Para queries de listagens, contagem e soma devem ser retornados, além do erro, os dados solicitados.

8.  Para implementar o fluxo de criação de pedidos do e-commerce, crie as seguintes queries:

    -   [ ] **registro** do **cabeçalho** do pedido, contendo todas as **informações** do mesmo (data, total, cliente, etc);
    -   [ ] **registro** de **produto** no pedido.

9.  O processo registrar pedidos requer, além da criação do cabeçalho de pedido, a adição de vários produtos ao mesmo pedido. Se houver erro durante a adição de produtos, devem ser removidos do banco de dados, além dos produtos já adicionados até o momento do erro, também o cabeçalho do pedido. Assim, o cadastro do pedido é cancelado e um erro de falha na criação do pedido deve ser retornado. Para que esse procedimento seja feito, siga os seguintes passos:

    -   [ ] no **src** da aplicação, crie um diretório “**services**”, que conterá a chamada “lógica de negócio” da aplicação, ou seja, um **conjunto de regras** que determinarão como a aplicação processa os dados que recebe;
    -   [ ] no diretório criado, crie um arquivo “**index.js**”;
    -   [ ] no arquivo “**index.js**” importe do “**repositories**” as funções responsáveis pelo registro do cabeçalho do pedido, e pelo registro de produto no pedido;
    -   [ ] crie uma **função para registro** de pedido que execute o seguinte processo:
    -   [ ] **início** de uma transação;
    -   [ ] **inserção** do **cabeçalho** do pedido;
    -   [ ] **inserção** dos **produtos** no pedido;
    -   [ ] se qualquer processo de inserção resultar em **erro**, deve ser dado **rollback** na transação;
    -   [ ] caso **não** ocorra erro, deve ser dado **commit** na transação.

**OBS:** Os termos “repositories” e “services” fazem parte da “arquitetura em camadas”. Caso deseje completar a implementação do sistema, crie um “service” para cada solicitação que o sistema deva implementar, tal como cadastro de produto, listagem de produtos, etc. Cada “service” deverá acessar o “repository” que necessitar para cumprir seu objetivo.

## 🔗 Referências básicas

-   Inserção de registros:

    -   https://www.postgresql.org/docs/14/sql-insert.html
    -   https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-insert

-   Seleção de registros:

    -   https://www.postgresql.org/docs/14/sql-select.html
    -   https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-select/
    -   https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-where/

-   Atualização de registros:

    -   https://www.postgresql.org/docs/14/sql-update.html
    -   https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-update/

-   Deleção de registros:

    -   https://www.postgresql.org/docs/14/sql-delete.html)
    -   https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-delete/

-   npm pg queries:

    -   https://node-postgres.com/features/queries

-   Junções entre tabelas:

    -   https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-joins/

-   Contagem:

    -   https://www.postgresqltutorial.com/postgresql-aggregate-functions/postgresql-count-function/

-   Soma:

    -   https://www.postgresqltutorial.com/postgresql-aggregate-functions/postgresql-sum-function/

-   Transações:

    -   https://www.postgresql.org/docs/current/tutorial-transactions.html
    -   https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-transaction/

-   npm pg transactions:
    -   https://node-postgres.com/features/transactions

## 🦸 Autor

<div>
	<a  href="https://github.com/janascher">
		<img src="https://avatars.githubusercontent.com/u/79182711?v=4" width="100px;" alt="Janaína Scher"/>
		<br />
		<sub>
			<b>Janaína Scher</b> 👩🏻‍💻
		</sub>
	</a>
</div>

Feito com ❤️ por Janaína Scher 👋 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/janainascher/) [![ProtonMail Badge](https://img.shields.io/badge/ProtonMail-8B89CC?style=for-the-badge&logo=protonmail&logoColor=white)](mailto:janainascher@protonmail.com)
