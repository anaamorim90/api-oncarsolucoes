//Conexão
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '63.141.247.82',
    user: 'aeideiasdigitais_oncarsolucoes',
    password: 'testenode@142536',
    database: 'aeideiasdigitais_oncarsolucoes'
  },
  pool: { min: 0, max: 7 }
});

const veiculosRouter = {

  buscarTodosVeiculos() {
    return knex('Veiculos')
    .then(rows => rows)
  },

  buscarPorAno(ano) {
    return knex('Veiculos')
    .where({ ano: ano })
    .then(rows => rows);
  },

  buscarPorMarca(marca) {
    return knex('Veiculos')
    .where({ marca: marca })
    .then(rows => rows);
  },

  buscarPorId(id) {
    return knex('Veiculos')
    .where({ id: id })
    .then(rows => rows);
  },

  createVeiculo(body){
    return knex("Veiculos").insert([
      {
        veiculo: body.veiculo,
        marca: body.marca,
        ano: body.ano,
        descricao: body.descricao,
        vendido: body.vendido
      }
    ])
  },

  updateVeiculo(id, body){
    return knex('Veiculos')
    .where({ id: id })
    .update({ 
      veiculo: body.veiculo,
      marca: body.marca,
      ano: body.ano,
      descricao: body.descricao,
      vendido: body.vendido, 
      updated: knex.fn.now()
    })
  },

  deleteVeiculo(id){
    return knex('Veiculos')
    .where({ id: id })
    .delete()
  }

};

module.exports = veiculosRouter;


