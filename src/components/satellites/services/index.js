const Satellite = require('../models');
const db = require('../../../config/connection');
const SatelliteClass = require('../models/class');
const satelliteValidation = require('../validations');
const HttpResponse = require('../../response');
const Pagination = require('../../../middlewares/pagination');

sequelize = db.sequelize;

class SatelliteService {
  /**
   * @returns array de naves espaciales
   * @memberof SatelliteService
   */
  async findAll(){
    try {
      const spacesShip = await Satellite.findAll() 
      return new HttpResponse(200, spacesShip);
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }

  async findOne(id){
    try {
      const validate = satelliteValidation.getSpaceShip(id);
      if (validate.error) {
        return new HttpResponse(400, validate.error);
      }
      const spaceShip = await Satellite.findByPk(id);
      return new HttpResponse(200, spaceShip);
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }

  async create(name, weight, pushPower, type, fuel, velocity, height, destinity, enginesNumber, orbitLevel, altitude){
    try {
      let object = {name, weight, pushPower, type, fuel, velocity, height, destinity, enginesNumber,orbitLevel, altitude}
      const validate = satelliteValidation.createSpaceShip(object);
      if (validate.error) {
        return new HttpResponse(400, validate.error);
      }
      const newSpaceShip = new SatelliteClass(name, weight, pushPower, type, fuel, velocity, height, destinity, enginesNumber,orbitLevel, altitude)
    
      const createdShip = await Satellite.create(newSpaceShip);
      return new HttpResponse(200, 'hola viajero, tu nave está lista para ser utilizada');
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }

  async update(id, body){
    try {
      const validate = satelliteValidation.getSpaceShip(id);
      if (validate.error) {
        return new HttpResponse(400, validate.error);
      }
      await SpaceShip.update({
        name: body.name,
        weight: body.weight,
        pushPower: body.pushPower,
        type: body.type,
        fuel: body.fuel,
        velocity: body.velocity,
        height: body.height,
        destinity: body.destinity,
        enginesNumber: body.enginesNumber,
        orbitLevel: body.orbitLevel,
        altitude: body.altitude
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
      const validate = satelliteValidation.getSpaceShip(id);
      if (validate.error) {
        return new HttpResponse(400, validate.error);
      }

      const spaceShip = await Satellite.findByPk(id);

      await spaceShip.destroy()
      return new HttpResponse(200, 'los datos de la nave se han eliminado...');
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }

  async findPagination(sizeAsNumber, pageAsNumber, wherecond){
    try {
      let query = `SELECT * FROM satellites WHERE name LIKE '%${wherecond}%' OR destinity LIKE '%${wherecond}%'`
      const spacesShips = await Pagination(sequelize, sizeAsNumber, pageAsNumber, query);
      return new HttpResponse(200, spacesShips);
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }
}

module.exports = new SatelliteService();