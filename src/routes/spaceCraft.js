const { Router } = require('express');
const router = Router();

/**traigo el componente de naves espaciales, en el cual están definidas las operaciones para cada ruta */
const { SpaceCraftComponent } = require('../components');

/**
 * @swagger
 *  /v1/spaceCrafts:
 *      get:
 *          summary: get all the spaceCrafts;
 *          tags: ["spaceCrafts"]
 *          responses:
 *              200:
 *                  description: get spaceCrafts successfully 
 *              401:
 *                  description: error in get spaceCrafts
 */
 router.get('/', SpaceCraftComponent.findAll);

 /**
  * @swagger
  *  /v1/spaceCrafts/{id}:
  *      get:
  *          summary: get one spaceCraft by id
  *          tags: ["spaceCrafts"]
  *          responses:
  *              200:
  *                  description: get spaceCraft succefully  
  *              401:
  *                  description: user not authorized to get spaceCraft
  *          parameters: [
  *           {
  *              name: id,
  *              in: path,
  *              description: id of the spaceCraft,
  *              required: true,
  *              schema: {
  *                  type: string
  *              }
  *           },
  *          ]
  */
 
  router.get('/:id', SpaceCraftComponent.findOne);
 
  /**
   * @swagger
   *  /v1/spaceCrafts/{id}:
   *      delete:
   *          summary: delete a spaceCraft
   *          tags: ["spaceCrafts"]
   *          responses:
   *              200:
   *                  description: spaceCraft deleted succesfully
   *              401:
   *                  description: user not authorized to delete spaceCrafts
   *          parameters: [
   *           {
   *              name: id,
   *              in: path,
   *              description: id of the spaceCraft,
   *              required: true,
   *              schema: {
   *                  type: string,
   *              }
   *           },
   *          ]
   */
  router.delete('/:id', SpaceCraftComponent.delete);
  
  /**
   * @swagger
   *  /v1/spaceCrafts/{id}:
   *      put:
   *          summary: put spaceCraft in the DB
   *          tags: ["spaceCrafts"]
   *          requestBody:
   *              required: true
   *              content:
   *                  application/json:
   *                      schema:
   *                           $ref: '#/components/schemas/spaceCrafts'
   *          responses:
   *              200:
   *                  description: update spaceCraft successfully
   *              401:
   *                  description: user not authorized to update spaceCrafts
   *          parameters: [
   *           {
   *              name: id,
   *              in: path,
   *              description: id of the spaceCraft,
   *              required: true,
   *              schema: {
   *                  type: string,
   *              }
   *           },
   *          ]
   */
  
  router.put('/:id', SpaceCraftComponent.update);
  
  /**
   * @swagger
   *  /v1/spaceCrafts:
   *      post:
   *          summary: added a spaceCraft
   *          tags: ["spaceCrafts"]
   *          requestBody:
   *              required: true
   *              content:
   *                  application/json:
   *                      schema:
   *                          $ref: '#/components/schemas/spaceCrafts'
   *          responses:
   *              200:
   *                  description: spaceCraft add successfully
   *              401:
   *                  description: user not authorized to add spaceCrafts
   */
  router.post('/', SpaceCraftComponent.create)

  /**
* @swagger
*  /v1/spaceCrafts/pagination?:
*      post:
*          summary: get spaceCrafts paginated
*          tags: ["spaceCrafts"]
*          requestBody:
*              required: true
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/pagination'
*          responses:
*              200:
*                  description: get spaceCraft succefully  
*              401:
*                  description: spaceCraft not authorized to get spaceCraft
*/
router.post('/pagination', SpaceCraftComponent.findPagination)

 /**
  * @swagger
  * tags:
  *  name: spaceCrafts
  *  description: endpoints for managing api spaceCrafts.
  * components:
  *  schemas:
  *      spaceCrafts:
  *          type: object
  *          required:
  *              -name
  *              -pushPower
  *              -fuel
  *              -velocity
  *              -height
  *              -enginesNumber
  *              -earthDistance
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
  *              destinity:
  *                  type: string
  *              enginesNumber:
  *                  type: number
  *              earthDistance:
  *                  type: string
  *              landing:
  *                  type: boolean
  *              landingSystem:
  *                  type: string
  *              objective:
  *                  type: string
  *              landingPlace:
  *                  type: string
  *          example:
  *              name: nave de cesar
  *              weight: 450
  *              pushPower: 450 toneladas
  *              fuel: combustible quimico
  *              velocity: 578 km/hora
  *              height: 700
  *              destinity: marte
  *              enginesNumber: 6
  *              earthDistance: cinco mil km
  *              landing: true
  *              landingSystem: sitema moderno 
  *              objective: aterrizaje en marte 
  *              landingPlace: marte
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