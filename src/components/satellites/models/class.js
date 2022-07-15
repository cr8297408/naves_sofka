/**
 * clase principal con las propiedades de una nave, 
 * de la cual heredarán los diferentes tipos de naves
 */

class SpaceShipClass {
  
  /**
   * 
   * @param {*} name 
   * @param {*} weight 
   * @param {*} pushPower 
   * @param {*} type 
   * @param {*} fuel 
   * @param {*} velocity 
   * @param {*} height 
   * @param {*} destinity 
   * @param {*} enginesNumber 
   * @param {*} orbitLevel 
   * @param {*} altitude 
   */
  constructor(name, weight, pushPower, type, fuel, velocity, height, destinity, enginesNumber, orbitLevel, altitude){
    this.name = name,
    this.weight = weight,
    this.pushPower = pushPower,
    this.type = type,
    this.fuel = fuel,
    this.velocity = velocity,
    this.height = height,
    this.destinity = destinity,
    this.enginesNumber = enginesNumber,
    this.orbitLevel = orbitLevel,
    this.altitude = altitude
  }

  /**
   * metodo para obtener la informacion basica de la nave 
   */
  obtenerInformacion(){
    const mensaje = `el satellite con nombre: ${this.name}, orbitará en el nivel ${this.orbitLevel}` 
    return mensaje
  }
  /**
   * metodo para empezar el despiegue la nave...
   */
  startShip(){
    const mensaje = `ha iniciado el lanzamiento del satellite de nombre ${this.name} con destino ${this.destinity}, y que alcanzará una altitud de ${altitude} msnm`
    return mensaje
  }

  /**
   * GETTERS
   */
   get getDestinity(){
    return this.destinity
  } 
  
  getOrbitLevel(){
    return this.orbitLevel
  }

  getAltitude(){
    return this.altitude
  }

  get getEnginesNumber(){
    return this.enginesNumber
  }
  get getHeight(){
    return this.height
  }

   get getVelocity(){
    return this.velocity
  }

  get getName(){
    return this.name
  }
  
  get getWeight(){
    return this.weight
  }

   get getPushPower(){
    return this.pushPower
  }

   get getType(){
    return this.type
  }

   get getFuel(){
    return this.fuel
  }

  /**
   * SEETERS
   */

  set setDestinity(destinity){
    this.destinity = destinity
  }

  set setOrbitLevel(orbitLevel){
    this.orbitLevel = orbitLevel
  }

  set setAltitude(altitude){
    this.altitude = altitude
  }

  set setEnginesNumber(enginesNumber){
    this.enginesNumber = enginesNumber
  }
   set setHeight(height){
    this.height = height
  }

   set setVelocity(velocity){
    this.velocity = velocity
  }

  set setName(name){
    this.name = name
  }
  
  set setWeight(weight){
    this.weight = weight
  }

   set setPushPower(pushPower){
    this.pushPower = pushPower
  }

   set setType(type){
    this.type = type
  }

   set setFuel(fuel){
    this.fuel = fuel
  }

}

module.exports = SpaceShipClass;