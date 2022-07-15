const SpaceShip = require('../../spaceShip/models/class');

/**
 * clase heredada de la principal para el tipo de nave tripulada
 */

class MannedClass extends SpaceShip{
  
  /**
   * constructor of the class
   * @param {*} name 
   * @param {*} weight 
   * @param {*} pushPower 
   * @param {*} type 
   * @param {*} fuel 
   * @param {*} velocity 
   * @param {*} height 
   */
  constructor(name, weight, pushPower, type, fuel, velocity, height, passengersNumber, mission){
    super(name, weight, pushPower, type, fuel, velocity, height, passengersNumber, mission)
    this.passengersNumber = passengersNumber,
    this.mission = mission
  }

  /**
   * metodo para obtener la informacion basica de la nave 
   */
  obtenerInformacion(){
    const mensaje = `la nave con nombre: ${this.name}, tiene un empuje de ${this.pushPower} toneladas y su mision es ${this.mission}` 
    return mensaje
  }
  /**
   * metodo para empezar el despiegue la nave...
   */
  startShip(){
    const mensaje = `ha iniciado el lanzamiento de la nave de nombre ${this.name}, la cual utilizará como combustible ${this.fuel}`
    return mensaje
  }

  /**
   * GETTERS
   */
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

  get getPassengersNumber(){
    return this.passengersNumber
  }

  get getMission(){
    return this.mission
  }

  /**
   * SEETERS
   */

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

  set setPassengersNumber(passengersNumber){
    this.passengersNumber = passengersNumber
  }

  set setMission(mission){
    this.mission = mission
  }
}

module.exports = MannedClass;