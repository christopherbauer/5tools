import express from 'express';
import { Roll, Randomizer } from '@5tools/common';
import { sumOutcomes } from '@5tools/common/dist/roll';
import { Pieces } from '../../Pieces';

const router = express.Router();

const roller = new Roll.DefinitionRoller(new Roll.Roller(new Randomizer()));
const carousingResults = [
    { "min": 1, "max": 5, "outcome": "Character makes a hostile contact" },
    { "min": 6, "max": 10, "outcome": "Character makes no new contacts" },
    { "min": 11, "max": 15, "outcome": "Character has made an allied contact" },
    { "min": 16, "max": 20, "outcome": "Character has made two allied contacts" },
    { "min": 21, "outcome": "Character has made three allied contacts" },
];
const rivalInvolved = () => sumOutcomes(roller.roll([ "1d100" ])) >= 51;

const processComplication = (complication: IComplication) => {
    if(!complication.outcomeInterpolation) { return complication; }

    let complicationString = complication.outcome;
    complication.outcomeInterpolation.forEach((value, i) => complicationString.replace(`{${0}}`, value));
    return { rivalInvolved: complication.rivalInvolved, outcome: complicationString };
};
interface IComplication {
    outcome: string;
    outcomeInterpolation?: string[];
    rivalInvolved?: boolean;
}
interface ICarouseResponse {
    outcome: string;
    complication?: IComplication;
}
const lowerComplications: IComplication[] = [
    { outcome: "A pickpocket lifts {0} from you", outcomeInterpolation: [ new Pieces({ gold: sumOutcomes(roller.roll([ "1d10" ]))*5 }).toString() ], rivalInvolved: rivalInvolved() },
    { outcome: "A bar brawl leaves you with a scar", rivalInvolved: rivalInvolved() },
    { outcome: "You have fuzzy memories of doing something very, very illegal, but can't remember exactly what" },
    { outcome: "You are banned from a tavern after some obnoxious behavior", rivalInvolved: rivalInvolved() },
    { outcome: "After a few drinks, you swore in the town square to pursue a dangerous quest" },
    { outcome: "Surprise! You're married" },
    { outcome: "Streaking naked through the streets seemed like a good idea at the time" },
    { outcome: "Everyone is calling you by some weird, embarrassing nickname, like Puddle Drinker or Bench Slayer, and no one will say why", rivalInvolved: rivalInvolved() },
]
router.post("/api/downtime/carousing/lower", (request, response) => {
    const { persuasionBonus } = request.body;

    const total = sumOutcomes(roller.roll([ "1d20" ])) + parseInt(persuasionBonus);

    const outcome = carousingResults.find((carouse) => carouse.min <= total && (!carouse.max || carouse.max >= total))!

    const hasComplication =  sumOutcomes(roller.roll([ "1d100" ])) <= 10;

    let carouseResponse: ICarouseResponse = {
        outcome: outcome?.outcome
    };
    if(hasComplication) {
        const complicationRoll = sumOutcomes(roller.roll([ "1d8" ]));

        const complication = lowerComplications[complicationRoll];
        
        carouseResponse.complication = processComplication(complication);
    }
   
    response.send(carouseResponse);
});

const middleComplications: IComplication[] = [
    { outcome: "You accidently insulted a guild master, and only a public apology will let you do business with the guild again", rivalInvolved: rivalInvolved() },
    { outcome: "You swore to complete some quest on behalf of a temple or guild" },
    { outcome: "A social gaff has made you the talk of the town", rivalInvolved: rivalInvolved() },
    { outcome: "A particularly obnoxious person has taken an intense romantic interest in you", rivalInvolved: rivalInvolved() },
    { outcome: "You have made a foe out of a local spellcaster", rivalInvolved: rivalInvolved() },
    { outcome: "You have been recruited to help run a local festival, play, or similar event" },
    { outcome: "You made a drunken toast that scandalized the locals" },
    { outcome: "You spent an additional {0} trying to impress people", outcomeInterpolation: [ new Pieces({ gold: sumOutcomes(roller.roll([ "80+8d6" ])) }).toString() ] }
];
router.post("/api/downtime/carousing/middle", (request, response) => {
    const { persuasionBonus } = request.body;

    const total = sumOutcomes(roller.roll([ "1d20" ])) + parseInt(persuasionBonus);

    const outcome = carousingResults.find((carouse) => carouse.min <= total && (!carouse.max || carouse.max >= total))!

    const hasComplication =  sumOutcomes(roller.roll([ "1d100" ])) <= 10;

    let carouseResponse: ICarouseResponse = {
        outcome: outcome?.outcome
    };
    if(hasComplication) {
        const complicationRoll = sumOutcomes(roller.roll([ "1d8" ]));

        const complication = middleComplications[complicationRoll];
        
        carouseResponse.complication = processComplication(complication);
    }
   
    response.send(carouseResponse);
});
const upperComplications: IComplication[] = [
    { outcome: "A pushy noble family wants to marry off one of their scions to you", rivalInvolved: rivalInvolved() },
    { outcome: "You tripped and fell during a dance, and people can't stop talking about it" },
    { outcome: "You gave agreed to take on a noble's debts" },
    { outcome: "You have been challenged to a joust by a knight", rivalInvolved: rivalInvolved() },
    { outcome: "You have made a foe out of a local noble", rivalInvolved: rivalInvolved() },
    { outcome: "A boring noble insists you visit each day and listen to long, tedious theories of magic" },
    { outcome: "You have become the target of a variety of embarrassing rumors", rivalInvolved: rivalInvolved() },
    { outcome: "You spent an additional {0} trying to impress people", outcomeInterpolation: [ sumOutcomes(roller.roll([ "450+25d4" ])).toString() ] }
];

router.post("/api/downtime/carousing/upper", (request, response) => {
    const { persuasionBonus } = request.body;

    const total = sumOutcomes(roller.roll([ "1d20" ])) + parseInt(persuasionBonus);

    const outcome = carousingResults.find((carouse) => carouse.min <= total && (!carouse.max || carouse.max >= total))!;

    const hasComplication =  sumOutcomes(roller.roll([ "1d100" ])) <= 10;

    let carouseResponse: ICarouseResponse = {
        outcome: outcome?.outcome
    };
    if(hasComplication) {
        const complicationRoll = sumOutcomes(roller.roll([ "1d8" ]));

        const complication = upperComplications[complicationRoll];
        
        carouseResponse.complication = processComplication(complication);
    }
   
    response.send(carouseResponse);
});

export { router as carousingRouter };