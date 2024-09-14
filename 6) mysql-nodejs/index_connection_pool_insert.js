const mysql = require('mysql2');

// Cria o pool de conexões
const pool = mysql.createPool({
    host: 'localhost', // Endereço do servidor do banco de dados
    user: 'root', // Usuário do banco de dados
    password: '', // Senha do usuário
    database: 'nodejs', // Nome do banco de dados
    waitForConnections: true,
    connectionLimit: 10,  // Limita o número de conexões simultâneas
    queueLimit: 0
});

// Função para formatar a data em 'YYYY-MM-DD HH:MM:SS'
function formatDateToMySQL(date) {
    const pad = (n) => n < 10 ? '0' + n : n;
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

// Dados a serem inseridos
const dados = {
    nome: 'Micilini Roll',
    email: 'hey@micilini.com',
    senha: 'MICILINI_É_DEZ',
    data: new Date()
};

// Usando '?' para parametrizar os valores
const sql = `INSERT INTO usuarios (nome, email, senha, data_criacao) VALUES (?, ?, ?, ?)`;

// Conecta ao pool e realiza o INSERT
pool.getConnection((err, conn) => {
    if (err) {
        console.error('Houve um erro ao obter a conexão do pool', err);
        return;
    }

    conn.query(sql, [dados.nome, dados.email, dados.senha, formatDateToMySQL(dados.data)], function (error) {
        conn.release(); // Libera a conexão de volta ao pool após o uso

        if (error) {
            console.error('Houve um erro durante o INSERT', error);
            return;
        }

        console.log('Dados inseridos com sucesso!');
    });
});
