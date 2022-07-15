const http = require('http')
const app = require('./server')
const server = http.createServer(app)
const db = require('../connection');

const port = app.get('port');

class Server {

  constructor(app, server, db, port){
    this.app = app,
    this.server = server,
    this.db = db,
    this.port = port
  }

  async dbConnection(){
    try {
      await db.sequelize.sync()
      console.log('Database connect');
      server.listen(port, () => {
        console.log('APP LISTENING IN PORT: ',port);
      })
    } catch (error) {
        throw new Error(error.message)
    }
  }
}

const serverMain = new Server(app, server, db, port);

module.exports = serverMain.dbConnection();