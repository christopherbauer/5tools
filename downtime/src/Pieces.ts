export class Pieces {
    platinum: number;
    gold: number;
    silver: number;
    copper: number;
    constructor({ platinum, gold, silver, copper }: { platinum?: number; gold?: number; silver?: number; copper?: number; }) {
        this.platinum = platinum || 0;
        this.gold = gold || 0;
        this.silver = silver || 0;
        this.copper = copper || 0;
    }
    toDef = () => { return { "pp": this.platinum, "gp": this.gold, "sp": this.silver, "cp": this.copper }; };
    toString = () => `${this.platinum ? `${this.platinum}pp` : "" }${this.gold ? `${this.gold}gp` : "" }${this.silver ? `${this.silver}sp` : "" }${this.copper ? `${this.copper}cp` : "" }`
}
