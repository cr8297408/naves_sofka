const Joi = require('joi');

/**
 * @export
 * @class ShuttleValidation
 * 
 */
class ShuttleValidation {
    /**
     * create an instance of ShuttleValidation
     * @memberof ShuttleValidation
     * @returns {Joi.validationResult}
     */

     createShuttle(body){
      const schema = Joi.object().keys({
        name: Joi.string().required(),
        weight: Joi.number(),
        pushPower: Joi.string().required(),
        type: Joi.string(),
        fuel: Joi.string().required(),
        velocity: Joi.string().required(),
        height: Joi.number(),
        chargeCapacity: Joi.number(),
        utilCharge: Joi.number(),
        propellerNumber: Joi.number(),
        chargeTransported: Joi.number()
      })

      return schema.validate(body)
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof SpaceShipValidation
     */
     getShuttle(id) {
      const schema = Joi.string().required();

      return schema.validate(id);
    }
}
module.exports = new ShuttleValidation();