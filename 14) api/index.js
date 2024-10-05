const express = require('express');
const app = express();

app.use(
    express.urlencoded({
        extended: true
    }),
);

app.use(express.json());

//Rotas Endpoints

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Seja bem vindos a API da Micilini, consulte a documentação para acessar mais detalhes 🥳' });
});

app.post('/newUser', (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    res.status(201).json({ message: `Usuário ${name} criado com sucesso!` });
});

app.put('/updateUser/:idUser', (req,
    res) => {

    //Exemplo de status de erro caso idUser não seja informado
    if (!req.params.idUser) {
        res.status(422).json({ message: 'Informe o id do usuário que deseja atualizar' });
        return;
    }

    const { idUser } = req.params;
    const { name, email, password } = req.body;
    console.log(idUser, name, email, password);
    res.status(200).json({ message: `Usuário ${name} atualizado com sucesso!` });
});

app.delete('/removeUser/:idUser', (req, res) => {
    const { idUser } = req.params;
    console.log(idUser);
    res.status(201).json({ message: `Usuário ${idUser} removido com sucesso!` });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});