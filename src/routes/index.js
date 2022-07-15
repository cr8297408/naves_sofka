const express = require('express')
const router = express.Router();
/**obtengo el router de las naves espaciales */
const SpaceChipRouter = require('./space');

/**asigno una ruta al router de naves espaciales*/
router.use('/v1/spacesShips', SpaceChipRouter);

module.exports = router;