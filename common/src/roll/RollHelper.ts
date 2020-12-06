import { IOutcome } from './DefinitionRoller';

const sumOutcomes = (outcomes: IOutcome[]) => outcomes.reduce((prev, cur) => prev+cur.total, 0);

export { sumOutcomes };