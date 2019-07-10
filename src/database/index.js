import Sequelize from 'sequelize';
import databaseOptions from '../config/database';
import User from '../app/models/User';

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseOptions);
    User.init(this.connection);
  }
}

export default new Database();
