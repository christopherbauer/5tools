interface IEncounterDef {
    rollDef: string;
    enemy: string;
}
interface IEncounterRoll {
    min: number;
    max: number;
    encounterDef: IEncounterDef[];
}
interface IEncounterLevelRoll {
    levelMin: number;
    levelMax: number;
    encounters: IEncounterRoll[];
}
export const encounters: IEncounterLevelRoll[] = [
    { 
        levelMin: 1,
        levelMax: 4,
        encounters: [
            {
                min: 1,
                max: 1,
                encounterDef: [
                    {
                        rollDef: "1",
                        enemy: "giant-owl"
                    }
                ]
            },
            {
                min: 2,
                max: 5,
                encounterDef: [
                    {
                        rollDef: "1d6+3",
                        enemy: "kobold"
                    }
                ]
            },
            {
                min: 6,
                max: 8,
                encounterDef: [
                    {
                        rollDef: "1d4+3",
                        enemy: "trappers (commoners)"
                    }
                ]
            },
            {
                min: 9,
                max: 10,
                encounterDef: [
                    {
                        rollDef: "1",
                        enemy: "owl"
                    }
                ]
            },
            {
                min: 11,
                max: 12,
                encounterDef: [
                    {
                        rollDef: "2d4",
                        enemy: "blood-hawk"
                    }
                ]
            },
            {
                min: 13,
                max: 17,
                encounterDef: [
                    {
                        rollDef: "2d6",
                        enemy: "bandit"
                    }
                ]
            },
            {
                min: 18,
                max: 20,
                encounterDef: [
                    {
                        rollDef: "1d3",
                        enemy: "winged-kobold"
                    },
                    {
                        rollDef: "1d6",
                        enemy: "kobold"
                    }
                ]
            }, 
            {
                min: 21,
                max: 25,
                encounterDef: [
                    {
                        rollDef: "0",
                        enemy: "The partially eaten carcass of a mammoth, from which 1d4 weeks of rations can be harvested"
                    }
                ]
            },
            {
                min: 26,
                max: 29,
                encounterDef: [
                    {
                        rollDef: "2d8",
                        enemy: "hunters (tribal warriors)"
                    }
                ]
            },
            {
                min: 30,
                max: 35,
                encounterDef: [
                    {
                        rollDef: "1",
                        enemy: "half-ogre"
                    }
                ]
            },
            {
                min: 36,
                max: 40,
                encounterDef: [
                    {
                        rollDef: "0",
                        enemy: "Single-file tracks in the snow that stop abruptly"
                    }
                ]
            },
            {
                min: 41,
                max: 45,
                encounterDef: [
                    {
                        rollDef: "1d3",
                        enemy: "ice-mephit"
                    }
                ]
            },
            {
                min: 46,
                max: 50,
                encounterDef: [
                    {
                        rollDef: "1",
                        enemy: "brown-bear"
                    }
                ]
            },
            {
                min: 51,
                max: 53,
                encounterDef: [
                    {
                        rollDef: "1d6+1",
                        enemy: "orc"
                    }
                ]
            },
            {
                min: 54,
                max: 55,
                encounterDef: [
                    {
                        rollDef: "1",
                        enemy: "polar-bear"
                    }
                ]
            },
            {
                min: 56,
                max: 57,
                encounterDef: [
                    {
                        rollDef: "1d6",
                        enemy: "scout"
                    }
                ]
            },
            {
                min: 58,
                max: 60,
                encounterDef: [
                    {
                        rollDef: "1",
                        enemy: "saber-tooth-tiger"
                    }
                ]
            },
            {
                min: 61,
                max: 65,
                encounterDef: [
                    {
                        rollDef: "0",
                        enemy: "A frozen pond with a jagged hole in the ice that appears recently made"
                    }
                ]
            },
            {
                min: 66,
                max: 68,
                encounterDef: [
                    {
                        rollDef: "1",
                        enemy: "berserker"
                    }
                ]
            },
            {
                min: 69,
                max: 70,
                encounterDef: [
                    {
                        rollDef: "1",
                        enemy: "ogre"
                    }
                ]
            },
            {
                min: 71,
                max: 72,
                encounterDef: [
                    {
                        rollDef: "1",
                        enemy: "griffon"
                    }
                ]
            },
            {
                min: 73,
                max: 75,
                encounterDef: [
                    {
                        rollDef: "1",
                        enemy: "druid"
                    }
                ]
            },
            {
                min: 76,
                max: 80,
                encounterDef: [
                    {
                        rollDef: "3d4",
                        enemy: "refugees (commoners) fleeing from orcs"
                    }
                ]
            },
            {
                min: 81,
                max: 81,
                encounterDef: [
                    {
                        rollDef: "1d3",
                        enemy: "veteran"
                    }
                ]
            },
            {
                min: 82,
                max: 82,
                encounterDef: [
                    {
                        rollDef: "1d4",
                        enemy: "orog"
                    }
                ]
            },
            {
                min: 83,
                max: 83,
                encounterDef: [
                    {
                        rollDef: "2",
                        enemy: "brown-bear"
                    }
                ]
            },
            {
                min: 84,
                max: 84,
                encounterDef: [
                    {
                        rollDef: "1",
                        enemy: "orc-eye-of-gruumsh"
                    },
                    {
                        rollDef: "2d8",
                        enemy: "orc"
                    }
                ]
            },
            {
                min: 85,
                max: 85,
                encounterDef: [
                    {
                        rollDef: "1d3",
                        enemy: "winter-wolf"
                    }
                ]
            },
            {
                min: 86,
                max: 87,
                encounterDef: [
                    {
                        rollDef: "1d4",
                        enemy: "yeti"
                    }
                ]
            },
            {
                min: 88,
                max: 88,
                encounterDef: [
                    {
                        rollDef: "1",
                        enemy: "half-ogre"
                    }
                ]
            },
            {
                min: 89,
                max: 89,
                encounterDef: [
                    {
                        rollDef: "1d3",
                        enemy: "manticore"
                    }
                ]
            },
            {
                min: 90,
                max: 90,
                encounterDef: [
                    {
                        rollDef: "1",
                        enemy: "bandit-captain"
                    },
                    {
                        rollDef: "2d6",
                        enemy: "bandit"
                    }
                ]
            },
            {
                min: 91,
                max: 91,
                encounterDef: [
                    {
                        rollDef: "1",
                        enemy: "revenant"
                    }
                ]
            },
            {
                min: 92,
                max: 93,
                encounterDef: [
                    {
                        rollDef: "1",
                        enemy: "troll"
                    }
                ]
            },
            {
                min: 94,
                max: 95,
                encounterDef: [
                    {
                        rollDef: "1",
                        enemy: "werebear"
                    }
                ]
            },
            {
                min: 96,
                max: 97,
                encounterDef: [
                    {
                        rollDef: "1",
                        enemy: "young-remorhaz"
                    }
                ]
            },
            {
                min: 98,
                max: 98,
                encounterDef: [
                    {
                        rollDef: "1",
                        enemy: "mammoth"
                    }
                ]
            },
            {
                min: 99,
                max: 99,
                encounterDef: [
                    {
                        rollDef: "1",
                        enemy: "young-white-dragon"
                    }
                ]
            },
            {
                min: 100,
                max: 100,
                encounterDef: [
                    {
                        rollDef: "1",
                        enemy: "frost-giant"
                    }
                ]
            },
        ]
    }
];
