const SpaceShipClass = require('../../spaceShip/models/class');

/**
 * clase heredada de la principal para el tipo lanzadera
 */

class ShuttleClass extends SpaceShipClass {
  
  
  constructor(data,chargeCapacity,utilCharge,propellerNumber,chargeTransported){
    super(data),
    this.chargeCapacity = chargeCapacity,
    this.utilCharge = utilCharge,
    this.propellerNumber = propellerNumber,
    this.chargeTransported = chargeTransported
  }

  /**
   * metodo para obtener la informacion basica de la nave 
   */
  obtenerInformacion(){
    const mensaje = this.obtenerInformacion()
    return `${mensaje} además tiene una carga util de ${this.utilCharge}`
  }
  /**
   * metodo para empezar el despiegue la nave...
   */
  startShip(){
    const mensaje = this.startShip()
    return `${mensaje} con una capacidad de carga de ${this.chargeCapacity} toneladas`
  }

  /**
   * GETTERS
   */
   get getChargeCapacity(){
    return this.chargeCapacity
  }

   get getUtilCharge(){
    return this.utilCharge
  }

  get getPropellerNumber(){
    return this.propellerNumber
  }
  
  get getChargedTransported(){
    return this.chargeTransported
  }

  /**
   * SEETERS
   */

   set setChargeCapacity(getChargeCapacity){
    this.getChargeCapacity = getChargeCapacity
  }

   set setUtilCharge(utilCharge){
    this.utilCharge = utilCharge
  }

  set setPropellerNumber(propellerNumber){
    this.propellerNumber = propellerNumber
  }
  
  set setChargeTransported(chargeTransported){
    this.chargeTransported = chargeTransported
  }
}

module.exports = ShuttleClass;