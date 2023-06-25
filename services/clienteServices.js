const connection = require('../configs/dbConfiguration');

const findAll = async () => {
    const clientes = await (await connection)
        .execute('SELECT * FROM clientes');
    return clientes[0];
};

const update = async (cliente) => {
    const query = `UPDATE clientes SET nome = '${cliente.nome}',
    sobrenome = '${cliente.sobrenome}',
    email = '${cliente.email}', idade = ${cliente.idade}
    WHERE id = ${cliente.id}`;
    const isOk = await (await connection).execute(query);
    return isOk[0].affectedRows === 1;
};

const save = async (cliente) => {
    const query = `INSERT INTO clientes(nome, sobrenome, email,
    idade) VALUES ('${cliente.nome}','${cliente.sobrenome}' ,
    '${cliente.email}' ,${cliente.idade} )`;
    const isOk = await (await connection).execute(query);
    return isOk[0].affectedRows === 1;
};

const remove = async (id) => {
    const query = `DELETE FROM clientes WHERE id = ${id}`;
    const isOk = await (await connection).execute(query);
    return isOk[0].affectedRows === 1;
};

module.exports = {
    findAll,
    save,
    remove,
    update,
};


