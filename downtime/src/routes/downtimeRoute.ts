import express, { Request } from 'express';
import { Pieces } from '../Pieces';

const router = express.Router();
const carousingEndpoint = "carousing";
const carousingUrl = (request: Request) => `${request.baseUrl}/${carousingEndpoint}`
const buyMagicItemEndpoint = "buymagicitem";
const buyMagicItemUrl = (request: Request) => `${request.baseUrl}/${buyMagicItemEndpoint}`
router.get("/api/downtime", (request, response) => {
    const { baseUrl } = request;
    response.send([
        {
            "name": "carousing",
            "nav": {
                "type": "GET",
                "url": carousingUrl(request)
            }
        }, {
            "name": "buying-a-magic-item",
            "nav": {
                "type": "GET",
                "url": buyMagicItemUrl(request)

            }
        }
    ]);
});
router.get(`/api/downtime/${buyMagicItemEndpoint}`, (request, response) => {
    response.send({
        "time": "1 work week",
        "check": "persuasion",
        "attribute": "charisma",
        "maxBonus": 10,
        "bonuses": [
            {
                "type": "time",
                "cost": "1 work week",
                "bonus": 1
            },
            {
                "type": "money",
                "cost": new Pieces({ gold: 100 }).toDef(),
                "bonus": 1
            }
        ],
        "costs": new Pieces({ gold: 100 }).toDef(),
        "nav": {
            "type": "GET",
            "url": "/buymagicitem",
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "persuasionBonus": "number"
                        }
                    }
                }
            }
        }
    });
});
router.get(`/api/downtime/${carousingEndpoint}`, (request, response) => {
    response.send({
        "carousing": {
            "time": "1 work week",
            "check": "persuasion",
            "attribute": "charisma",
            "types": {
                "lower": {
                    "amount": new Pieces({ gold: 10 }).toDef(),
                    "type": "lower-class",
                    "name": "Lower Class Carousing",
                    "description": "Lower-class contacts include criminals, laborers, mercenaries, the town guard, and any other folk that normally frequent the cheapest taverns in town.",
                    "nav": carousingNavDefinition(request, "lower")
                },
                "middle": {
                    "time": "1 work week",
                    "check": "persuasion",
                    "attribute": "charisma",
                    "amount": new Pieces({ gold: 50 }).toDef(),
                    "type": "middle-class",
                    "name": "Middle Class Carousing",
                    "description": "Middle-class contacts include guild members, spell-casters, town officials, and other folk who frequent well-kept establishments.",
                    "nav": carousingNavDefinition(request, "middle")
                },
                "upper": {
                    "amount": new Pieces({ gold: 250 }).toDef(),
                    "type": "upper-class",
                    "name": "Upper Class Carousing",
                    "description": "Upper-class contacts are nobles and their personal servants. Carousing with such folk covers formal banquets, state dinners, and the like.",
                    "nav": carousingNavDefinition(request, "upper")
                }
            }
        }
    });
});
const carousingNavDefinition = (request: Request, level: string) => {
    return {
        "type": "POST",
        "url": `${carousingUrl(request)}/${level}`,
        "requestBody": {
            "required": true,
            "content": {
                "application/json": {
                    "schema": {
                        "persuasionBonus": "number"
                    }
                }
            }
        }
    };
}
export { router as downtimeRouter };