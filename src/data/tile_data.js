export const PLANET_TRAITS = {
    "HAZARDOUS": 0,
    "INDUSTRIAL": 1,
    "CULTURAL": 2,
    "NONE": null
};

export const TECH_SPECIALTIES = {
    "BIOTIC": 0,
    "WARFARE": 1,
    "PROPULSION": 2,
    "CYBERNETIC": 3,
"NONE": null
};

export const ANOMALIES = {
    "NEBULA": 0,
    "GRAVITY_RIFT": 1,
    "ASTEROID_FIELD": 2,
    "SUPERNOVA": 3,
};

export const WORMHOLES = {
    "ALPHA": 0,
    "BETA": 1,
    "DELTA": 2,
};

export let planet_data = [
    {
        "name": "Mecatol Rex",
        "trait": PLANET_TRAITS.NONE,
        "tech_specialty": TECH_SPECIALTIES.NONE,
        "legendary": false,
        "resources": 1,
        "influence": 6,
    },
    {
        "name": "Abyz",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
        "legendary": false,
        "resources": 3,
        "influence": 0,
    },
    {
        "name": "Fria",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
        "legendary": false,
        "resources": 2,
        "influence": 0,
    },
    {
        "name": "Arinam",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
        "legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Meer",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.WARFARE,
        "legendary": false,
        "resources": 0,
        "influence": 4,
    },
    {
        "name": "Arnor",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
        "legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Lor",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Bereg",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 1,
    },
    {
        "name": "Lirta IV",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 3,
    },
    {
        "name": "Centauri",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 3,
    },
    {
        "name": "Gral",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.PROPULSION,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Corneeq",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Resculon",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 0,
    },
    {
        "name": "Dal Bootha",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 2,
    },
    {
        "name": "Xxehan",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Lazar",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.CYBERNETIC,
		"legendary": false,
        "resources": 1,
        "influence": 0,
    },
    {
        "name": "Sakulag",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Lodor",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 1,
    },
    {
        "name": "Mehar Xull",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.WARFARE,
		"legendary": false,
        "resources": 1,
        "influence": 3,
    },
    {
        "name": "Mellon",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 2,
    },
    {
        "name": "Zohbat",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 1,
    },
    {
        "name": "New Albion",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.BIOTIC,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Starpoint",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 1,
    },
    {
        "name": "Quann",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Qucen'n",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Rarron",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 3,
    },
    {
        "name": "Saudor",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 2,
    },
    {
        "name": "Tar'Mann",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.BIOTIC,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Tequ'ran",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 0,
    },
    {
        "name": "Torkan",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 3,
    },
    {
        "name": "Thibah",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.PROPULSION,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Vefut II",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 2,
    },
    {
        "name": "Wellon",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.CYBERNETIC,
		"legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Archon Vail",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.PROPULSION,
		"legendary": false,
        "resources": 1,
        "influence": 3,
    },
    {
        "name": "Perimeter",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Ang",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.WARFARE,
		"legendary": false,
        "resources": 2,
        "influence": 0,
    },
    {
        "name": "Sem-Lore",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.CYBERNETIC,
		"legendary": false,
        "resources": 3,
        "influence": 2,
    },
    {
        "name": "Vorhal",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.BIOTIC,
		"legendary": false,
        "resources": 0,
        "influence": 2,
    },
    {
        "name": "Atlas",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 1,
    },
    {
        "name": "Primor",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": true,
        "ability": "The Atrament - You may exhaust this card at the end of your turn to place up to 2 infantry from your reinforcements on any planet you control.",
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Hope's End",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": true,
        "ability": "Imperial Arms Vault - You may exhaust this card at the end of your turn to place 1 mech from your reinforcements on any planet you control, or draw 1 action card.",
        "resources": 3,
        "influence": 0,
    },
    {
        "name": "Cormund",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 0,
    },
    {
        "name": "Everra",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 1,
    },
    {
        "name": "Accoen",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 3,
    },
    {
        "name": "Joel Ir",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 3,
    },
    {
        "name": "Kraag",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Siig",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 2,
    },
    {
        "name": "Alio Prima",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Ba'kal",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 2,
    },
    {
        "name": "Lisis",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 2,
    },
    {
        "name": "Velnor",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.WARFARE,
		"legendary": false,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Cealdri",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.CYBERNETIC,
		"legendary": false,
        "resources": 0,
        "influence": 2,
    },
    {
        "name": "Xanhact",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 1,
    },
    {
        "name": "Vega Major",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Vega Minor",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.PROPULSION,
		"legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Abaddon",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 0,
    },
    {
        "name": "Ashtroth",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 0,
    },
    {
        "name": "Loki",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Rigel I",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 1,
    },
    {
        "name": "Rigel II",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Rigel III",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.BIOTIC,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },


];

export let system_data = [
    {
        "id": 18,
        "planets": ["Mecatol Rex"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 39,
        "planets": [],
        "anomaly": [],
        "wormhole": [WORMHOLES.ALPHA]
    },
    {
        "id": 43,
        "planets": [],
        "anomaly": [ANOMALIES.SUPERNOVA],
        "wormhole": []
    },
    {
        "id": 46,
        "planets": [],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 49,
        "planets": [],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 44,
        "planets": [],
        "anomaly": [ANOMALIES.ASTEROID_FIELD],
        "wormhole": []
    },
    {
        "id": 40,
        "planets": [],
        "anomaly": [],
        "wormhole": [WORMHOLES.BETA]
    },
    {
        "id": 48,
        "planets": [],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 45,
        "planets": [],
        "anomaly": [ANOMALIES.ASTEROID_FIELD],
        "wormhole": []
    },
    {
        "id": 47,
        "planets": [],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 42,
        "planets": [],
        "anomaly": [ANOMALIES.NEBULA],
        "wormhole": []
    },
    {
        "id": 50,
        "planets": [],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 41,
        "planets": [],
        "anomaly": [ANOMALIES.GRAVITY_RIFT],
        "wormhole": []
    },
    {
        "id": 32,
        "planets": ["Dal Bootha", "Xxehan"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 26,
        "planets": ["Lodor"],
        "anomaly": [],
        "wormhole": [WORMHOLES.ALPHA]
    },
    {
        "id": 29,
        "planets": ["Qucen'n", "Rarron"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 38,
        "planets": ["Abyz", "Fria"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 22,
        "planets": ["Tar'Mann"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 21,
        "planets": ["Thibah"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 33,
        "planets": ["Corneeq", "Resculon"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 19,
        "planets": ["Wellon"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 28,
        "planets": ["Tequ'ran", "Torkan"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 24,
        "planets": ["Mehar Xull"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 37,
        "planets": ["Arinam", "Meer"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 30,
        "planets": ["Mellon", "Zohbat"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 20,
        "planets": ["Vefut II"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 27,
        "planets": ["New Albion", "Starpoint"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 23,
        "planets": ["Saudor"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 31,
        "planets": ["Lazar", "Sakulag"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 35,
        "planets": ["Bereg", "Lirta IV"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 34,
        "planets": ["Centauri", "Gral"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 36,
        "planets": ["Arnor", "Lor"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 25,
        "planets": ["Quann"],
        "anomaly": [],
        "wormhole": [WORMHOLES.BETA]
    },
    {
        "id": 59,
        "planets": ["Archon Vail"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 60,
        "planets": ["Perimeter"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 61,
        "planets": ["Ang"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 62,
        "planets": ["Sem-Lore"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 63,
        "planets": ["Vorhal"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 64,
        "planets": ["Atlas"],
        "anomaly": [],
        "wormhole": [WORMHOLES.BETA]
    },
    {
        "id": 65,
        "planets": ["Primor"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 66,
        "planets": ["Hope's End"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 67,
        "planets": ["Cormund"],
        "anomaly": [ANOMALIES.GRAVITY_RIFT],
        "wormhole": []
    },
    {
        "id": 68,
        "planets": ["Everra"],
        "anomaly": [ANOMALIES.NEBULA],
        "wormhole": []
    },
    {
        "id": 69,
        "planets": ["Accoen", "Joel Ir"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 70,
        "planets": ["Kraag", "Siig"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 71,
        "planets": ["Alio Prima", "Ba'kal"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 72,
        "planets": ["Lisis", "Velnor"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 73,
        "planets": ["Cealdri", "Xanhact"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 74,
        "planets": ["Vega Major", "Vega Minor"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 75,
        "planets": ["Abaddon", "Ashtroth", "Loki"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 76,
        "planets": ["Rigel I", "Rigel II", "Rigel III"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 77,
        "planets": [],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 78,
        "planets": [],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 79,
        "planets": [],
        "anomaly": [ANOMALIES.ASTEROID_FIELD],
        "wormhole": [WORMHOLES.ALPHA]
    },
    {
        "id": 80,
        "planets": [],
        "anomaly": [ANOMALIES.SUPERNOVA],
        "wormhole": []
    },


];
