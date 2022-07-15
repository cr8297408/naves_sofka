const SpaceCraft = require('../models');
const db = require('../../../config/connection');
const SpaceCraftClass = require('../models/class');
const spaceCraftValidation = require('../validations');
const HttpResponse = require('../../response');
const Pagination = require('../../../middlewares/pagination');

sequelize = db.sequelize;

class SpaceCraftService {
  /**
   * @returns array de naves espaciales
   * @memberof SpaceCraftService
   */
  async findAll(){
    try {
      const spacesShip = await SpaceCraft.findAll() 
      return new HttpResponse(200, spacesShip);
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }

  async findOne(id){
    try {
      const validate = spaceCraftValidation.getSpaceShip(id);
      if (validate.error) {
        return new HttpResponse(400, validate.error);
      }
      const spaceShip = await NotManned.findByPk(id);
      return new HttpResponse(200, spaceShip);
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }

  async create(name, weight, pushPower, type, fuel, velocity, height, destinity, enginesNumber){
    try {
      let object = {name, weight, pushPower, type, fuel, velocity, height,destinity,enginesNumber,orbitLevel, altitude, earthDistance, landing, landingSystem, objective, landingPlace}
      const validate = spaceCraftValidation.createSpaceShip(object);
      if (validate.error) {
        return new HttpResponse(400, validate.error);
      }
      const newSpaceShip = new NotMannedClass(name, weight, pushPower, type, fuel, velocity, height,destinity,enginesNumber,orbitLevel, altitude, earthDistance, landing, landingSystem, objective, landingPlace)
    
      const createdShip = await NotManned.create(newSpaceShip);
      return new HttpResponse(200, 'hola viajero, tu nave está lista para ser utilizada');
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }

  async update(id, body){
    try {
      const validate = spaceCraftValidation.getSpaceShip(id);
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
        earthDistance: body.earthDistance, 
        landing: body.landing, 
        landingSystem: body.landingSystem, 
        objective: body.objective, 
        landingPlace: body.landingPlace
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
      const validate = spaceCraftValidation.getSpaceShip(id);
      if (validate.error) {
        return new HttpResponse(400, validate.error);
      }

      const spaceShip = await NotManned.findByPk(id);

      await spaceShip.destroy()
      return new HttpResponse(200, 'los datos de la nave se han eliminado...');
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }

  async findPagination(sizeAsNumber, pageAsNumber, wherecond){
    try {
      let query = `SELECT * FROM spaceCrafts WHERE name LIKE '%${wherecond}%' OR destinity LIKE '%${wherecond}%' OR objective LIKE '%${wherecond}%'`
      const spacesShips = await Pagination(sequelize, sizeAsNumber, pageAsNumber, query);
      return new HttpResponse(200, spacesShips);
    } catch (error) {
      return new HttpResponse(400, error.message);
    }
  }
}

module.exports = new NotMannedService();