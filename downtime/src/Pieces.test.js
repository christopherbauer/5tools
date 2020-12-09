import { Pieces } from './Pieces';
describe("Pieces", () => {
    it("converts gold to json definition", () => {
        const pieces = new Pieces({ gold: 150 });

        expect(pieces.toDef()).toEqual({ pp: 0, gp: 150, sp: 0, cp: 0 });
    })
    it("converts gold to string", () => {
        const pieces = new Pieces({ gold: 150 });

        expect(pieces.toString()).toEqual("150gp");
    })
    it("converts copper, silver and platinum to json definition", () => {
        const pieces = new Pieces({ copper: 20, silver: 50, platinum: 100 });

        expect(pieces.toDef()).toEqual({ pp: 100, gp: 0, sp: 50, cp: 20 });
    })
    it("converts copper, silver and platinum to string", () => {
        const pieces = new Pieces({ copper: 20, silver: 50, platinum: 100 });

        expect(pieces.toString()).toEqual("100pp50sp20cp");
    })
})