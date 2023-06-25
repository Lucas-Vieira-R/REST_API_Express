const produtoMiddleware = (request, response, next) => {
    const { body } = request;
    if (body.nome == undefined) {
        return response.status(400)
            .json({ message: 'O campo "nome" é obrigatório' });
    }
    if (body.nome === '') {
        return response.status(400)
            .json({ message: 'O campo "nome" não pode ser vazio' });
    }
    if (body.preco == undefined) {
        return response.status(400)
            .json({ message: 'O campo "preco" é obrigatório' });
    }
    if (body.preco === '') {
        return response.status(400)
            .json({ message: 'O campo "preco" não pode ser vazio' });
    }
    if (body.preco == undefined || isNaN(body.preco)) {
        return response.status(400)
            .json({ message:
            'O campo "preco" é obrigatório e deve ser um numero' });
    }

    next();
};

module.exports = { produtoMiddleware };
