(async () => {

    const database = require('./db');
    const Produto = require('./produto');
    await database.sync();

    /*const novoProduto = await Produto.create({
        nome: "Monitor LED",
        preco: 670,
        descricao: "Monitor Funcional"
    });*/

    //console.log(novoProduto);

    const produto = await Produto.findByPk(4);
    console.log(produto);

    produto.nome = "Monitor Gamer";
    await produto.save();

    /*await Produto.destroy({
        where: {
            nome: "Monitor USB" && "Monitor LED"
        }
    });*/

})();