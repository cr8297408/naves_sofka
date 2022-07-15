const SpaceCraftService = require('./services');

class SpaceCraftComponents {
  async findAll(req, res){
    try {
      const spacesShips = await SpaceCraftService.findAll()
      res.status(spacesShips.status).json(spacesShips.message);
    } catch (error) {
      res.json(error.message)
    }
  }

  async findOne(req, res){
    try {
      const spacesShip = await SpaceCraftService.findOne(req.params.id)
      res.status(spacesShip.status).json(spacesShip.message);
    } catch (error) {
      res.json(error.message)
    }
  }

  async create(req, res){
    try {
      const {name, 
        weight, 
        pushPower, 
        type, 
        fuel, 
        velocity, 
        height,
        destinity,
        enginesNumber,
        earthDistance, 
        landing, 
        landingSystem, 
        objective, 
        landingPlace} = req.body;
      const spacesShips = await SpaceCraftService.create(name, weight, pushPower, type, fuel, velocity, height,destinity,enginesNumber,orbitLevel, altitude, earthDistance, landing, landingSystem, objective, landingPlace)
      res.status(spacesShips.status).json(spacesShips.message);
    } catch (error) {
      res.json(error.message)
    }
  }

  async update(req, res){
    try {
      const {id} = req.params;
      const body = req.body;
      const spacesShips = await SpaceCraftService.update(id, body)
      res.status(spacesShips.status).json(spacesShips.message);
    } catch (error) {
      res.json(error.message)
    }
  }

  async delete(req, res){
    try {
      const spacesShips = await SpaceCraftService.delete(req.params.id)
      res.status(spacesShips.status).json(spacesShips.message);
    } catch (error) {
      res.json(error.message)
    }
  }

  async findPagination(req, res){
    try {
      const sizeAsNumber = Number(req.body.size);
      const pageAsNumber = Number(req.body.page);
      const where = req.body.where;
      const spacesShips = await SpaceCraftService.findPagination(sizeAsNumber, pageAsNumber, where)
      res.status(spacesShips.status).json(spacesShips.message);
    } catch (error) {
      res.json(error.message)
    }
  }
}

module.exports = new SpaceCraftComponents()