import express from 'express';
import { DefinitionRoller } from '../services/roll/DefinitionRoller';
import { Roller } from '../services/roll/Roller';
import { Randomizer } from '../Randomizer';
import { sumOutcomes } from '../services/roll/RollHelper';

const router = express.Router();

const roller = new DefinitionRoller(new Roller(new Randomizer()));

router.get('/api/roll/:rollDef', (request, result) => {
    const { params } = request;
    const outcomes = roller.roll([ params.rollDef ]);
    result.send({ total: sumOutcomes(outcomes), rolls: outcomes });
});

export { router as rollRouter };