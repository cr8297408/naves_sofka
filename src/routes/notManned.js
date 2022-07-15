const { Router } = require('express');
const router = Router();

/**traigo el componente de naves espaciales, en el cual están definidas las operaciones para cada ruta */
const { NotMannedComponent } = require('../components');

/**
 * @swagger
 *  /v1/notManneds:
 *      get:
 *          summary: get all the notManneds;
 *          tags: ["notManneds"]
 *          responses:
 *              200:
 *                  description: get notManneds successfully 
 *              401:
 *                  description: error in get notManneds
 */
 router.get('/', NotMannedComponent.findAll);

 /**
  * @swagger
  *  /v1/notManneds/{id}:
  *      get:
  *          summary: get one notManned by id
  *          tags: ["notManneds"]
  *          responses:
  *              200:
  *                  description: get notManned succefully  
  *              401:
  *                  description: user not authorized to get notManned
  *          parameters: [
  *           {
  *              name: id,
  *              in: path,
  *              description: id of the notManned,
  *              required: true,
  *              schema: {
  *                  type: string
  *              }
  *           },
  *          ]
  */
 
  router.get('/:id', NotMannedComponent.findOne);
 
  /**
   * @swagger
   *  /v1/notManneds/{id}:
   *      delete:
   *          summary: delete a notManned
   *          tags: ["notManneds"]
   *          responses:
   *              200:
   *                  description: notManned deleted succesfully
   *              401:
   *                  description: user not authorized to delete notManneds
   *          parameters: [
   *           {
   *              name: id,
   *              in: path,
   *              description: id of the notManned,
   *              required: true,
   *              schema: {
   *                  type: string,
   *              }
   *           },
   *          ]
   */
  router.delete('/:id', NotMannedComponent.delete);
  
  /**
   * @swagger
   *  /v1/notManneds/{id}:
   *      put:
   *          summary: put notManned in the DB
   *          tags: ["notManneds"]
   *          requestBody:
   *              required: true
   *              content:
   *                  application/json:
   *                      schema:
   *                           $ref: '#/components/schemas/notManneds'
   *          responses:
   *              200:
   *                  description: update notManned successfully
   *              401:
   *                  description: user not authorized to update notManneds
   *          parameters: [
   *           {
   *              name: id,
   *              in: path,
   *              description: id of the notManned,
   *              required: true,
   *              schema: {
   *                  type: string,
   *              }
   *           },
   *          ]
   */
  
  router.put('/:id', NotMannedComponent.update);
  
  /**
   * @swagger
   *  /v1/notManneds:
   *      post:
   *          summary: added a notManned
   *          tags: ["notManneds"]
   *          requestBody:
   *              required: true
   *              content:
   *                  application/json:
   *                      schema:
   *                          $ref: '#/components/schemas/notManneds'
   *          responses:
   *              200:
   *                  description: notManned add successfully
   *              401:
   *                  description: user not authorized to add notManneds
   */
  router.post('/', NotMannedComponent.create)

  /**
* @swagger
*  /v1/notManneds/pagination?:
*      post:
*          summary: get notManneds paginated
*          tags: ["notManneds"]
*          requestBody:
*              required: true
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/pagination'
*          responses:
*              200:
*                  description: get notManned succefully  
*              401:
*                  description: notManned not authorized to get notManned
*/
router.post('/pagination', NotMannedComponent.findPagination)

 /**
  * @swagger
  * tags:
  *  name: notManneds
  *  description: endpoints for managing api notManneds.
  * components:
  *  schemas:
  *      notManneds:
  *          type: object
  *          required:
  *              -name
  *              -pushPower
  *              -fuel
  *              -velocity
  *              -height
  *              -enginesNumber
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
  *          example:
  *              name: nave de cesar
  *              weight: 450
  *              pushPower: 450 toneladas
  *              fuel: combustible quimico
  *              velocity: 578 km/hora
  *              height: 700
  *              destinity: marte
  *              enginesNumber: 6
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