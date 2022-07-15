const ShuttleService = require('./services');

class SpacesShipComponents {
  async findAll(req, res){
    try {
      const spacesShips = await ShuttleService.findAll()
      res.status(spacesShips.status).json(spacesShips.message);
    } catch (error) {
      res.json(error.message)
    }
  }

  async findOne(req, res){
    try {
      const spacesShip = await ShuttleService.findOne(req.params.id)
      res.status(spacesShip.status).json(spacesShip.message);
    } catch (error) {
      res.json(error.message)
    }
  }

  async create(req, res){
    try {
      const {name,weight,pushPower,type,fuel,velocity,height,chargeCapacity,utilCharge, propellerNumber,chargeTransported} = req.body;
      const spacesShips = await ShuttleService.create(name,weight,pushPower,type,fuel,velocity,height,chargeCapacity,utilCharge, propellerNumber,chargeTransported)
      res.status(spacesShips.status).json(spacesShips.message);
    } catch (error) {
      res.json(error.message)
    }
  }

  async update(req, res){
    try {
      const {id} = req.params;
      const body = req.body;
      const spacesShips = await ShuttleService.update(id, body)
      res.status(spacesShips.status).json(spacesShips.message);
    } catch (error) {
      res.json(error.message)
    }
  }

  async delete(req, res){
    try {
      const spacesShips = await ShuttleService.delete(req.params.id)
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
      const spacesShips = await ShuttleService.findPagination(sizeAsNumber, pageAsNumber, where)
      res.status(spacesShips.status).json(spacesShips.message);
    } catch (error) {
      res.json(error.message)
    }
  }
}

module.exports = new SpacesShipComponents()