import express from 'express';
import { Roller, DefinitionRoller } from 'Roller';
import { Randomizer } from '../Randomizer';
// import { sumOutcomes } from '../services/roll/RollHelper';

const router = express.Router();

const roller = new DefinitionRoller(new Roller(new Randomizer()));

router.get("/api/encounter/echo", (request, response) => {
    response.send(new Date());
})
router.get("/api/encounter/arctic/:pcAverageLevel", (request, response) => {
    const { params } = request;
    response.send();
});

export { router as rollRouter };