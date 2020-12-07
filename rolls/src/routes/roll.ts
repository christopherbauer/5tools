import express from 'express';
import { Roll, Randomizer } from '@5tools/common';

const router = express.Router();

const roller = new Roll.DefinitionRoller(new Roll.Roller(new Randomizer()));

router.get('/api/roll/:rollDef', (request, response) => {
    const { params } = request;
    const outcomes = roller.roll([ params.rollDef ]);
    response.send({ total: Roll.sumOutcomes(outcomes), rolls: outcomes });
});

export { router as rollRouter };