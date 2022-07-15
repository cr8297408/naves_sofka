const { Router } = require('express');
const router = Router();

/**traigo el componente de naves espaciales, en el cual están definidas las operaciones para cada ruta */
const { MannedComponent } = require('../components');

/**
 * @swagger
 *  /v1/manneds:
 *      get:
 *          summary: get all the manneds;
 *          tags: ["manneds"]
 *          responses:
 *              200:
 *                  description: get manneds successfully 
 *              401:
 *                  description: error in get manneds
 */
 router.get('/', MannedComponent.findAll);

 /**
  * @swagger
  *  /v1/manneds/{id}:
  *      get:
  *          summary: get one manned by id
  *          tags: ["manneds"]
  *          responses:
  *              200:
  *                  description: get manned succefully  
  *              401:
  *                  description: user not authorized to get manned
  *          parameters: [
  *           {
  *              name: id,
  *              in: path,
  *              description: id of the manned,
  *              required: true,
  *              schema: {
  *                  type: string
  *              }
  *           },
  *          ]
  */
 
  router.get('/:id', MannedComponent.findOne);
 
  /**
   * @swagger
   *  /v1/manneds/{id}:
   *      delete:
   *          summary: delete a manned
   *          tags: ["manneds"]
   *          responses:
   *              200:
   *                  description: manned deleted succesfully
   *              401:
   *                  description: user not authorized to delete manneds
   *          parameters: [
   *           {
   *              name: id,
   *              in: path,
   *              description: id of the manned,
   *              required: true,
   *              schema: {
   *                  type: string,
   *              }
   *           },
   *          ]
   */
  router.delete('/:id', MannedComponent.delete);
  
  /**
   * @swagger
   *  /v1/manneds/{id}:
   *      put:
   *          summary: put manned in the DB
   *          tags: ["manneds"]
   *          requestBody:
   *              required: true
   *              content:
   *                  application/json:
   *                      schema:
   *                           $ref: '#/components/schemas/manneds'
   *          responses:
   *              200:
   *                  description: update manned successfully
   *              401:
   *                  description: user not authorized to update manneds
   *          parameters: [
   *           {
   *              name: id,
   *              in: path,
   *              description: id of the manned,
   *              required: true,
   *              schema: {
   *                  type: string,
   *              }
   *           },
   *          ]
   */
  
  router.put('/:id', MannedComponent.update);
  
  /**
   * @swagger
   *  /v1/manneds:
   *      post:
   *          summary: added a manned
   *          tags: ["manneds"]
   *          requestBody:
   *              required: true
   *              content:
   *                  application/json:
   *                      schema:
   *                          $ref: '#/components/schemas/manneds'
   *          responses:
   *              200:
   *                  description: manned add successfully
   *              401:
   *                  description: user not authorized to add manneds
   */
  router.post('/', MannedComponent.create)

  /**
* @swagger
*  /v1/manneds/pagination?:
*      post:
*          summary: get manneds paginated
*          tags: ["manneds"]
*          requestBody:
*              required: true
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/pagination'
*          responses:
*              200:
*                  description: get manned succefully  
*              401:
*                  description: manned not authorized to get manned
*/
router.post('/pagination', MannedComponent.findPagination)

 /**
  * @swagger
  * tags:
  *  name: manneds
  *  description: endpoints for managing api manneds.
  * components:
  *  schemas:
  *      manneds:
  *          type: object
  *          required:
  *              -name
  *              -pushPower
  *              -fuel
  *              -velocity
  *              -height
  *              -passengersNumber
  *              -mission
  *          properties:
  *              id:
  *                  type: string
  *              name:
  *                  type: string
  *              weight:
  *                  type: number
  *              pushPower:
  *                  type: string
  *              type:
  *                  type: string
  *              fuel:
  *                  type: string
  *              velocity:
  *                  type: string
  *              height:
  *                  type: number
  *              passengersNumber:
  *                  type: number
  *              mission:
  *                  type: string
  *          example:
  *              name: nave de cesar
  *              weight: 450
  *              pushPower: 450 toneladas
  *              fuel: combustible quimico
  *              velocity: 578 km/hora
  *              height: 700
  *              passengersNumber: 5
  *              mission: transbordaje estacion internacional
  *      pagination:
  *          type: string
  *          required:
  *              -where
  *          example:
  *              where: c
  *              size: 8
  *              page: 1
  *      Error:    
  *          type: object
  *          required:
  *              -status
  *              -message
  *          properties:
  *              status: 
  *                  type: integer
  *                  description: HTTP status code
  *                  example: 400
  *              message:
  *                  type: string
  *                  description: Error description
  *                  example: entity no created
  */

 module.exports = router;