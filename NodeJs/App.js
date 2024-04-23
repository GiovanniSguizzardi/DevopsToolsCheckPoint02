const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Implantacao efetuada com sucesso. Bom trabalho!.</h1>');
});

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
