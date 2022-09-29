const dotenv = require("dotenv");
const { Pool } = require("pg");
const {
    categoryInsert,
    categorySelectDesc,
    categorySelectAsc,
    categoryUpdate,
    categoryDelete,
} = require("./category");
const {
    productInsert,
    productSelectDesc,
    productSelectAsc,
    productUpdate,
    productDelete,
} = require("./products");
const {
    userInsert,
    userSelectDesc,
    userSelectAsc,
    userUpdate,
    userDelete,
} = require("./users");
const {
    cartInsert,
    cartSelect,
    cartDelete,
    cartTotalAmount
} = require("./cart");

dotenv.config();

const pool = new Pool({
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBDATABASE,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

pool.connect((err) => {
    if (err) {
        return console.error("Error acquiring client", err.stack);
    }
});

// #### COLUNA CATEGORIA ####
// --- Testando a inserção e deleção ao mesmo tempo --
/* async function teste() {
    const idCat = await categoryInsert(pool, ["Saia666"]);
    console.log(idCat);

    categoryDelete(pool, [idCat]);
}

teste(); */

// --- Testando a inserção  --
/* async function testInsert() {
    categoryInsert(pool, ["Saias"]);
}

testInsert(); */

// --- Testando a deleção por seu ID --
/* async function testDelete() {
    categoryDelete(pool, ["ee7480c8-088d-4529-9cb4-88b78a8d7f4a"]);
}

testDelete(); */

// --- Testando a atualização dos dados por seu ID --
/* async function testUpdate() {
    categoryUpdate(pool, ["Saias", "0e3d8323-1fa5-4dff-b3f5-20f026c96a72"]);
}

testUpdate();  */

// --- Testando a seleção de dados DESC --
/* async function testSelectDesc() {
    categorySelectDesc(pool, ["Saias"]);
}

testSelectDesc(); */

// --- Testando a seleção de dados ASC --
/* async function SelectAsc() {
    categorySelectAsc(pool, ["Saias"]);
}

SelectAsc(); */

// #### TESTE PRODUTO ####
// --- Testando a inserção  --
/* async function testInsert() {
    productInsert(pool, [
        "a1cf7b52-d680-4284-ba1a-c5d4538fd34f",
        "cc206fd5-4063-46ed-b8a6-50802f990eab",
        "Camisa aveludada",
        "242",
        "Amaro",
        "Lorem"
    ]);
}

testInsert(); */

// --- Testando a deleção por seu ID --
/* async function testDelete() {
    productDelete(pool, ["d75d7978-2122-4e79-9371-acd84175ebe7"]);
}

testDelete(); */

// --- Testando a atualização dos dados por seu ID --
/* async function testUpdate() {
    productUpdate(pool, [
        "Camisa aveludada", 
        "252",
        "Amaro",
        "Lorem ipsum dolor sit amet",
        "e70099f3-ac47-45b6-a986-adddbf3dfbff"
    ]);
}

testUpdate();  */

// --- Testando a seleção de dados DESC --
/* async function testSelectDesc() {
    productSelectDesc(pool, ["Amaro", "cc206fd5-4063-46ed-b8a6-50802f990eab"]);
}

testSelectDesc(); */

// --- Testando a seleção de dados ASC --
/* async function testSelectAsc() {
    productSelectAsc(pool, ["Amaro", "cc206fd5-4063-46ed-b8a6-50802f990eab"]);
}

testSelectAsc();  */

// #### TESTE USUÁRIO ####
// --- Testando a inserção  --
/* async function testInsert() {
    userInsert(pool, [
        "Cliente1",
        "14445678952",
        "11350585173",
        "admin2@email.com",
        "666333"
    ]);
}

testInsert(); */

// --- Testando a deleção por seu ID --
/* async function testDelete() {
    userDelete(pool, ["ea47467e-2fb0-456f-b97c-d1246f1df7e7"]);
}

testDelete(); */

// --- Testando a atualização dos dados por seu ID --
/* async function testUpdate() {
    userUpdate(pool, [
        "Admin2", 
        "12345678952",
        "11350585173",
        "admin2@email.com",
        "777888",
        "72d1bd1c-852e-4edf-9a97-1f4f8ea1f6d1"
    ]);
}

testUpdate();  */

// --- Testando a seleção de dados DESC --
/* async function testSelectDesc() {
    userSelectDesc(pool, ["Cliente1"]);
}

testSelectDesc(); */

// --- Testando a seleção de dados ASC --
/* async function testSelectAsc() {
    userSelectAsc(pool, ["Cliente1"]);
}

testSelectAsc();  */

// ############### TESTE CARRINHO DE COMPRAS ###############
// --- Testando a inserção  --
/* async function testInsert() {
    cartInsert(pool, [
        "711d3e2a-a1cb-4f59-aa74-3120960fb692",
        "3a307e34-e049-4c51-94f1-a9d6d3974fe9"
    ]);
}

testInsert(); */

// --- Testando a deleção por seu ID --
/* async function testDelete() {
    userDelete(pool, ["ea47467e-2fb0-456f-b97c-d1246f1df7e7"]);
}

testDelete(); */

// --- Testando a seleção de dados DESC --
/* async function testSelect() {
    cartSelect(pool);
}

testSelect(); */

// --- Testando o cálculo da quantidade de produtos existente no carrinho --
/* async function testSelect() {
    cartTotalAmount(pool);
}

testSelect(); */
