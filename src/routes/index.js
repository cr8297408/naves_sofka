const express = require('express')
const router = express.Router();
/**obtengo el router de las naves espaciales */
const SpaceChipRouter = require('./space');
/**obtengo el router de naves lanzadera */
const ShuttleRouter = require('./shuttle');
/**obtengo el router de naves tripuladas */
const MannedRouter = require('./manned');
/**obtengo el router de naves no tripuladas */
const NotMannedRouter = require('./notManned');
/**obtengo el router de satellites*/
const SatelliteRouter = require('./satellite');
/**obtengo el router de las sondas espaciales*/
const SpaceCraftRouter = require('./spaceCraft');

/**asigno una ruta al router de naves espaciales*/
router.use('/v1/spacesShips', SpaceChipRouter);
/**asigno una ruta al router de naves espaciales tipo lanzadera*/
router.use('/v1/shuttles', ShuttleRouter);
/**asigno una ruta al router de naves espaciales tipo tripuladas*/
router.use('/v1/manneds', MannedRouter);
/** asigno una ruta al router de las naves espaciales no tripuladas*/
router.use('/v1/notManneds', NotMannedRouter);
/** asigno una ruta al router de satellites */
router.use('/v1/satellites', SatelliteRouter);
/** asigno una ruta al router de satellites */
router.use('/v1/spaceCrafts', SpaceCraftRouter);

module.exports = router;