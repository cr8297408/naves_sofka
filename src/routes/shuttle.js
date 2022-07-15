const { Router } = require('express');
const router = Router();

/**traigo el componente de naves espaciales, en el cual están definidas las operaciones para cada ruta */
const { ShuttleComponent } = require('../components');

/**
 * @swagger
 *  /v1/shuttles:
 *      get:
 *          summary: get all the shuttles;
 *          tags: ["shuttles"]
 *          responses:
 *              200:
 *                  description: get shuttles successfully 
 *              401:
 *                  description: error in get shuttles
 */
 router.get('/', ShuttleComponent.findAll);

 /**
  * @swagger
  *  /v1/shuttles/{id}:
  *      get:
  *          summary: get one shuttle by id
  *          tags: ["shuttles"]
  *          responses:
  *              200:
  *                  description: get shuttle succefully  
  *              401:
  *                  description: user not authorized to get shuttle
  *          parameters: [
  *           {
  *              name: id,
  *              in: path,
  *              description: id of the shuttle,
  *              required: true,
  *              schema: {
  *                  type: string
  *              }
  *           },
  *          ]
  */
 
  router.get('/:id', ShuttleComponent.findOne);
 
  /**
   * @swagger
   *  /v1/shuttles/{id}:
   *      delete:
   *          summary: delete a shuttle
   *          tags: ["shuttles"]
   *          responses:
   *              200:
   *                  description: shuttle deleted succesfully
   *              401:
   *                  description: user not authorized to delete shuttles
   *          parameters: [
   *           {
   *              name: id,
   *              in: path,
   *              description: id of the shuttle,
   *              required: true,
   *              schema: {
   *                  type: string,
   *              }
   *           },
   *          ]
   */
  router.delete('/:id', ShuttleComponent.delete);
  
  /**
   * @swagger
   *  /v1/shuttles/{id}:
   *      put:
   *          summary: put shuttle in the DB
   *          tags: ["shuttles"]
   *          requestBody:
   *              required: true
   *              content:
   *                  application/json:
   *                      schema:
   *                           $ref: '#/components/schemas/shuttles'
   *          responses:
   *              200:
   *                  description: update shuttle successfully
   *              401:
   *                  description: user not authorized to update shuttles
   *          parameters: [
   *           {
   *              name: id,
   *              in: path,
   *              description: id of the shuttle,
   *              required: true,
   *              schema: {
   *                  type: string,
   *              }
   *           },
   *          ]
   */
  
  router.put('/:id', ShuttleComponent.update);
  
  /**
   * @swagger
   *  /v1/shuttles:
   *      post:
   *          summary: added a shuttle
   *          tags: ["shuttles"]
   *          requestBody:
   *              required: true
   *              content:
   *                  application/json:
   *                      schema:
   *                          $ref: '#/components/schemas/shuttles'
   *          responses:
   *              200:
   *                  description: shuttle add successfully
   *              401:
   *                  description: user not authorized to add shuttles
   */
  router.post('/', ShuttleComponent.create)

  /**
* @swagger
*  /v1/shuttles/pagination?:
*      post:
*          summary: get shuttles paginated
*          tags: ["shuttles"]
*          requestBody:
*              required: true
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/pagination'
*          responses:
*              200:
*                  description: get shuttle succefully  
*              401:
*                  description: shuttle not authorized to get shuttle
*/
router.post('/pagination', ShuttleComponent.findPagination)

 /**
  * @swagger
  * tags:
  *  name: shuttles
  *  description: endpoints for managing api shuttles.
  * components:
  *  schemas:
  *      shuttles:
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
  *              chargeCapacity:
  *                  type: number
  *              utilCharge:
  *                  type: number
  *              propellerNumber:
  *                  type: number
  *              chargeTransported:
  *                  type: number
  *          example:
  *              name: nave de cesar
  *              weight: 450
  *              pushPower: 450 toneladas
  *              fuel: combustible quimico
  *              velocity: 578 km/hora
  *              height: 700
  *              chargeCapacity: 344
  *              utilCharge: 100
  *              propellerNumber: 4
  *              chargeTransported: 300
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