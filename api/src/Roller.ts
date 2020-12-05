import logger from "./logger";
import { IRandomizer } from "./Randomizer";

export class Roller {
    randomizer: IRandomizer;
    constructor(randomizer: IRandomizer) {
        this.randomizer = randomizer;
    }
    roll = (rollDefs: string[]) => {
        let rollOutcomes: number = 0;
        rollDefs.forEach(rollDef => {
            let operations = this.getOperations(rollDef);
            let operationOutcomes: number[] = [];
            operations?.forEach(operation => {
                const isMinus = operation.startsWith('-');
                const isDieRoll = operation.indexOf('d') > -1;
                if(isDieRoll) {
                    let [ count, die ] = operation.split('d');
                    let rolls = this.makeRolls(Math.abs(parseInt(count)), parseInt(die));
                    
                    logger.info(`${operation} = ${JSON.stringify(rolls)}`)
                    
                    let total = rolls.reduce((prev, cur) => prev += cur, 0);
                    operationOutcomes.push(isMinus ? -total : total);
                } else {
                    operationOutcomes.push(parseInt(operation));
                }
            });
            rollOutcomes = operationOutcomes.reduce((prev, cur) => prev += cur, rollOutcomes);
        });
        return rollOutcomes;
    }
    makeRolls = (count: number, die: number) => {
        let rolls = [];
        
        logger.info(`Rolling ${count} d${die}`)
        for (let i = 0; i < count; i++) {
            rolls.push(this.makeRoll(die));
        }
        return rolls;
    }
    makeRoll = (die: number) => this.randomizer.getRandom(1, die)
    getOperations = (rollDef: string) => {
        const rollRegex = /(\-*\d+d\d+)|(\-*\d+)/g;
        const operations = rollDef.match(rollRegex);
        return operations;
    }
}