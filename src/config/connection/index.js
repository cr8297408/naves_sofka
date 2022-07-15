var Sequelize = require('sequelize');
const config = require('../env');

/**
 * @description class for connect the database mysql
 * @use sequelize
 */
class Connection {
  constructor(Sequelize, config){
    this.Sequelize = Sequelize;
    this.config = config;
  }

  database(){
    var sequelize = new Sequelize(config.DB_NAME,
        config.DB_USER,
        config.DB_PASS, 
        {
            host: config.DB_HOST,
            dialect: config.DB_DIALECT || 'mysql',
        }
    );
    var db = {};
    
    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    return db;
  }
}

let db = new Connection(Sequelize, config);

module.exports = db.database();