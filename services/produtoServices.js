const connection = require('../configs/dbConfiguration');

const findAll = async () => {
    const produtos = await (await connection)
        .execute('SELECT * FROM produtos');
    return produtos[0];
};

const update = async (produto) => {
    const query = `UPDATE produtos SET nome = '${produto.nome}',
    descricao = '${produto.descricao}',
    preco = '${produto.preco}'
    WHERE id = ${produto.id}`;
    const isOk = await (await connection).execute(query);
    return isOk[0].affectedRows === 1;
};

const save = async (produto) => {
    const query = `INSERT INTO produtos(nome, descricao, preco)
    VALUES ('${produto.nome}',
    '${produto.descricao}' ,${produto.preco} )`;
    const isOk = await (await connection).execute(query);
    return isOk[0].affectedRows === 1;
};

const remove = async (id) => {
    const query = `DELETE FROM produtos WHERE id = ${id}`;
    const isOk = await (await connection).execute(query);
    return isOk[0].affectedRows === 1;
};

module.exports = {
    findAll,
    save,
    remove,
    update,
};
