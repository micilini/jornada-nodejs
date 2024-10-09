// test/controller.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // Ajuste o caminho se necessário
const HomeController = require('../controllers/homeController');
const { expect } = chai;

chai.use(chaiHttp);

describe('Teste do HomeController', () => {
    it('Deve buscar nomes da API e do banco de dados', async () => {
        const req = {};
        const res = {
            render: (view, data) => {
                expect(data).to.have.property('nomesApi');
                expect(data).to.have.property('nomesDb');
            }
        };

        await HomeController.home(req, res);
    });
});