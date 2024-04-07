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
    "GAMMA": 2,
    "DELTA": 3,
    "EPSILON": 4,
    "ZETA": 5,
    "ETA": 6,
    "THETA": 7,
    "IOTA": 8,
    "KAPPA": 9,
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
    {
        "name": "Silence",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": true,
        "ability": "Imperial Salvage Yard - You may exhaust this card at the end of your turn to place 1 cruiser from your reinforcements in any system that contains 1 or more of your ships.",
        "resources": 2,
        "influence": 2,
    },
    {
        "name": "Echo",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": true,
        "ability": "Bi-Phasic Generators - You may exhaust this card at the end of your turn to place 1 frontier token in a system that does not contain a planet.",
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Tarock",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": true,
        "ability": "Council Black Site - You may exhaust this card when an agenda is revealed to predict aloud an outcome of that agenda. If your prediction is correct, draw 1 secret objective.",
        "resources": 3,
        "influence": 0,
    },
    {
        "name": "Prism",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": true,
        "ability": "Mystic Library - ACTION: Exhaust this card to replace 1 of your non-faction non-unit upgrade technologies with another technology from your technology deck with the same number of prerequisites.",
        "resources": 0,
        "influence": 3,
    },
    {
        "name": "Troac",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 4,
    },
    {
        "name": "Etir V",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 4,
        "influence": 0,
    },
    {
        "name": "Vioss",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 3,
    },
    {
        "name": "Fakrenn",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 2,
    },
    {
        "name": "San-Vit",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 1,
    },
    {
        "name": "Lodran",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.CYBERNETIC,
		"legendary": false,
        "resources": 0,
        "influence": 2,
    },
    {
        "name": "Dorvok",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.WARFARE,
		"legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Derbrae",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 3,
    },
    {
        "name": "Moln",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.PROPULSION,
		"legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Rysaa",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.BIOTIC,
		"legendary": false,
        "resources": 2,
        "influence": 0,
    },
    {
        "name": "Salin",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Gwiyun",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 2,
    },
    {
        "name": "Inan",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Swog",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 0,
    },
    {
        "name": "Detic",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 2,
    },
    {
        "name": "Lliot",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 1,
    },
    {
        "name": "Qaak",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Larred",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Nairb",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Sierpen",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 0,
    },
    {
        "name": "Mandle",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Regnem",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 2,
    },
    {
        "name": "Qaak",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Larred",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Domna",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": true,
        "ability": "Fractal Gate - You may exhaust this card at the end of your turn to remove 1 of your ships from the game board and place that unit in an adjacent system that does not contain another player’s ships.",
        "resources": 2,
        "influence": 1,
    },

    {
        "name": "Grywon",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 2,
    },
    {
        "name": "Breakpoint",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 3,
    },
    {
        "name": "Heska",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.CYBERNETIC,
		"legendary": false,
        "resources": 2,
        "influence": 0,
    },
    {
        "name": "Hevahold",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 0,
    },
    {
        "name": "Brilenci",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.CYBERNETIC,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Iynntani",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 3,
    },
    {
        "name": "Mornn",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 3,
    },
    {
        "name": "Phylo",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 2,
    },
    {
        "name": "Ultimur",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 0,
    },
    {
        "name": "Aranndan",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 3,
    },
    {
        "name": "Maon-Lor",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.BIOTIC,
		"legendary": false,
        "resources": 3,
        "influence": 2,
    },
    {
        "name": "Adoriah",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Rial Archon",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.PROPULSION,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Eshonia",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Hell's Maw",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 0,
    },
    {
        "name": "Death's Gate",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 1,
    },
    {
        "name": "Su'Prima",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 2,
    },
    {
        "name": "Su'Prima",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Solin Uo",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 3,
    },
    {
        "name": "Khjan",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Shul",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.PROPULSION,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Rayon V",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 2,
    },
    {
        "name": "Ulon Gamma",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 1,
    },
    {
        "name": "Ulon Rho",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Elok Phi",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 1,
    },
    {
        "name": "Elok Nu",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Elok Nu",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Erodius",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Il Voshu",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.BIOTIC,
		"legendary": false,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Xyon",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Ynnis",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 3,
    },
    {
        "name": "Zhgen",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 2,
    },
    {
        "name": "Sehnn",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Myrwater",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.BIOTIC,
		"legendary": false,
        "resources": 1,
        "influence": 3,
    },
    {
        "name": "Adrian",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 0,
    },
    {
        "name": "Telahas",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 0,
    },
    {
        "name": "Ikrus III",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 2,
    },
    {
        "name": "Meko II",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.PROPULSION,
		"legendary": false,
        "resources": 0,
        "influence": 2,
    },
    {
        "name": "Tethn'Sekus",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Tethn'Tirs",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 2,
    },
    {
        "name": "Dwuiit",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Uhott",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 3,
    },
    {
        "name": "Akhassi",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.WARFARE,
		"legendary": false,
        "resources": 0,
        "influence": 2,
    },
    {
        "name": "Rhyah",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 0,
    },
    {
        "name": "Taal'Dorn",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.CYBERNETIC,
		"legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Volra",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 1,
    },
    {
        "name": "Taal'Dorn",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Orchard",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 3,
    },
    {
        "name": "Erissiha",
        "trait": PLANET_TRAITS.WARFARE,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Renhult",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Mayris",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 1,
    },
    {
        "name": "Quwon",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Kris",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 1,
    },
    {
        "name": "Shigonas",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 2,
    },
    {
        "name": "Ako.4.0.m",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": true,
        "ability": "Gravitational Gambit - At the end of your turn, you may exhaust this card to roll a die. On a result of 1-3 purge each attachment to this planet, and remove all units on this planet from the game board. Otherwise, attach an Improvement card to this planet. (Improvement - ATTACH: This planet's resource and influence values are each increased by 1.)",
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Kelgate",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": true,
        "ability": "Experimental Gate - At the start of your turn, you may exhaust this card to treat this system as if it had an alpha and beta wormhole until the end of this tactical action.",
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Kelgate",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": true,
        "ability": "Experimental Gate - At the start of your turn, you may exhaust this card to treat this system as if it had an alpha and beta wormhole until the end of this tactical action.",
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Casibann",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": true,
        "ability": "Sacrifice - When you exhaust Casibann to spend its resources or influence, you may exhaust this card to remove any number of infantry on that planet to spend them as resources or influence as well.",
        "resources": 0,
        "influence": 3,
    },
    {
        "name": "Station 309",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 2,
    },
    {
        "name": "Meranna",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 1,
    },
    {
        "name": "Hurigati",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.CYBERNETIC,
		"legendary": false,
        "resources": 0,
        "influence": 1,
    },
    {
        "name": "Ferrust",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 0,
    },
    {
        "name": "Argenum",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 3,
    },
    {
        "name": "Vernium",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 0,
    },
    {
        "name": "Elan's Rest",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Verdis",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 1,
    },
    {
        "name": "Char",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 0,
    },
    {
        "name": "Dognui",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 0,
    },
    {
        "name": "Fyrain",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 0,
    },
    {
        "name": "Leonelli",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.CYBERNETIC,
		"legendary": false,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Sigilus",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 4,
    },
    {
        "name": "Kytos",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Sigilus",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Mecantor",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Merjae",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.PROPULSION,
		"legendary": false,
        "resources": 2,
        "influence": 2,
    },
    {
        "name": "Mor Rock",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Migyro",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Nix",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 1,
    },
    {
        "name": "Nokturn",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.WARFARE,
		"legendary": false,
        "resources": 0,
        "influence": 2,
    },
    {
        "name": "Viliguard",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 0,
    },
    {
        "name": "Ryl Fang",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 0,
    },
    {
        "name": "Syvian",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.BIOTIC,
		"legendary": false,
        "resources": 0,
        "influence": 3,
    },
    {
        "name": "Norrk",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Perpetual",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 2,
    },
    {
        "name": "Thenphase",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.BIOTIC,
		"legendary": false,
        "resources": 2,
        "influence": 1,
    },
    {
        "name": "Vent",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.HAZARDOUS,
		"legendary": false,
        "resources": 2,
        "influence": 2,
    },
    {
        "name": "Vygar II",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 0,
    },
    {
        "name": "Yncranti",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Limbo",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": true,
        "ability": "Equilibrium - When a player would win a combat, you may exhaust this card to treat that combat as a draw instead",
        "resources": 0,
        "influence": 2,
    },
    {
        "name": "Lust",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": true,
        "ability": "Vigorous Winds - After you activate a system, you may exhaust this card to apply +1 to the movement value of up to 2 of your ships during this tactical action.",
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Cerberus",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": true,
        "ability": "Desperation - At the start of a ground combat on a planet you control, you may exhaust this card to choose 1 ground force in the active system; that ground force rolls 1 additional die during each round of that ground combat.",
        "resources": 3,
        "influence": 1,
    },
    {
        "name": "Plutus",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": true,
        "ability": "Curse of Wealth - At the start of the Strategy phase, you may exhaust this card and any number of planets you control to place a number of trade goods on this card equal to either the combined resource or influence value of those planets. When you ready this card, gain all trade goods on this card.",
        "resources": 1,
        "influence": 0,
    },
    {
        "name": "Stygain",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": true,
        "ability": "Undying Legions - After 1 of your infantry units is destroyed during combat, you may place that unit on this card. When you pass, you may exhaust this card to place each unit on this card on Stygain.",
        "resources": 3,
        "influence": 0,
    },
    {
        "name": "Hersey",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": true,
        "ability": "Betrayers' Dagger - Before a player casts votes, you may exhaust this card to choose a player; that player must give you 1 promissory note from their hand, or cast at least 1 vote for the outcome of your choice on that agenda.",
        "resources": 0,
        "influence": 5,
    },
    {
        "name": "Violence",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": true,
        "ability": "Violent Demise - At the end of a ground combat on a planet you control, you may exhaust this card to roll 3 dice. For each result of 6 or greater, destroy 1 ground force on that planet.",
        "resources": 3,
        "influence": 1,
    },
    {
        "name": "Malbolge",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": true,
        "ability": "Hand of Force - At the start of your turn, you may exhaust this card to choose 1 of your neighbors; that player must give you 1 promissory note or 1 action card from their hand, if able.",
        "resources": 1,
        "influence": 3,
    },
    {
        "name": "Cantris",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": true,
        "ability": "The Starlight Throne - When you gain this card, gain 1 victory point; when you lose this card, lose 1 victory point. You score last during the status phase.",
        "resources": 4,
        "influence": 4,
    },
    {
        "name": "Cahgaris",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 3,
    },
    {
        "name": "Sentuim",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Volgan",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 2,
    },
    {
        "name": "Hr'an Cus",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 1,
    },
    {
        "name": "Kan'His",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 0,
        "influence": 3,
    },
    {
        "name": "Vylanua",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.WARFARE,
		"legendary": false,
        "resources": 0,
        "influence": 2,
    },
    {
        "name": "Ghanis",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 0,
    },
    {
        "name": "Behjan",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.CYBERNETIC,
		"legendary": false,
        "resources": 1,
        "influence": 2,
    },
    {
        "name": "Veyhrune",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.PROPULSION,
		"legendary": false,
        "resources": 2,
        "influence": 2,
    },
    {
        "name": "Sokaris",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 1,
        "influence": 3,
    },
    {
        "name": "Lunerus",
        "trait": PLANET_TRAITS.HAZARDOUS,
        "tech_specialty": TECH_SPECIALTIES.CYBERNETIC,
		"legendary": false,
        "resources": 2,
        "influence": 3,
    },
    {
        "name": "Grishinu",
        "trait": PLANET_TRAITS.CULTURAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 3,
        "influence": 2,
    },
    {
        "name": "Gryenorn",
        "trait": PLANET_TRAITS.INDUSTRIAL,
        "tech_specialty": TECH_SPECIALTIES.NONE,
		"legendary": false,
        "resources": 2,
        "influence": 3,
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
    {
        "id": 4253,
        "planets": ["Silence"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 4254,
        "planets": ["Echo"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 4255,
        "planets": ["Tarock"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 4256,
        "planets": ["Prism"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 4257,
        "planets": ["Troac"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 4258,
        "planets": ["Etir V"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 4259,
        "planets": ["Vioss"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 4260,
        "planets": ["Fakrenn"],
        "anomaly": [],
        "wormhole": [WORMHOLES.ALPHA]
    },
    {
        "id": 4261,
        "planets": ["San-Vit", "Lodran"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 4262,
        "planets": ["Dorvok", "Derbrae"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 4263,
        "planets": ["Moln", "Rysaa"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 4264,
        "planets": ["Salin", "Gwiyun"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 4265,
        "planets": ["Inan", "Swog"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 4266,
        "planets": ["Detic", "Lliot"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 4267,
        "planets": ["Qaak", "Larred", "Nairb"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 4268,
        "planets": ["Sierpen", "Mandle", "Regmen"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 4269,
        "planets": ["Domna"],
        "anomaly": [ANOMALIES.NEBULA],
        "wormhole": []
    },
    {
        "id": 4270,
        "planets": [],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 4271,
        "planets": [],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": 4272,
        "planets": [],
        "anomaly": [ANOMALIES.NEBULA],
        "wormhole": [WORMHOLES.BETA]
    },
    {
        "id": 4273,
        "planets": [],
        "anomaly": [ANOMALIES.ASTEROID_FIELD, ANOMALIES.NEBULA],
        "wormhole": []
    },
    {
        "id": 4274,
        "planets": [],
        "anomaly": [ANOMALIES.GRAVITY_RIFT, ANOMALIES.ASTEROID_FIELD],
        "wormhole": []
    },
    {
        "id": 4275,
        "planets": [],
        "anomaly": [ANOMALIES.GRAVITY_RIFT],
        "wormhole": [WORMHOLES.GAMMA]
    },
    {
        "id": 4276,
        "planets": [],
        "anomaly": [ANOMALIES.SUPERNOVA],
        "wormhole": [WORMHOLES.ALPHA, WORMHOLES.BETA]
    },

    // Eronous Tiles
    {
        "id": "er01",
        "planets": ["Rial Archon"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er02",
        "planets": ["Eshonia"],
        "anomaly": [ANOMALIES.NEBULA],
        "wormhole": []
    },
    {
        "id": "er03",
        "planets": ["Hell's Maw", "Death's Gate"],
        "anomaly": [ANOMALIES.GRAVITY_RIFT],
        "wormhole": [WORMHOLES.EPSILON]
    },
    {
        "id": "er04",
        "planets": ["Su'Prima"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er05",
        "planets": ["Kkita Ul'in"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er06",
        "planets": ["Selen Tu", "Solin Uo"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er07",
        "planets": ["Khjan", "Shul"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er08",
        "planets": ["Rayon V"],
        "anomaly": [],
        "wormhole": [WORMHOLES.EPSILON]
    },
    {
        "id": "er09",
        "planets": ["Ulon Gamma", "Ulon Rho"],
        "anomaly": [ANOMALIES.ASTEROID_FIELD],
        "wormhole": []
    },
    {
        "id": "er10",
        "planets": ["Elok Phi", "Elok Nu"],
        "anomaly": [ANOMALIES.NEBULA],
        "wormhole": []
    },
    {
        "id": "er11",
        "planets": [],
        "anomaly": [ANOMALIES.ASTEROID_FIELD],
        "wormhole": [WORMHOLES.BETA]
    },
    {
        "id": "er12",
        "planets": [],
        "anomaly": [ANOMALIES.ASTEROID_FIELD],
        "wormhole": [WORMHOLES.IOTA]
    },
    {
        "id": "er13",
        "planets": [],
        "anomaly": [],
        "wormhole": [WORMHOLES.IOTA]
    },
    {
        "id": "er14",
        "planets": [],
        "anomaly": [ANOMALIES.GRAVITY_RIFT],
        "wormhole": [WORMHOLES.IOTA]
    },
    {
        "id": "er15",
        "planets": [],
        "anomaly": [ANOMALIES.NEBULA],
        "wormhole": [WORMHOLES.IOTA]
    },
    {
        "id": "er16",
        "planets": [],
        "anomaly": [ANOMALIES.SUPERNOVA],
        "wormhole": []
    },
    {
        "id": "er17",
        "planets": [],
        "anomaly": [ANOMALIES.GRAVITY_RIFT, ANOMALIES.ASTEROID_FIELD],
        "wormhole": []
    },
    {
        "id": "er18",
        "planets": [],
        "anomaly": [ANOMALIES.NEBULA, ANOMALIES.ASTEROID_FIELD],
        "wormhole": []
    },
    {
        "id": "er19",
        "planets": [],
        "anomaly": [ANOMALIES.GRAVITY_RIFT],
        "wormhole": [WORMHOLES.ALPHA, WORMHOLES.BETA]
    },
    {
        "id": "er20",
        "planets": ["Erodius"],
        "anomaly": [],
        "wormhole": [WORMHOLES.EPSILON]
    },
    {
        "id": "er21",
        "planets": [],
        "anomaly": [ANOMALIES.NEBULA, ANOMALIES.ASTEROID_FIELD, ANOMALIES.GRAVITY_RIFT, ANOMALIES.SUPERNOVA],
        "wormhole": []
    },
    {
        "id": "er22",
        "planets": ["Il Voshu"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er23",
        "planets": ["Xyon"],
        "anomaly": [ANOMALIES.GRAVITY_RIFT],
        "wormhole": []
    },
    {
        "id": "er24",
        "planets": ["Ynnis"],
        "anomaly": [ANOMALIES.GRAVITY_RIFT],
        "wormhole": []
    },
    {
        "id": "er25",
        "planets": [],
        "anomaly": [],
        "wormhole": [WORMHOLES.EPSILON]
    },
    {
        "id": "er26",
        "planets": [],
        "anomaly": [ANOMALIES.GRAVITY_RIFT],
        "wormhole": [WORMHOLES.EPSILON]
    },
    {
        "id": "er27",
        "planets": [],
        "anomaly": [ANOMALIES.NEBULA],
        "wormhole": [WORMHOLES.EPSILON]
    },
    {
        "id": "er28",
        "planets": [],
        "anomaly": [ANOMALIES.ASTEROID_FIELD],
        "wormhole": [WORMHOLES.EPSILON]
    },
    {
        "id": "er29",
        "planets": [],
        "anomaly": [],
        "wormhole": [WORMHOLES.ZETA]
    },
    {
        "id": "er30",
        "planets": [],
        "anomaly": [ANOMALIES.GRAVITY_RIFT],
        "wormhole": [WORMHOLES.ZETA]
    },
    {
        "id": "er31",
        "planets": [],
        "anomaly": [ANOMALIES.NEBULA],
        "wormhole": [WORMHOLES.ZETA]
    },
    {
        "id": "er32",
        "planets": [],
        "anomaly": [ANOMALIES.ASTEROID_FIELD],
        "wormhole": [WORMHOLES.ZETA]
    },
    {
        "id": "er33",
        "planets": [],
        "anomaly": [],
        "wormhole": [WORMHOLES.EPSILON, WORMHOLES.ZETA]
    },
    {
        "id": "er34",
        "planets": [],
        "anomaly": [],
        "wormhole": [WORMHOLES.ETA]
    },
    {
        "id": "er35",
        "planets": [],
        "anomaly": [ANOMALIES.GRAVITY_RIFT],
        "wormhole": [WORMHOLES.ETA]
    },
    {
        "id": "er36",
        "planets": [],
        "anomaly": [ANOMALIES.NEBULA],
        "wormhole": [WORMHOLES.ETA]
    },
    {
        "id": "er37",
        "planets": [],
        "anomaly": [ANOMALIES.ASTEROID_FIELD],
        "wormhole": [WORMHOLES.ETA]
    },
    {
        "id": "er38",
        "planets": [],
        "anomaly": [],
        "wormhole": [WORMHOLES.THETA]
    },
    {
        "id": "er39",
        "planets": [],
        "anomaly": [ANOMALIES.GRAVITY_RIFT],
        "wormhole": [WORMHOLES.THETA]
    },
    {
        "id": "er40",
        "planets": [],
        "anomaly": [ANOMALIES.NEBULA],
        "wormhole": [WORMHOLES.THETA]
    },
    {
        "id": "er41",
        "planets": [],
        "anomaly": [ANOMALIES.ASTEROID_FIELD],
        "wormhole": [WORMHOLES.THETA]
    },
    {
        "id": "er42",
        "planets": [],
        "anomaly": [],
        "wormhole": [WORMHOLES.ETA, WORMHOLES.THETA]
    },
    {
        "id": "er43",
        "planets": [],
        "anomaly": [],
        "wormhole": [WORMHOLES.KAPPA]
    },
    {
        "id": "er44",
        "planets": [],
        "anomaly": [ANOMALIES.GRAVITY_RIFT],
        "wormhole": [WORMHOLES.KAPPA]
    },
    {
        "id": "er45",
        "planets": [],
        "anomaly": [ANOMALIES.NEBULA],
        "wormhole": [WORMHOLES.KAPPA]
    },
    {
        "id": "er46",
        "planets": [],
        "anomaly": [ANOMALIES.ASTEROID_FIELD],
        "wormhole": [WORMHOLES.KAPPA]
    },
    {
        "id": "er47",
        "planets": [],
        "anomaly": [],
        "wormhole": [WORMHOLES.IOTA, WORMHOLES.KAPPA]
    },
    {
        "id": "er48",
        "planets": ["Zhgen", "Sehnn"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er49",
        "planets": ["Myrwater"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er50",
        "planets": ["Adrian", "Telahas"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er51",
        "planets": ["Grywon"],
        "anomaly": [],
        "wormhole": [WORMHOLES.THETA]
    },
    {
        "id": "er52",
        "planets": ["Ikrus III", "Tir"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er53",
        "planets": ["Meko II"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er54",
        "planets": ["Tethn'Sekus", "Tethn'Tris"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er55",
        "planets": ["Dwuuit", "Uhoot"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er56",
        "planets": ["Breakpoint"],
        "anomaly": [],
        "wormhole": [WORMHOLES.THETA]
    },
    {
        "id": "er57",
        "planets": ["Akhassi"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er58",
        "planets": ["Rhyah", "Taal'Dorn"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er59",
        "planets": ["Volra", "Venhalo"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er60",
        "planets": ["Orchard"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er61",
        "planets": ["Erissiha", "Renhult"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er62",
        "planets": ["Heska"],
        "anomaly": [],
        "wormhole": [WORMHOLES.IOTA]
    },
    {
        "id": "er63",
        "planets": ["Mayris", "Quwon"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er64",
        "planets": ["Grywon"],
        "anomaly": [],
        "wormhole": [WORMHOLES.ETA]
    },
    {
        "id": "er65",
        "planets": ["Kris", "Shigonas"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er66",
        "planets": [],
        "anomaly": [ANOMALIES.GRAVITY_RIFT],
        "wormhole": []
    },
    {
        "id": "er67",
        "planets": [],
        "anomaly": [ANOMALIES.NEBULA],
        "wormhole": []
    },
    {
        "id": "er68",
        "planets": [],
        "anomaly": [ANOMALIES.SUPERNOVA],
        "wormhole": []
    },
    {
        "id": "er69",
        "planets": [],
        "anomaly": [ANOMALIES.GRAVITY_RIFT],
        "wormhole": []
    },
    {
        "id": "er70",
        "planets": [],
        "anomaly": [ANOMALIES.NEBULA],
        "wormhole": []
    },
    {
        "id": "er71",
        "planets": [],
        "anomaly": [ANOMALIES.ASTEROID_FIELD],
        "wormhole": []
    },
    {
        "id": "er72",
        "planets": [],
        "anomaly": [ANOMALIES.ASTEROID_FIELD],
        "wormhole": []
    },
    {
        "id": "er75",
        "planets": [],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er76",
        "planets": [],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er77",
        "planets": [],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er78",
        "planets": [],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er79",
        "planets": [],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er80",
        "planets": [],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er81",
        "planets": [],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er82",
        "planets": ["Ako.4.0.m"],
        "anomaly": [ANOMALIES.GRAVITY_RIFT],
        "wormhole": []
    },
    {
        "id": "er83",
        "planets": ["Kelgate"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er84",
        "planets": ["Casibann"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er85",
        "planets": ["Station 309"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er86",
        "planets": ["Meranna", "Hurigati", "Ferrust"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er87",
        "planets": ["Argenum", "Vernium"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er88",
        "planets": ["Elan's Rest", "Verdis"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er89",
        "planets": ["Brilenci"],
        "anomaly": [],
        "wormhole": [WORMHOLES.EPSILON]
    },
    {
        "id": "er90",
        "planets": ["Char"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er91",
        "planets": ["Dognui"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er92",
        "planets": ["Fyrain", "Leonelli"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er93",
        "planets": ["Sigilus"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er94",
        "planets": ["Iynntani"],
        "anomaly": [],
        "wormhole": [WORMHOLES.BETA]
    },
    {
        "id": "er95",
        "planets": ["Kytos", "Prymis"],
        "anomaly": [],
        "wormhole": [WORMHOLES.ALPHA, WORMHOLES.BETA]
    },
    {
        "id": "er96",
        "planets": ["Mecantor"],
        "anomaly": [ANOMALIES.GRAVITY_RIFT],
        "wormhole": []
    },
    {
        "id": "er97",
        "planets": ["Merjae"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er98",
        "planets": ["Mor Rock", "Migyro"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er99",
        "planets": ["Mornn"],
        "anomaly": [ANOMALIES.NEBULA],
        "wormhole": [WORMHOLES.EPSILON]
    },
    {
        "id": "er100",
        "planets": ["Nix", "Nokturn", "Viliguard"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er101",
        "planets": ["Ryl Fang", "Syvian"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er102",
        "planets": ["Norrk"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er103",
        "planets": ["Perpetual"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er104",
        "planets": ["Thenphase"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er105",
        "planets": ["Vent"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er106",
        "planets": ["Vygar II", "Yncranti"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er107",
        "planets": ["Limbo"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er108",
        "planets": ["Lust"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er109",
        "planets": ["Cerberus"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er110",
        "planets": ["Plutus"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er111",
        "planets": ["Stygain"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er112",
        "planets": ["Hersey"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er113",
        "planets": ["Violence"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er114",
        "planets": ["Malbolge"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er115",
        "planets": ["Malbolge"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er116",
        "planets": ["Phylo"],
        "anomaly": [],
        "wormhole": [WORMHOLES.IOTA]
    },
    {
        "id": "er117",
        "planets": ["Cahgaris"],
        "anomaly": [],
        "wormhole": [WORMHOLES.KAPPA]
    },
    {
        "id": "er118",
        "planets": ["Ultimur"],
        "anomaly": [],
        "wormhole": [WORMHOLES.KAPPA]
    },
    {
        "id": "er119",
        "planets": [],
        "anomaly": [ANOMALIES.NEBULA],
        "wormhole": [WORMHOLES.ALPHA, WORMHOLES.BETA]
    },
    {
        "id": "er120",
        "planets": ["Sentuim", "Volgan"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er121",
        "planets": ["Aranndan"],
        "anomaly": [],
        "wormhole": [WORMHOLES.ZETA]
    },
    {
        "id": "er122",
        "planets": ["Hr'an Cus", "Kan'His"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er123",
        "planets": ["Vylanua"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er124",
        "planets": ["Ghanis", "Behjan"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er125",
        "planets": ["Veyhrune"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er126",
        "planets": ["Sokaris", "Lunerus"],
        "anomaly": [],
        "wormhole": []
    },
    {
        "id": "er127",
        "planets": ["Maon-Lor"],
        "anomaly": [],
        "wormhole": [WORMHOLES.ZETA]
    },
    {
        "id": "er128",
        "planets": ["Adoriah"],
        "anomaly": [],
        "wormhole": [WORMHOLES.ETA]
    },
    {
        "id": "er129",
        "planets": ["Grishinu", "Gryenorn"],
        "anomaly": [],
        "wormhole": []
    },


];
