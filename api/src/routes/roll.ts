import express from 'express';
import { Randomizer } from '../Randomizer';
import { Roller } from '../Roller';

const router = express.Router();
const roller = new Roller(new Randomizer());
router.get('/api/roll/:rollDef', (request, result) => {
    const { params } = request;
    const rolls = roller.roll([ params.rollDef ]);
    result.send({ total: rolls.reduce((prev, cur) => prev+cur.total, 0), rolls });
});

export { router as rollRouter };