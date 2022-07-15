const { Router } = require('express');
const router = Router();

/**traigo el componente de naves espaciales, en el cual están definidas las operaciones para cada ruta */
const { SpacesShipComponent } = require('../components');

/**
 * @swagger
 *  /v1/spacesShips:
 *      get:
 *          summary: get all the spacesShips;
 *          tags: ["spacesShips"]
 *          responses:
 *              200:
 *                  description: get spacesShips successfully 
 *              401:
 *                  description: error in get spacesShips
 */
 router.get('/', SpacesShipComponent.findAll);

 /**
  * @swagger
  *  /v1/spacesShips/{id}:
  *      get:
  *          summary: get one spacesShip by id
  *          tags: ["spacesShips"]
  *          responses:
  *              200:
  *                  description: get spacesShip succefully  
  *              401:
  *                  description: user not authorized to get spacesShip
  *          parameters: [
  *           {
  *              name: id,
  *              in: path,
  *              description: id of the spacesShip,
  *              required: true,
  *              schema: {
  *                  type: string
  *              }
  *           },
  *          ]
  */
 
  router.get('/:id', SpacesShipComponent.findOne);
 
  /**
   * @swagger
   *  /v1/spacesShips/{id}:
   *      delete:
   *          summary: delete a spacesShip
   *          tags: ["spacesShips"]
   *          responses:
   *              200:
   *                  description: spacesShip deleted succesfully
   *              401:
   *                  description: user not authorized to delete spacesShips
   *          parameters: [
   *           {
   *              name: id,
   *              in: path,
   *              description: id of the spacesShip,
   *              required: true,
   *              schema: {
   *                  type: string,
   *              }
   *           },
   *          ]
   */
  router.delete('/:id', SpacesShipComponent.delete);
  
  /**
   * @swagger
   *  /v1/spacesShips/{id}:
   *      put:
   *          summary: put spacesShip in the DB
   *          tags: ["spacesShips"]
   *          requestBody:
   *              required: true
   *              content:
   *                  application/json:
   *                      schema:
   *                           $ref: '#/components/schemas/spacesShips'
   *          responses:
   *              200:
   *                  description: update spacesShip successfully
   *              401:
   *                  description: user not authorized to update spacesShips
   *          parameters: [
   *           {
   *              name: id,
   *              in: path,
   *              description: id of the spacesShip,
   *              required: true,
   *              schema: {
   *                  type: string,
   *              }
   *           },
   *          ]
   */
  
  router.put('/:id', SpacesShipComponent.update);
  
  /**
   * @swagger
   *  /v1/spacesShips:
   *      post:
   *          summary: added a spacesShip
   *          tags: ["spacesShips"]
   *          requestBody:
   *              required: true
   *              content:
   *                  application/json:
   *                      schema:
   *                          $ref: '#/components/schemas/spacesShips'
   *          responses:
   *              200:
   *                  description: spacesShip add successfully
   *              401:
   *                  description: user not authorized to add spacesShips
   */
  router.post('/', SpacesShipComponent.create)

  /**
* @swagger
*  /v1/spacesShips/pagination?:
*      post:
*          summary: get spacesShips paginated
*          tags: ["spacesShips"]
*          requestBody:
*              required: true
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/pagination'
*          responses:
*              200:
*                  description: get spacesShip succefully  
*              401:
*                  description: spacesShip not authorized to get spacesShip
*/
router.post('/pagination', SpacesShipComponent.findPagination)

 /**
  * @swagger
  * tags:
  *  name: spacesShips
  *  description: endpoints for managing api spacesShips.
  * components:
  *  schemas:
  *      spacesShips:
  *          type: object
  *          required:
  *              -name
  *              -pushPower
  *              -fuel
  *              -velocity
  *              -height
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
  *          example:
  *              name: nave de cesar
  *              weight: 450
  *              pushPower: 450 toneladas
  *              fuel: combustible quimico
  *              velocity: 578 km/hora
  *              height: 700
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