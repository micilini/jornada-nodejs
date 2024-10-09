const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // Ajuste o caminho se necessário
const { expect } = chai;

chai.use(chaiHttp);

describe('Testes das Rotas', () => {
    it('Deve acessar a rota principal (GET /)', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('Deve salvar um nome no banco de dados (POST /save)', (done) => {
        chai.request(app)
            .post('/save')
            .send({ nome: 'Teste' })
            .end((err, res) => {
                expect(res).to.have.status(200); // Redireciona de volta
                done();
            });
    });
});