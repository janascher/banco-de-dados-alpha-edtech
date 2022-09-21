// --- Inserção de dados --
async function userInsert(pool, values) {
    try {
        const text = `
            INSERT INTO 
                loja.usuario (nome, cpf, telefone, email, senha) 
            VALUES ($1, $2, $3, $4, $5)
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
async function userSelectDesc(pool, values) {
    try {
        const text = `
            SELECT * FROM loja.usuario 
                WHERE nome = $1
            ORDER BY created_at DESC;
        `;

        const res = await pool.query(text, values);
        console.table(res.rows);
        return res.rows[0].id;
    } catch (err) {
        console.log(err.stack);
    }
}

// --- Seleção de dados ASC --
async function userSelectAsc(pool, values) {
    try {
        const text = `
            SELECT * FROM loja.usuario 
                WHERE nome = $1
            ORDER BY created_at ASC;
        `;

        const res = await pool.query(text, values);
        console.table(res.rows);
        return res.rows[0].id;
    } catch (err) {
        console.log(err.stack);
    }
}

// --- Atualização dos dados por seu ID --
async function userUpdate(pool, values) {
    try {
        const text = `
        UPDATE loja.usuario
            SET
                nome = $1,
                cpf = $2,
                telefone = $3,
                email = $4,
                senha = $5,
                updated_at = now()
            WHERE id = $6;
        `;

        const res = await pool.query(text, values);
        console.table(res.rows);
    } catch (err) {
        console.log(err.stack);
    }
}

// --- Deleção por seu ID ---
async function userDelete(pool, values) {
    try {
        const text = `
            DELETE FROM loja.usuario
            WHERE id = $1;
        `;

        const res = await pool.query(text, values);
        console.table(res.rows);
    } catch (err) {
        console.log(err.stack);
    }
}

module.exports = {
    userInsert,
    userSelectDesc,
    userSelectAsc,
    userUpdate,
    userDelete,
};