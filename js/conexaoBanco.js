const mysql = require('mysql2');

// Configuração da conexão
const connection = mysql.createConnection({
    host: 'msql.trabalhomantovani.kinghost.net',
    database: 'trabalhomantov',
    user: 'trabalhomantov',
    password: 'Mantovas51'
  });
  
  // Conectar ao banco de dados
  connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return;
    }
    console.log('Conexão bem sucedida ao banco de dados MySQL');
  
    // Executar uma consulta
    connection.query('SELECT * FROM cad_pessoas', (err, rows) => {
      if (err) {
        console.error('Erro ao executar consulta:', err);
        return;
      }
      console.log('Dados da consulta:', rows);
    });
  
    // Fechar a conexão
    connection.end((err) => {
      if (err) {
        console.error('Erro ao fechar conexão:', err);
        return;
      }
      console.log('Conexão fechada com sucesso');
    });
  });