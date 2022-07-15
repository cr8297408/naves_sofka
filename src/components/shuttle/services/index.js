const Shuttle = require('../models');
const db = require('../../../config/connection');
const ShuttleClass = require('../models/class');
const spaceValidation = require('../validations');
const HttpResponse = require('../../response');
const Pagination = require('../../../middlewares/pagination');

sequelize = db.sequelize;

class ShuttleService {
  /**
   * @returns array de naves espaciales
   * @memberof ShuttleService
   */
  async findAll(){
    try {
      const spacesShip = await Shuttle.findAll() 
      return new HttpResponse(200, spacesShip);
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }

  async findOne(id){
    try {
      const validate = spaceValidation.getShuttle(id);
      if (validate.error) {
        return new HttpResponse(400, validate.error);
      }
      const spaceShip = await Shuttle.findByPk(id);
      return new HttpResponse(200, spaceShip);
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }

  async create(name,weight,pushPower,type,fuel,velocity,height,chargeCapacity,utilCharge, propellerNumber,chargeTransported){
    try {
      let object = {name,weight,pushPower,type,fuel,velocity,height,chargeCapacity,utilCharge, propellerNumber,chargeTransported}
      const validate = spaceValidation.createShuttle(object);
      if (validate.error) {
        return new HttpResponse(400, validate.error);
      }
      const createdShip = await Shuttle.create(object);
      return new HttpResponse(200, 'hola viajero, tu nave está lista para ser utilizada');
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }

  async update(id, body){
    try {
      const validate = spaceValidation.getShuttle(id);
      if (validate.error) {
        return new HttpResponse(400, validate.error);
      }
      await Shuttle.update({
        name: body.name,
        weight: body.weight,
        pushPower: body.pushPower,
        type: body.type,
        fuel: body.fuel,
        velocity: body.velocity,
        height: body.height,
        chargeCapacity: body.chargeCapacity,
        utilCharge: body.utilCharge, 
        propellerNumber: body.propellerNumber,
        chargeTransported: body.chargeTransported
      }, {
        where: {id}
      });
      return new HttpResponse(200, 'los datos de la nave han sido actualizados');
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }

  async delete(id){
    try {
      const validate = spaceValidation.getShuttle(id);
      if (validate.error) {
        return new HttpResponse(400, validate.error);
      }

      const spaceShip = await Shuttle.findByPk(id);

      await spaceShip.destroy()
      return new HttpResponse(200, 'los datos de la nave se han eliminado...');
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }

  async findPagination(sizeAsNumber, pageAsNumber, wherecond){
    try {
      let query = `SELECT * FROM spaceShips WHERE name LIKE '%${wherecond}%'`
      const spacesShips = await Pagination(sequelize, sizeAsNumber, pageAsNumber, query);
      return new HttpResponse(200, spacesShips);
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }
}

module.exports = new ShuttleService();