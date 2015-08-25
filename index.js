// Ferramenta para facilitar nossas vidas
var fs = require('fs');
var child = require('child_process');
var subcomando = process.argv.slice(2);
var comando = {};

// Builda um projeto
comando.build = function(pasta) {
  console.log('-- Construindo documentação para %s', pasta);
  child.execSync('mkdocs build --clean', {
    cwd: __dirname + '/' + pasta
  });
  console.log('-- Construção dos documentos para %s terminado', pasta);
};

// Inicia um servidor estático para mostrar o projeto
comando.server = function(pasta) {
  console.log('-- Iniciando servidor do projeto %s', pasta);
  child.execSync('mkdocs serve', {
    cwd: __dirname + '/' + pasta
  });
};

if (subcomando[0] === 'server')
  comando.server(subcomando[1]);
else if (subcomando[0] === 'build') {
  if (subcomando[1])
    return comando.build(subcomando[1]);

  // Caso nenhuma pasta seja especificada, fazemos o build para todos
  fs.readdirSync(__dirname)
    .filter(function(dir) {
      return fs.existsSync(__dirname + '/' + dir + '/mkdocs.yml');
    })
    .forEach(function(dir) {
      comando.build(dir);
    });

} else
  throw new Error('Commando desconhecido: ' + subcomando[0]);
