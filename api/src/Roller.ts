import logger from "./logger";
import { IRandomizer } from "./Randomizer";


//Outcomes 5d8+1+1d10
/* {
    0: { def: 5d8, rolls: [ 1,2,3,4,5 ], total: 15 }
    1: 1
    2: { def: 1d10, rolls: [ 10 ], total: 10 }
}*/
interface IOutcome {
    def: string, rolls?: number[], total: number
}

export class Roller {
    randomizer: IRandomizer;
    constructor(randomizer: IRandomizer) {
        this.randomizer = randomizer;
    }
    roll = (rollDefs: string[]) => {
        let rollOutcomes: IOutcome[] = [];
        rollDefs.forEach(rollDef => {
            let operations = this.getOperations(rollDef);
            operations?.forEach(operation => {
                const isMinus = operation.startsWith('-');
                const isDieRoll = operation.indexOf('d') > -1;
                if(isDieRoll) {
                    let [ count, die ] = operation.split('d');
                    let rolls = this.makeRolls(Math.abs(parseInt(count)), parseInt(die));
                    
                    
                    let total = rolls.reduce((prev, cur) => prev += cur, 0);
                    logger.info(`${operation} = ${JSON.stringify(rolls)} = ${total}`)
                    rollOutcomes.push({ def: operation, rolls, total: isMinus ? -total : total });
                } else {
                    rollOutcomes.push({ def: operation, total: parseInt(operation) });
                }
            });
        });
        return rollOutcomes;
    }
    makeRolls = (count: number, die: number) => {
        let rolls = [];
        logger.info(`Rolling ${count} d${die}`)
        for (let i = 0; i < count; i++) {
            rolls.push(this.rollDie(die));
        }
        return rolls;
    }
    rollDie = (die: number) => this.randomizer.getRandom(1, die)
    getOperations = (rollDef: string) => {
        const rollRegex = /(\-*\d+d\d+)|(\-*\d+)/g;
        return rollDef.match(rollRegex);
    }
}