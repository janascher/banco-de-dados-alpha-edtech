// --- Inserção de dados --
async function categoryInsert(pool, values) {
    try {
        const text = `
        INSERT INTO loja.categoria_produtos (nome) 
            VALUES($1) RETURNING *;
        `

        const res = await pool.query(text, values);
        console.table(res.rows);
        return res.rows[0].id;
    } catch (err) {
        console.log(err.stack);
    }
}

// --- Seleção de dados DESC --
async function categorySelectDesc(pool, values) {
    try {
        const text = `
        SELECT * FROM loja.categoria_produtos 
	        WHERE nome = $1 
		ORDER BY created_at DESC;
        `

        const res = await pool.query(text, values);
        console.table(res.rows);
        return res.rows[0].id;
    } catch (err) {
        console.log(err.stack);
    }
}

// --- Seleção de dados ASC --
async function categorySelectAsc(pool, values) {
    try {
        const text = `
        SELECT * FROM loja.categoria_produtos 
	        WHERE nome = $1 
		ORDER BY created_at ASC;
        `

        const res = await pool.query(text, values);
        console.table(res.rows);
        return res.rows[0].id;
    } catch (err) {
        console.log(err.stack);
    }
}

// --- Atualização dos dados por seu ID --
async function categoryUpdate(pool, values) {
    try {
        const text = `
        UPDATE loja.categoria_produtos
            SET 
                nome = $1,
                updated_at = now() 
        WHERE id = $2;
        `

        const res = await pool.query(text, values);
        console.table(res.rows);
    } catch (err) {
        console.log(err.stack);
    }
}

// --- Deleção por seu ID ---
async function categoryDelete(pool, values) {
    try {
        const text = `
        DELETE FROM loja.categoria_produtos 
        WHERE id = $1;
        `

        const res = await pool.query(text, values);
        console.table(res.rows);
    } catch (err) {
        console.log(err.stack);
    }
}

module.exports = { 
    categoryInsert, 
    categorySelectDesc,
    categorySelectAsc, 
    categoryUpdate, 
    categoryDelete 
};
