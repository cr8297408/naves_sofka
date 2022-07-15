const Manned = require('../models');
const db = require('../../../config/connection');
const MannedClass = require('../models/class');
const mannedValidation = require('../validations');
const HttpResponse = require('../../response');
const Pagination = require('../../../middlewares/pagination');

sequelize = db.sequelize;

class MannedService {
  /**
   * @returns array de naves espaciales
   * @memberof MannedService
   */
  async findAll(){
    try {
      const spacesShip = await Manned.findAll() 
      return new HttpResponse(200, spacesShip);
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }

  async findOne(id){
    try {
      const validate = mannedValidation.getSpaceShip(id);
      if (validate.error) {
        return new HttpResponse(400, validate.error);
      }
      const spaceShip = await Manned.findByPk(id);
      return new HttpResponse(200, spaceShip);
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }

  async create(name, weight, pushPower, type, fuel, velocity, height, passengersNumber, mission){
    try {
      let object = {name, weight, pushPower, type, fuel, velocity, height, passengersNumber, mission}
      const validate = mannedValidation.createSpaceShip(object);
      if (validate.error) {
        return new HttpResponse(400, validate.error);
      }
      const newSpaceShip = new MannedClass(object)
    
      const createdShip = await Manned.create(object);
      return new HttpResponse(200, 'hola viajero, tu nave está lista para ser utilizada');
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }

  async update(id, body){
    try {
      const validate = mannedValidation.getSpaceShip(id);
      if (validate.error) {
        return new HttpResponse(400, validate.error);
      }
      await Manned.update({
        name: body.name,
        weight: body.weight,
        pushPower: body.pushPower,
        type: body.type,
        fuel: body.fuel,
        velocity: body.velocity,
        height: body.height,
        passengersNumber: body.passengersNumber, 
        mission: body.mission
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
      const validate = mannedValidation.getSpaceShip(id);
      if (validate.error) {
        return new HttpResponse(400, validate.error);
      }

      const spaceShip = await Manned.findByPk(id);

      await spaceShip.destroy()
      return new HttpResponse(200, 'los datos de la nave se han eliminado...');
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }

  async findPagination(sizeAsNumber, pageAsNumber, wherecond){
    try {
      let query = `SELECT * FROM manneds WHERE name LIKE '%${wherecond}%'`
      const spacesShips = await Pagination(sequelize, sizeAsNumber, pageAsNumber, query);
      return new HttpResponse(200, spacesShips);
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }
}

module.exports = new MannedService();