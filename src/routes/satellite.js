const { Router } = require('express');
const router = Router();

/**traigo el componente de naves espaciales, en el cual están definidas las operaciones para cada ruta */
const { SatelliteComponent } = require('../components');

/**
 * @swagger
 *  /v1/satellites:
 *      get:
 *          summary: get all the satellites;
 *          tags: ["satellites"]
 *          responses:
 *              200:
 *                  description: get satellites successfully 
 *              401:
 *                  description: error in get satellites
 */
 router.get('/', SatelliteComponent.findAll);

 /**
  * @swagger
  *  /v1/satellites/{id}:
  *      get:
  *          summary: get one satellite by id
  *          tags: ["satellites"]
  *          responses:
  *              200:
  *                  description: get satellite succefully  
  *              401:
  *                  description: user not authorized to get satellite
  *          parameters: [
  *           {
  *              name: id,
  *              in: path,
  *              description: id of the satellite,
  *              required: true,
  *              schema: {
  *                  type: string
  *              }
  *           },
  *          ]
  */
 
  router.get('/:id', SatelliteComponent.findOne);
 
  /**
   * @swagger
   *  /v1/satellites/{id}:
   *      delete:
   *          summary: delete a satellite
   *          tags: ["satellites"]
   *          responses:
   *              200:
   *                  description: satellite deleted succesfully
   *              401:
   *                  description: user not authorized to delete satellites
   *          parameters: [
   *           {
   *              name: id,
   *              in: path,
   *              description: id of the satellite,
   *              required: true,
   *              schema: {
   *                  type: string,
   *              }
   *           },
   *          ]
   */
  router.delete('/:id', SatelliteComponent.delete);
  
  /**
   * @swagger
   *  /v1/satellites/{id}:
   *      put:
   *          summary: put satellite in the DB
   *          tags: ["satellites"]
   *          requestBody:
   *              required: true
   *              content:
   *                  application/json:
   *                      schema:
   *                           $ref: '#/components/schemas/satellites'
   *          responses:
   *              200:
   *                  description: update satellite successfully
   *              401:
   *                  description: user not authorized to update satellites
   *          parameters: [
   *           {
   *              name: id,
   *              in: path,
   *              description: id of the satellite,
   *              required: true,
   *              schema: {
   *                  type: string,
   *              }
   *           },
   *          ]
   */
  
  router.put('/:id', SatelliteComponent.update);
  
  /**
   * @swagger
   *  /v1/satellites:
   *      post:
   *          summary: added a satellite
   *          tags: ["satellites"]
   *          requestBody:
   *              required: true
   *              content:
   *                  application/json:
   *                      schema:
   *                          $ref: '#/components/schemas/satellites'
   *          responses:
   *              200:
   *                  description: satellite add successfully
   *              401:
   *                  description: user not authorized to add satellites
   */
  router.post('/', SatelliteComponent.create)

  /**
* @swagger
*  /v1/satellites/pagination?:
*      post:
*          summary: get satellites paginated
*          tags: ["satellites"]
*          requestBody:
*              required: true
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/pagination'
*          responses:
*              200:
*                  description: get satellite succefully  
*              401:
*                  description: satellite not authorized to get satellite
*/
router.post('/pagination', SatelliteComponent.findPagination)

 /**
  * @swagger
  * tags:
  *  name: satellites
  *  description: endpoints for managing api satellites.
  * components:
  *  schemas:
  *      satellites:
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
  *              orbitLevel: nivel 2
  *              altitude: 1342
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