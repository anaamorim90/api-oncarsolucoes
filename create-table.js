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
})


//Criar Tabela
knex.schema.createTable('Veiculos', (table) => {
  table.increments('id')
  table.string('veiculo')
  table.string('marca')
  table.string('ano')
  table.string('descricao')
  table.boolean('vendido')
  table.timestamp('created').defaultTo(knex.fn.now())
  table.timestamp('updated').defaultTo(knex.fn.now())
})
  .then(function () {

    return knex("Veiculos").insert([
      {
        veiculo: 'Uno Vivace',
        marca: 'FIAT',
        ano: '2015',
        descricao: 'O Fiat Uno chama a atenção. Além de um novo design frontal e cheio de personalidade, o Uno conta com novos parachoques e grande dianteira, que ressaltam ainda mais os contornos do modelo.',
        vendido: true
      },
      {
        veiculo: 'Siena',
        marca: 'FIAT',
        ano: '2013',
        descricao: 'O Siena chama a atenção. Além de um novo design frontal e cheio de personalidade, o Siena conta com novos parachoques e grande dianteira, que ressaltam ainda mais os contornos do modelo.',
        vendido: false
      },
      {
        veiculo: 'Argo',
        marca: 'FIAT',
        ano: '2020',
        descricao: 'O Fiat Argo chama a atenção. Além de um novo design frontal e cheio de personalidade, o Argo conta com novos parachoques e grande dianteira, que ressaltam ainda mais os contornos do modelo.',
        vendido: false
      }
    ]);
  }
  )




