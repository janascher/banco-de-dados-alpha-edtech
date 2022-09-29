// --- Inserção de dados --
async function cartInsert(pool, values) {
    try {
        const text = `
        INSERT INTO 
            loja.carrinho_de_compras 
            (id_usuario, id_registro_de_produtos) 
        VALUES (
            (SELECT id FROM loja.usuario WHERE id = $1), 
            (SELECT id FROM loja.registro_de_produtos WHERE id = $2))
        RETURNING *;
        `;

        const res = await pool.query(text, values);
        console.table(res.rows);
        return res.rows[0].id;
    } catch (err) {
        console.log(err.stack);
    }
}

// --- Seleção de dados --
async function cartSelect(pool, values) {
    try {
        const text = `
        SELECT * FROM loja.carrinho_de_compras 
        `;

        const res = await pool.query(text, values);
        console.table(res.rows);
        return res.rows[0].id;
    } catch (err) {
        console.log(err.stack);
    }
}

// --- Deleção por seu ID ---
async function cartDelete(pool, values) {
    try {
        const text = `
        DELETE FROM loja.carrinho_de_compras 
        WHERE id = $1;
        `;

        const res = await pool.query(text, values);
        console.table(res.rows);
    } catch (err) {
        console.log(err.stack);
    }
}

// --- Cálculo da quantidade de produtos existente no carrinho --
async function cartTotalAmount(pool, values) {
    try {
        const text = `
        SELECT COUNT(id) FROM loja.carrinho_de_compras
        `;

        const res = await pool.query(text, values);
        console.table(res.rows);
    } catch (err) {
        console.log(err.stack);
    }
}

module.exports = {
    cartInsert,
    cartSelect,
    cartDelete,
    cartTotalAmount
};
