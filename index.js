const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3300; //porta padrão
const mysql = require('mysql');
var veiculosRouter = require('./routes/veiculos');


//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();

router.route("/veiculos").get(function(req, res) {
    veiculosRouter.buscarTodosVeiculos().then(data => {
        res.send(data);
    });
})

router.route("/veiculos/:id").get(function(req, res) {
    veiculosRouter.buscarPorId(req.params.id).then(data => {
        res.send(data);
    });
})

router.route("/veiculos/ano/:ano").get(function(req, res) {
    veiculosRouter.buscarPorAno(req.params.ano).then(data => {
        res.send(data);
    });
})

router.route("/veiculos/marca/:marca").get(function(req, res) {
    veiculosRouter.buscarPorMarca(req.params.marca).then(data => {
        res.send(data);
    });
})

//CREATE
router.route("/veiculos").post(function(req, res) {
    veiculosRouter.createVeiculo(req.body).then(data => {
        res.status(204).end();
    });
})

//UPDATE
router.route("/veiculos/:id").patch(function(req, res) {
    veiculosRouter.updateVeiculo(req.params.id, req.body).then(data => {
        res.status(204).end();
    });
})

//DELETE
router.route("/veiculos/:id").delete(function(req, res) {
    veiculosRouter.deleteVeiculo(req.params.id).then(data => {
        res.status(204).end();
    });
})


app.use('/', router);
app.use('/veiculos', router);


//inicia o servidor
app.listen(port);
console.log('API OnCar Ok!');