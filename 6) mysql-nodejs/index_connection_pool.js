const mysql = require('mysql2');

// Cria um pool de conexões
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'senha',
  database: 'meu_banco',
  waitForConnections: true,
  connectionLimit: 10,  // número máximo de conexões simultâneas
  queueLimit: 0  // limite de solicitações na fila (0 significa ilimitado)
});

// Exemplo de como usar o pool
pool.query('SELECT * FROM minha_tabela', function (err, results) {
  if (err) throw err;
  console.log(results);
});