import { Roll, Randomizer } from '@5tools/common';
import express from 'express';
import { Monster } from '../models/monster';
import { encounters } from './IEncounterDef';
// import { sumOutcomes } from '../services/roll/RollHelper';

const router = express.Router();
const roller = new Roll.DefinitionRoller(new Roll.Roller(new Randomizer()));

router.get("/api/encounter/echo", (request, response) => {
    response.send(new Date());
})

interface IEncounter {
    monster: any;
    count: number;
}
router.get("/api/encounter/arctic/:pcAverageLevel", async (request, response) => {
    const { params } = request;
    const pcLevel = parseInt(params.pcAverageLevel);
    const encounterTable = encounters.find((encounter) => encounter.levelMin <= pcLevel && encounter.levelMax >= pcLevel)!;
    const d100Result = Roll.sumOutcomes(roller.roll([ "1d100" ]));
    const rolledEncounter = encounterTable.encounters.find((encounterDef) => encounterDef.min <= d100Result && encounterDef.max >= d100Result)!;
    let encounterDetails: IEncounter[] = [];
    for (let i = 0; i < rolledEncounter.encounterDef.length; i++) {
        const curEncounter = rolledEncounter.encounterDef[i];
        const monsterCount = Roll.sumOutcomes(roller.roll([ curEncounter.rollDef ]));
        const theMonster = await Monster.findOne({ index: curEncounter.enemy });
        if(theMonster !== null) {
            encounterDetails.push({ count: monsterCount, monster: theMonster });
        }
        else {
            encounterDetails.push({ count: monsterCount, monster: curEncounter.enemy });
        }
    }
    
    response.send(encounterDetails);
});

export { router as encounterRoute };