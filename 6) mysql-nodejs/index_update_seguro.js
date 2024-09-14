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

//Realiza o UPDATE na tabela usuarios (seguro)
const query = `UPDATE usuarios SET nome = ? WHERE id = ?`;

conn.query(query, ['Micilini Roll II', 2], function(error, results, fields){
    if(error){
        console.log('Houve um erro ao realizar a consulta', error);
        return;
    }

    console.log('Resultado da consulta:', results);
});
