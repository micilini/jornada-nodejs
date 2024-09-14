const mysql = require('mysql2');

//Cria a conexão com o banco de dados
const conn = mysql.createConnection({
    host: 'localhost', //ou 127.0.0.1
    user: 'root', //ou qualquer outro usuário que você tenha criado
    password: '', //a senha relacionada ao usuário
    database: 'nodejs', //o banco de dados que você criou
});

//Realiza a conexão com o banco de dados
conn.connect(function(error){

    //Veririca se houve algum tipo de erro durante a conexão com o banco
    if(error){
        console.log('Houve um erro ao conectar com o banco', error);
        return;
    }

    //Se estiver tudo OK, ele gera uma mensagem no console.
    console.log('Conectado com o MySQL com sucesso!');
});

//Realiza a inserão de dados no banco de dados:
const dados = {
    nome: 'Micilini Roll',
    email: 'hey@micilini.com',
    senha: 'MICILINI_É_DEZ',
    data: new Date() // Data e hora atuais
};

// Função para formatar a data em 'YYYY-MM-DD HH:MM:SS'
function formatDateToMySQL(date) {
    const pad = (n) => n < 10 ? '0' + n : n;
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

const sql = `INSERT INTO usuarios (nome, email, senha, data_criacao) VALUES ('${dados.nome}', '${dados.email}', '${dados.senha}', '${formatDateToMySQL(dados.data)}')`;

conn.query(sql, function (error){
    if(error){
        console.log('Houve um erro durante o INSERT', error);
        return;
    }

    console.log('Dados inseridos com sucesso!');
});


