// --- Inserção de dados --
async function productInsert(pool, values) {
    try {
        const text = `
            INSERT INTO 
                loja.registro_de_produtos 
                (id_administrador, id_categoria_produtos, nome, preco, marca, descricao) 
                VALUES (
                    (SELECT id FROM loja.usuario WHERE id = $1), 
                    (SELECT id FROM loja.categoria_produtos WHERE id = $2), 
                    $3, $4, $5, $6)
                    RETURNING *;
            `

        const res = await pool.query(text, values);
        console.table(res.rows);
        return res.rows[0].id;
    } catch (err) {
        console.log(err.stack);
    }
}

// --- Seleção de dados DESC --
async function productSelectDesc(pool, values) {
    try {
        /*const text = `
        SELECT id, id_categoria_produtos, nome, preco, marca, descricao FROM loja.registro_de_produtos 
	        WHERE marca = $1
            AND id_categoria_produtos = $2  
		ORDER BY preco DESC;
        `; */

        // Alterado a query acima para buscar registros unindo dados de mais de uma tabela:
        const text = `
        SELECT
            r.id,
            u.nome as usuario,
            c.nome as categoria_produto,
            r.nome,
            r.preco,
            r.marca,
            r.descricao
        from loja.registro_de_produtos as r
            inner join loja.usuario as u on u.id = r.id_administrador
            inner join loja.categoria_produtos as c on c.id = r.id_categoria_produtos
            WHERE marca = $1
            AND id_categoria_produtos = $2  
		ORDER BY preco DESC;
        `

        const res = await pool.query(text, values);
        console.table(res.rows);
        return res.rows[0].id;
    } catch (err) {
        console.log(err.stack);
    }
}

// --- Seleção de dados ASC --
async function productSelectAsc(pool, values) {
    try {
        /* const text = `
        SELECT id, id_categoria_produtos, nome, preco, marca, descricao FROM loja.registro_de_produtos 
	        WHERE marca = $1
            AND id_categoria_produtos = $2  
		ORDER BY preco ASC;
        `; */

        // Alterado a query acima para buscar registros unindo dados de mais de uma tabela:
        const text = `
        SELECT
            r.id,
            u.nome as usuario,
            c.nome as categoria_produto,
            r.nome,
            r.preco,
            r.marca,
            r.descricao
        from loja.registro_de_produtos as r
            inner join loja.usuario as u on u.id = r.id_administrador
            inner join loja.categoria_produtos as c on c.id = r.id_categoria_produtos
            WHERE marca = $1
            AND id_categoria_produtos = $2  
		ORDER BY preco ASC;
        `

        const res = await pool.query(text, values);
        console.table(res.rows);
        return res.rows[0].id;
    } catch (err) {
        console.log(err.stack);
    }
}

// --- Atualização dos dados por seu ID --
async function productUpdate(pool, values) {
    try {
        const text = `
        UPDATE loja.registro_de_produtos
            SET
                nome = $1,
                preco = $2,
                marca = $3,
                descricao = $4,
                updated_at = now()
            WHERE id = $5;
        `;

        const res = await pool.query(text, values);
        console.table(res.rows);
    } catch (err) {
        console.log(err.stack);
    }
}

// --- Deleção por seu ID ---
async function productDelete(pool, values) {
    try {
        const text = `
            DELETE FROM loja.registro_de_produtos
            WHERE id = $1;
        `;

        const res = await pool.query(text, values);
        console.table(res.rows);
    } catch (err) {
        console.log(err.stack);
    }
}

module.exports = {
    productInsert,
    productSelectDesc,
    productSelectAsc,
    productUpdate,
    productDelete,
};
