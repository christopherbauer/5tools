import { Roller } from "./Roller";
import { Randomizer } from "./Randomizer";

describe('Roller', () => {
    it('Rolls die definition effectively: 1+1', () => {
        const roller = new Roller(new Randomizer());
        expect(roller.roll([ '1+1' ])).toEqual(2);
    });
    it('Rolls die definition effectively: 1d4', () => {
        const randomizer = () => ({
            getRandom: (min, max) => 4
        });

        const roller = new Roller(randomizer());
        expect(roller.roll([ '1d4' ])).toEqual(4);
    });
    it('Rolls die definition effectively: 1d4+1d4', () => {
        const randomizer = () => ({
            getRandom: (min, max) => 4
        });

        const roller = new Roller(randomizer());
        expect(roller.roll([ '1d4+1d4' ])).toEqual(8);
    });
    it('Rolls die definition effectively: 1d8+1d8+1', () => {
        const randomizer = () => ({
            getRandom: (min, max) => 6
        });

        const roller = new Roller(randomizer());
        expect(roller.roll([ '1d8+1d8+1' ])).toEqual(13);
    });
    it('Rolls die definition effectively: 1d8+1d8-1d4', () => {
        const randomizer = () => ({
            getRandom: (min, max) => 3
        });

        const roller = new Roller(randomizer());
        expect(roller.roll([ '1d8+1d8-1d4' ])).toEqual(3);
    });
    it('Rolls die definition effectively: 3d8', () => {
        const randomizer = () => ({
            getRandom: (min, max) => 3
        });

        const roller = new Roller(randomizer());
        expect(roller.roll([ '3d8' ])).toEqual(9);
    });
});