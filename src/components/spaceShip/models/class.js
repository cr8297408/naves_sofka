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
  constructor(name, weight, pushPower, type, fuel, velocity, height){
    this.name = name,
    this.weight = weight,
    this.pushPower = pushPower,
    this.type = type,
    this.fuel = fuel,
    this.velocity = velocity,
    this.height = height
  }

  /**
   * metodo para obtener la informacion basica de la nave 
   */
  obtenerInformacion(){
    const mensaje = `la nave con nombre: ${this.name}, tiene un empuje de ${this.pushPower} toneladas` 
    return mensaje
  }
  /**
   * metodo para empezar el despiegue la nave...
   */
  startShip(){
    const mensaje = `ha iniciado el lanzamiento de la nave de nombre ${this.name}`
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

}

module.exports = SpaceShipClass;