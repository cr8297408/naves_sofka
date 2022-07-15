const Joi = require('joi');

/**
 * @export
 * @class SpaceChipValidation
 * 
 */
class SpaceChipValidation {
    /**
     * create an instance of SpaceChipValidation
     * @memberof SpaceChipValidation
     * @returns {Joi.validationResult}
     */

     createSpaceShip(body){
      const schema = Joi.object().keys({
        name: Joi.string().required(),
        weight: Joi.number(),
        pushPower: Joi.string().required(),
        type: Joi.string(),
        fuel: Joi.string().required(),
        velocity: Joi.string().required(),
        height: Joi.number()
      })

      return schema.validate(body)
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof SpaceShipValidation
     */
     getSpaceShip(id) {
      const schema = Joi.string().required();

      return schema.validate(id);
    }
}
module.exports = new SpaceChipValidation();