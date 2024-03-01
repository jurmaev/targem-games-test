import { createServer } from 'http';
import { initializeDb } from './initialize-db';
import { AppDataSource } from './data-source';
import { Player } from './entity/player';

initializeDb();

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer(async (request, response) => {
  if (request.url === '/getPlayers') {
    response.statusCode = 200;
    const players = await AppDataSource.manager.find(Player);
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.write(JSON.stringify(players));
  } else {
    response.statusCode = 404;
    response.write('Not found');
  }
  response.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
