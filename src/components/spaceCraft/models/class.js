/**
 * clase principal con las propiedades de una nave, 
 * de la cual heredarán los diferentes tipos de naves
 */

class SpaceShipClass {
  
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
  constructor(name, weight, pushPower, type, fuel, velocity, height, destinity, enginesNumber, earthDistance, landing, landingSystem, objective, landingPlace){
    this.name = name,
    this.weight = weight,
    this.pushPower = pushPower,
    this.type = type,
    this.fuel = fuel,
    this.velocity = velocity,
    this.height = height,
    this.destinity = destinity,
    this.enginesNumber = enginesNumber,
    this.earthDistance = earthDistance, 
    this.landing = landing, 
    this.landingSystem = landingSystem, 
    this.objective = objective, 
    this.landingPlace = landingPlace
  }

  /**
   * metodo para obtener la informacion basica de la nave 
   */
  obtenerInformacion(){
    const mensaje = `la nave con nombre: ${this.name}, tiene un empuje de ${this.pushPower} toneladas y ${this.enginesNumber} propulsores y su objetivo es ${this.objective}` 
    return mensaje
  }
  /**
   * metodo para empezar el despiegue la nave...
   */
  startShip(){
    const mensaje = `ha iniciado el lanzamiento de la nave de nombre ${this.name} con destino ${this.destinity} la cual alcanzará una distancia con respecto a la tierra de ${this.earthDistance}`
    return mensaje
  }

  /**
   * GETTERS
   */
   get getDestinity(){
    return this.destinity
  }
  
  get getEarthDistance(){
    return this.earthDistance
  }

  get getLanding(){
    return this.landing
  }

  get getLandingSystem(){
    return this.landingSystem
  }

  get getObjective(){
    return this.objective
  }

  get getLandingPlace(){
    return this.landingPlace
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

   set setEarthDistance(earthDistance){
    this.earthDistance = earthDistance
  }

  set setLanding(landing){
    this.landing = landing
  }

  set setLandingSystem(landingSystem){
    this.landingSystem = landingSystem
  }

  set setObjective(objective){
    this.objective = objective
  }

  set setLandingPlace(landingPlace){
    this.landingPlace = landingPlace
  }

  set setDestinity(destinity){
    this.destinity = destinity
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