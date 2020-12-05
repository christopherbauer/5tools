export interface IRandomizer {
    getRandom: (min: number, max: number) => number;
}
export class Randomizer implements IRandomizer {
    getRandom = (min: number, max: number) => Math.floor(Math.random() * max) + min;

}