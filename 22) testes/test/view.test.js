const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // Ajuste o caminho se necessário
const { expect } = chai;

chai.use(chaiHttp);

describe('Teste da View HTML', () => {
    it('Deve retornar o conteúdo correto da view index', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                //Devemos verificar se existe uma tag do tipo <h1>Lista de Nomes da API</h1>
                expect(res.text).to.include('<h1>Lista de Nomes da API</h1>');
                //Devemos verificar se existe uma tag do tipo <h1>Lista de Nomes do Banco de Dados</h1>
                expect(res.text).to.include('<h1>Lista de Nomes do Banco de Dados</h1>');
                done();
            });
    });
});
