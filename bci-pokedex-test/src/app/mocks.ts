import { HttpErrorResponse } from "@angular/common/http";

export const DATA_SIN_CONEXION = {
    "count": 1279,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=151&limit=151",
    "previous": null,
    "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon/3/"
        },
        {
            "name": "charmander",
            "url": "https://pokeapi.co/api/v2/pokemon/4/"
        },
        {
            "name": "charmeleon",
            "url": "https://pokeapi.co/api/v2/pokemon/5/"
        },
        {
            "name": "charizard",
            "url": "https://pokeapi.co/api/v2/pokemon/6/"
        },
        {
            "name": "squirtle",
            "url": "https://pokeapi.co/api/v2/pokemon/7/"
        },
        {
            "name": "wartortle",
            "url": "https://pokeapi.co/api/v2/pokemon/8/"
        },
        {
            "name": "blastoise",
            "url": "https://pokeapi.co/api/v2/pokemon/9/"
        },
        {
            "name": "caterpie",
            "url": "https://pokeapi.co/api/v2/pokemon/10/"
        },
        {
            "name": "metapod",
            "url": "https://pokeapi.co/api/v2/pokemon/11/"
        },
        {
            "name": "butterfree",
            "url": "https://pokeapi.co/api/v2/pokemon/12/"
        },
        {
            "name": "weedle",
            "url": "https://pokeapi.co/api/v2/pokemon/13/"
        },
        {
            "name": "kakuna",
            "url": "https://pokeapi.co/api/v2/pokemon/14/"
        },
        {
            "name": "beedrill",
            "url": "https://pokeapi.co/api/v2/pokemon/15/"
        },
        {
            "name": "pidgey",
            "url": "https://pokeapi.co/api/v2/pokemon/16/"
        },
        {
            "name": "pidgeotto",
            "url": "https://pokeapi.co/api/v2/pokemon/17/"
        },
        {
            "name": "pidgeot",
            "url": "https://pokeapi.co/api/v2/pokemon/18/"
        },
        {
            "name": "rattata",
            "url": "https://pokeapi.co/api/v2/pokemon/19/"
        },
        {
            "name": "raticate",
            "url": "https://pokeapi.co/api/v2/pokemon/20/"
        },
        {
            "name": "spearow",
            "url": "https://pokeapi.co/api/v2/pokemon/21/"
        },
        {
            "name": "fearow",
            "url": "https://pokeapi.co/api/v2/pokemon/22/"
        },
        {
            "name": "ekans",
            "url": "https://pokeapi.co/api/v2/pokemon/23/"
        },
        {
            "name": "arbok",
            "url": "https://pokeapi.co/api/v2/pokemon/24/"
        },
        {
            "name": "pikachu",
            "url": "https://pokeapi.co/api/v2/pokemon/25/"
        },
        {
            "name": "raichu",
            "url": "https://pokeapi.co/api/v2/pokemon/26/"
        },
        {
            "name": "sandshrew",
            "url": "https://pokeapi.co/api/v2/pokemon/27/"
        },
        {
            "name": "sandslash",
            "url": "https://pokeapi.co/api/v2/pokemon/28/"
        },
        {
            "name": "nidoran-f",
            "url": "https://pokeapi.co/api/v2/pokemon/29/"
        },
        {
            "name": "nidorina",
            "url": "https://pokeapi.co/api/v2/pokemon/30/"
        },
        {
            "name": "nidoqueen",
            "url": "https://pokeapi.co/api/v2/pokemon/31/"
        },
        {
            "name": "nidoran-m",
            "url": "https://pokeapi.co/api/v2/pokemon/32/"
        },
        {
            "name": "nidorino",
            "url": "https://pokeapi.co/api/v2/pokemon/33/"
        },
        {
            "name": "nidoking",
            "url": "https://pokeapi.co/api/v2/pokemon/34/"
        },
        {
            "name": "clefairy",
            "url": "https://pokeapi.co/api/v2/pokemon/35/"
        },
        {
            "name": "clefable",
            "url": "https://pokeapi.co/api/v2/pokemon/36/"
        },
        {
            "name": "vulpix",
            "url": "https://pokeapi.co/api/v2/pokemon/37/"
        },
        {
            "name": "ninetales",
            "url": "https://pokeapi.co/api/v2/pokemon/38/"
        },
        {
            "name": "jigglypuff",
            "url": "https://pokeapi.co/api/v2/pokemon/39/"
        },
        {
            "name": "wigglytuff",
            "url": "https://pokeapi.co/api/v2/pokemon/40/"
        },
        {
            "name": "zubat",
            "url": "https://pokeapi.co/api/v2/pokemon/41/"
        },
        {
            "name": "golbat",
            "url": "https://pokeapi.co/api/v2/pokemon/42/"
        },
        {
            "name": "oddish",
            "url": "https://pokeapi.co/api/v2/pokemon/43/"
        },
        {
            "name": "gloom",
            "url": "https://pokeapi.co/api/v2/pokemon/44/"
        },
        {
            "name": "vileplume",
            "url": "https://pokeapi.co/api/v2/pokemon/45/"
        },
        {
            "name": "paras",
            "url": "https://pokeapi.co/api/v2/pokemon/46/"
        },
        {
            "name": "parasect",
            "url": "https://pokeapi.co/api/v2/pokemon/47/"
        },
        {
            "name": "venonat",
            "url": "https://pokeapi.co/api/v2/pokemon/48/"
        },
        {
            "name": "venomoth",
            "url": "https://pokeapi.co/api/v2/pokemon/49/"
        },
        {
            "name": "diglett",
            "url": "https://pokeapi.co/api/v2/pokemon/50/"
        },
        {
            "name": "dugtrio",
            "url": "https://pokeapi.co/api/v2/pokemon/51/"
        },
        {
            "name": "meowth",
            "url": "https://pokeapi.co/api/v2/pokemon/52/"
        },
        {
            "name": "persian",
            "url": "https://pokeapi.co/api/v2/pokemon/53/"
        },
        {
            "name": "psyduck",
            "url": "https://pokeapi.co/api/v2/pokemon/54/"
        },
        {
            "name": "golduck",
            "url": "https://pokeapi.co/api/v2/pokemon/55/"
        },
        {
            "name": "mankey",
            "url": "https://pokeapi.co/api/v2/pokemon/56/"
        },
        {
            "name": "primeape",
            "url": "https://pokeapi.co/api/v2/pokemon/57/"
        },
        {
            "name": "growlithe",
            "url": "https://pokeapi.co/api/v2/pokemon/58/"
        },
        {
            "name": "arcanine",
            "url": "https://pokeapi.co/api/v2/pokemon/59/"
        },
        {
            "name": "poliwag",
            "url": "https://pokeapi.co/api/v2/pokemon/60/"
        },
        {
            "name": "poliwhirl",
            "url": "https://pokeapi.co/api/v2/pokemon/61/"
        },
        {
            "name": "poliwrath",
            "url": "https://pokeapi.co/api/v2/pokemon/62/"
        },
        {
            "name": "abra",
            "url": "https://pokeapi.co/api/v2/pokemon/63/"
        },
        {
            "name": "kadabra",
            "url": "https://pokeapi.co/api/v2/pokemon/64/"
        },
        {
            "name": "alakazam",
            "url": "https://pokeapi.co/api/v2/pokemon/65/"
        },
        {
            "name": "machop",
            "url": "https://pokeapi.co/api/v2/pokemon/66/"
        },
        {
            "name": "machoke",
            "url": "https://pokeapi.co/api/v2/pokemon/67/"
        },
        {
            "name": "machamp",
            "url": "https://pokeapi.co/api/v2/pokemon/68/"
        },
        {
            "name": "bellsprout",
            "url": "https://pokeapi.co/api/v2/pokemon/69/"
        },
        {
            "name": "weepinbell",
            "url": "https://pokeapi.co/api/v2/pokemon/70/"
        },
        {
            "name": "victreebel",
            "url": "https://pokeapi.co/api/v2/pokemon/71/"
        },
        {
            "name": "tentacool",
            "url": "https://pokeapi.co/api/v2/pokemon/72/"
        },
        {
            "name": "tentacruel",
            "url": "https://pokeapi.co/api/v2/pokemon/73/"
        },
        {
            "name": "geodude",
            "url": "https://pokeapi.co/api/v2/pokemon/74/"
        },
        {
            "name": "graveler",
            "url": "https://pokeapi.co/api/v2/pokemon/75/"
        },
        {
            "name": "golem",
            "url": "https://pokeapi.co/api/v2/pokemon/76/"
        },
        {
            "name": "ponyta",
            "url": "https://pokeapi.co/api/v2/pokemon/77/"
        },
        {
            "name": "rapidash",
            "url": "https://pokeapi.co/api/v2/pokemon/78/"
        },
        {
            "name": "slowpoke",
            "url": "https://pokeapi.co/api/v2/pokemon/79/"
        },
        {
            "name": "slowbro",
            "url": "https://pokeapi.co/api/v2/pokemon/80/"
        },
        {
            "name": "magnemite",
            "url": "https://pokeapi.co/api/v2/pokemon/81/"
        },
        {
            "name": "magneton",
            "url": "https://pokeapi.co/api/v2/pokemon/82/"
        },
        {
            "name": "farfetchd",
            "url": "https://pokeapi.co/api/v2/pokemon/83/"
        },
        {
            "name": "doduo",
            "url": "https://pokeapi.co/api/v2/pokemon/84/"
        },
        {
            "name": "dodrio",
            "url": "https://pokeapi.co/api/v2/pokemon/85/"
        },
        {
            "name": "seel",
            "url": "https://pokeapi.co/api/v2/pokemon/86/"
        },
        {
            "name": "dewgong",
            "url": "https://pokeapi.co/api/v2/pokemon/87/"
        },
        {
            "name": "grimer",
            "url": "https://pokeapi.co/api/v2/pokemon/88/"
        },
        {
            "name": "muk",
            "url": "https://pokeapi.co/api/v2/pokemon/89/"
        },
        {
            "name": "shellder",
            "url": "https://pokeapi.co/api/v2/pokemon/90/"
        },
        {
            "name": "cloyster",
            "url": "https://pokeapi.co/api/v2/pokemon/91/"
        },
        {
            "name": "gastly",
            "url": "https://pokeapi.co/api/v2/pokemon/92/"
        },
        {
            "name": "haunter",
            "url": "https://pokeapi.co/api/v2/pokemon/93/"
        },
        {
            "name": "gengar",
            "url": "https://pokeapi.co/api/v2/pokemon/94/"
        },
        {
            "name": "onix",
            "url": "https://pokeapi.co/api/v2/pokemon/95/"
        },
        {
            "name": "drowzee",
            "url": "https://pokeapi.co/api/v2/pokemon/96/"
        },
        {
            "name": "hypno",
            "url": "https://pokeapi.co/api/v2/pokemon/97/"
        },
        {
            "name": "krabby",
            "url": "https://pokeapi.co/api/v2/pokemon/98/"
        },
        {
            "name": "kingler",
            "url": "https://pokeapi.co/api/v2/pokemon/99/"
        },
        {
            "name": "voltorb",
            "url": "https://pokeapi.co/api/v2/pokemon/100/"
        },
        {
            "name": "electrode",
            "url": "https://pokeapi.co/api/v2/pokemon/101/"
        },
        {
            "name": "exeggcute",
            "url": "https://pokeapi.co/api/v2/pokemon/102/"
        },
        {
            "name": "exeggutor",
            "url": "https://pokeapi.co/api/v2/pokemon/103/"
        },
        {
            "name": "cubone",
            "url": "https://pokeapi.co/api/v2/pokemon/104/"
        },
        {
            "name": "marowak",
            "url": "https://pokeapi.co/api/v2/pokemon/105/"
        },
        {
            "name": "hitmonlee",
            "url": "https://pokeapi.co/api/v2/pokemon/106/"
        },
        {
            "name": "hitmonchan",
            "url": "https://pokeapi.co/api/v2/pokemon/107/"
        },
        {
            "name": "lickitung",
            "url": "https://pokeapi.co/api/v2/pokemon/108/"
        },
        {
            "name": "koffing",
            "url": "https://pokeapi.co/api/v2/pokemon/109/"
        },
        {
            "name": "weezing",
            "url": "https://pokeapi.co/api/v2/pokemon/110/"
        },
        {
            "name": "rhyhorn",
            "url": "https://pokeapi.co/api/v2/pokemon/111/"
        },
        {
            "name": "rhydon",
            "url": "https://pokeapi.co/api/v2/pokemon/112/"
        },
        {
            "name": "chansey",
            "url": "https://pokeapi.co/api/v2/pokemon/113/"
        },
        {
            "name": "tangela",
            "url": "https://pokeapi.co/api/v2/pokemon/114/"
        },
        {
            "name": "kangaskhan",
            "url": "https://pokeapi.co/api/v2/pokemon/115/"
        },
        {
            "name": "horsea",
            "url": "https://pokeapi.co/api/v2/pokemon/116/"
        },
        {
            "name": "seadra",
            "url": "https://pokeapi.co/api/v2/pokemon/117/"
        },
        {
            "name": "goldeen",
            "url": "https://pokeapi.co/api/v2/pokemon/118/"
        },
        {
            "name": "seaking",
            "url": "https://pokeapi.co/api/v2/pokemon/119/"
        },
        {
            "name": "staryu",
            "url": "https://pokeapi.co/api/v2/pokemon/120/"
        },
        {
            "name": "starmie",
            "url": "https://pokeapi.co/api/v2/pokemon/121/"
        },
        {
            "name": "mr-mime",
            "url": "https://pokeapi.co/api/v2/pokemon/122/"
        },
        {
            "name": "scyther",
            "url": "https://pokeapi.co/api/v2/pokemon/123/"
        },
        {
            "name": "jynx",
            "url": "https://pokeapi.co/api/v2/pokemon/124/"
        },
        {
            "name": "electabuzz",
            "url": "https://pokeapi.co/api/v2/pokemon/125/"
        },
        {
            "name": "magmar",
            "url": "https://pokeapi.co/api/v2/pokemon/126/"
        },
        {
            "name": "pinsir",
            "url": "https://pokeapi.co/api/v2/pokemon/127/"
        },
        {
            "name": "tauros",
            "url": "https://pokeapi.co/api/v2/pokemon/128/"
        },
        {
            "name": "magikarp",
            "url": "https://pokeapi.co/api/v2/pokemon/129/"
        },
        {
            "name": "gyarados",
            "url": "https://pokeapi.co/api/v2/pokemon/130/"
        },
        {
            "name": "lapras",
            "url": "https://pokeapi.co/api/v2/pokemon/131/"
        },
        {
            "name": "ditto",
            "url": "https://pokeapi.co/api/v2/pokemon/132/"
        },
        {
            "name": "eevee",
            "url": "https://pokeapi.co/api/v2/pokemon/133/"
        },
        {
            "name": "vaporeon",
            "url": "https://pokeapi.co/api/v2/pokemon/134/"
        },
        {
            "name": "jolteon",
            "url": "https://pokeapi.co/api/v2/pokemon/135/"
        },
        {
            "name": "flareon",
            "url": "https://pokeapi.co/api/v2/pokemon/136/"
        },
        {
            "name": "porygon",
            "url": "https://pokeapi.co/api/v2/pokemon/137/"
        },
        {
            "name": "omanyte",
            "url": "https://pokeapi.co/api/v2/pokemon/138/"
        },
        {
            "name": "omastar",
            "url": "https://pokeapi.co/api/v2/pokemon/139/"
        },
        {
            "name": "kabuto",
            "url": "https://pokeapi.co/api/v2/pokemon/140/"
        },
        {
            "name": "kabutops",
            "url": "https://pokeapi.co/api/v2/pokemon/141/"
        },
        {
            "name": "aerodactyl",
            "url": "https://pokeapi.co/api/v2/pokemon/142/"
        },
        {
            "name": "snorlax",
            "url": "https://pokeapi.co/api/v2/pokemon/143/"
        },
        {
            "name": "articuno",
            "url": "https://pokeapi.co/api/v2/pokemon/144/"
        },
        {
            "name": "zapdos",
            "url": "https://pokeapi.co/api/v2/pokemon/145/"
        },
        {
            "name": "moltres",
            "url": "https://pokeapi.co/api/v2/pokemon/146/"
        },
        {
            "name": "dratini",
            "url": "https://pokeapi.co/api/v2/pokemon/147/"
        },
        {
            "name": "dragonair",
            "url": "https://pokeapi.co/api/v2/pokemon/148/"
        },
        {
            "name": "dragonite",
            "url": "https://pokeapi.co/api/v2/pokemon/149/"
        },
        {
            "name": "mewtwo",
            "url": "https://pokeapi.co/api/v2/pokemon/150/"
        },
        {
            "name": "mew",
            "url": "https://pokeapi.co/api/v2/pokemon/151/"
        }
    ]
};

export const MOCK_DETALLE_POKEMON = {
    "abilities": [
        {
            "ability": {
                "name": "overgrow",
                "url": "https://pokeapi.co/api/v2/ability/65/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "chlorophyll",
                "url": "https://pokeapi.co/api/v2/ability/34/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ],
    "base_experience": 263,
    "forms": [
        {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon-form/3/"
        }
    ],
    "game_indices": [
        {
            "game_index": 154,
            "version": {
                "name": "red",
                "url": "https://pokeapi.co/api/v2/version/1/"
            }
        },
        {
            "game_index": 154,
            "version": {
                "name": "blue",
                "url": "https://pokeapi.co/api/v2/version/2/"
            }
        },
        {
            "game_index": 154,
            "version": {
                "name": "yellow",
                "url": "https://pokeapi.co/api/v2/version/3/"
            }
        },
        {
            "game_index": 3,
            "version": {
                "name": "gold",
                "url": "https://pokeapi.co/api/v2/version/4/"
            }
        },
        {
            "game_index": 3,
            "version": {
                "name": "silver",
                "url": "https://pokeapi.co/api/v2/version/5/"
            }
        },
        {
            "game_index": 3,
            "version": {
                "name": "crystal",
                "url": "https://pokeapi.co/api/v2/version/6/"
            }
        },
        {
            "game_index": 3,
            "version": {
                "name": "ruby",
                "url": "https://pokeapi.co/api/v2/version/7/"
            }
        },
        {
            "game_index": 3,
            "version": {
                "name": "sapphire",
                "url": "https://pokeapi.co/api/v2/version/8/"
            }
        },
        {
            "game_index": 3,
            "version": {
                "name": "emerald",
                "url": "https://pokeapi.co/api/v2/version/9/"
            }
        },
        {
            "game_index": 3,
            "version": {
                "name": "firered",
                "url": "https://pokeapi.co/api/v2/version/10/"
            }
        },
        {
            "game_index": 3,
            "version": {
                "name": "leafgreen",
                "url": "https://pokeapi.co/api/v2/version/11/"
            }
        },
        {
            "game_index": 3,
            "version": {
                "name": "diamond",
                "url": "https://pokeapi.co/api/v2/version/12/"
            }
        },
        {
            "game_index": 3,
            "version": {
                "name": "pearl",
                "url": "https://pokeapi.co/api/v2/version/13/"
            }
        },
        {
            "game_index": 3,
            "version": {
                "name": "platinum",
                "url": "https://pokeapi.co/api/v2/version/14/"
            }
        },
        {
            "game_index": 3,
            "version": {
                "name": "heartgold",
                "url": "https://pokeapi.co/api/v2/version/15/"
            }
        },
        {
            "game_index": 3,
            "version": {
                "name": "soulsilver",
                "url": "https://pokeapi.co/api/v2/version/16/"
            }
        },
        {
            "game_index": 3,
            "version": {
                "name": "black",
                "url": "https://pokeapi.co/api/v2/version/17/"
            }
        },
        {
            "game_index": 3,
            "version": {
                "name": "white",
                "url": "https://pokeapi.co/api/v2/version/18/"
            }
        },
        {
            "game_index": 3,
            "version": {
                "name": "black-2",
                "url": "https://pokeapi.co/api/v2/version/21/"
            }
        },
        {
            "game_index": 3,
            "version": {
                "name": "white-2",
                "url": "https://pokeapi.co/api/v2/version/22/"
            }
        }
    ],
    "height": 20,
    "held_items": [],
    "id": 3,
    "is_default": true,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/3/encounters",
    "moves": [
        {
            "move": {
                "name": "swords-dance",
                "url": "https://pokeapi.co/api/v2/move/14/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "cut",
                "url": "https://pokeapi.co/api/v2/move/15/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "bind",
                "url": "https://pokeapi.co/api/v2/move/20/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "vine-whip",
                "url": "https://pokeapi.co/api/v2/move/22/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 9,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 9,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 9,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 9,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 9,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 9,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 9,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 9,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 9,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 5,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "headbutt",
                "url": "https://pokeapi.co/api/v2/move/29/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "tackle",
                "url": "https://pokeapi.co/api/v2/move/33/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "body-slam",
                "url": "https://pokeapi.co/api/v2/move/34/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "take-down",
                "url": "https://pokeapi.co/api/v2/move/36/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 22,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 25,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "double-edge",
                "url": "https://pokeapi.co/api/v2/move/38/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 31,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 31,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 31,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 31,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 31,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 31,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 31,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 31,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 31,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 58,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 51,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "growl",
                "url": "https://pokeapi.co/api/v2/move/45/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 4,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 4,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 4,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 4,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 4,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 3,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 3,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 3,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 3,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 4,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 4,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 3,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 3,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 3,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 3,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 3,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "roar",
                "url": "https://pokeapi.co/api/v2/move/46/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "hyper-beam",
                "url": "https://pokeapi.co/api/v2/move/63/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "strength",
                "url": "https://pokeapi.co/api/v2/move/70/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "mega-drain",
                "url": "https://pokeapi.co/api/v2/move/72/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "leech-seed",
                "url": "https://pokeapi.co/api/v2/move/73/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 9,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 9,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "growth",
                "url": "https://pokeapi.co/api/v2/move/74/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 43,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 43,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 41,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 41,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 41,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 41,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 41,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 28,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 28,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 28,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 28,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 41,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 41,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 28,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 28,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 28,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 28,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 28,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 44,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "razor-leaf",
                "url": "https://pokeapi.co/api/v2/move/75/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 30,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 30,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 22,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 22,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 22,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 22,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 22,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 22,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 22,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 31,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 12,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "solar-beam",
                "url": "https://pokeapi.co/api/v2/move/76/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 65,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 65,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 65,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 65,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 65,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 65,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 65,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 53,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 53,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 53,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 53,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 65,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 65,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 53,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 53,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 53,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 53,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 53,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 71,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 58,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "poison-powder",
                "url": "https://pokeapi.co/api/v2/move/77/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 22,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 22,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 14,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "sleep-powder",
                "url": "https://pokeapi.co/api/v2/move/79/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 55,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 55,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 14,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "petal-dance",
                "url": "https://pokeapi.co/api/v2/move/80/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 32,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 32,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 32,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 32,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 32,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 32,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 32,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "string-shot",
                "url": "https://pokeapi.co/api/v2/move/81/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "earthquake",
                "url": "https://pokeapi.co/api/v2/move/89/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "toxic",
                "url": "https://pokeapi.co/api/v2/move/92/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "rage",
                "url": "https://pokeapi.co/api/v2/move/99/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "mimic",
                "url": "https://pokeapi.co/api/v2/move/102/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "double-team",
                "url": "https://pokeapi.co/api/v2/move/104/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "defense-curl",
                "url": "https://pokeapi.co/api/v2/move/111/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "light-screen",
                "url": "https://pokeapi.co/api/v2/move/113/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "reflect",
                "url": "https://pokeapi.co/api/v2/move/115/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "bide",
                "url": "https://pokeapi.co/api/v2/move/117/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "amnesia",
                "url": "https://pokeapi.co/api/v2/move/133/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "flash",
                "url": "https://pokeapi.co/api/v2/move/148/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "rest",
                "url": "https://pokeapi.co/api/v2/move/156/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "substitute",
                "url": "https://pokeapi.co/api/v2/move/164/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "snore",
                "url": "https://pokeapi.co/api/v2/move/173/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "curse",
                "url": "https://pokeapi.co/api/v2/move/174/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "protect",
                "url": "https://pokeapi.co/api/v2/move/182/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "sludge-bomb",
                "url": "https://pokeapi.co/api/v2/move/188/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "mud-slap",
                "url": "https://pokeapi.co/api/v2/move/189/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "outrage",
                "url": "https://pokeapi.co/api/v2/move/200/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "giga-drain",
                "url": "https://pokeapi.co/api/v2/move/202/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "endure",
                "url": "https://pokeapi.co/api/v2/move/203/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "charm",
                "url": "https://pokeapi.co/api/v2/move/204/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "false-swipe",
                "url": "https://pokeapi.co/api/v2/move/206/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "swagger",
                "url": "https://pokeapi.co/api/v2/move/207/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "fury-cutter",
                "url": "https://pokeapi.co/api/v2/move/210/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "attract",
                "url": "https://pokeapi.co/api/v2/move/213/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "sleep-talk",
                "url": "https://pokeapi.co/api/v2/move/214/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "return",
                "url": "https://pokeapi.co/api/v2/move/216/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "frustration",
                "url": "https://pokeapi.co/api/v2/move/218/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "safeguard",
                "url": "https://pokeapi.co/api/v2/move/219/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "sweet-scent",
                "url": "https://pokeapi.co/api/v2/move/230/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 29,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 29,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 29,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 29,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 29,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 23,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 23,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 23,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 23,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 29,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 29,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 23,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 23,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 23,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 23,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 23,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 30,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "synthesis",
                "url": "https://pokeapi.co/api/v2/move/235/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 53,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 53,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 53,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 53,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 53,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 45,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 45,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 45,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 45,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 53,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 53,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 45,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 45,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 45,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 45,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 45,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 37,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "hidden-power",
                "url": "https://pokeapi.co/api/v2/move/237/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "sunny-day",
                "url": "https://pokeapi.co/api/v2/move/241/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "rock-smash",
                "url": "https://pokeapi.co/api/v2/move/249/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "facade",
                "url": "https://pokeapi.co/api/v2/move/263/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "nature-power",
                "url": "https://pokeapi.co/api/v2/move/267/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "helping-hand",
                "url": "https://pokeapi.co/api/v2/move/270/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "knock-off",
                "url": "https://pokeapi.co/api/v2/move/282/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "secret-power",
                "url": "https://pokeapi.co/api/v2/move/290/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "weather-ball",
                "url": "https://pokeapi.co/api/v2/move/311/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "bullet-seed",
                "url": "https://pokeapi.co/api/v2/move/331/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "block",
                "url": "https://pokeapi.co/api/v2/move/335/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "frenzy-plant",
                "url": "https://pokeapi.co/api/v2/move/338/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "magical-leaf",
                "url": "https://pokeapi.co/api/v2/move/345/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "natural-gift",
                "url": "https://pokeapi.co/api/v2/move/363/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "worry-seed",
                "url": "https://pokeapi.co/api/v2/move/388/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 44,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "seed-bomb",
                "url": "https://pokeapi.co/api/v2/move/402/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "energy-ball",
                "url": "https://pokeapi.co/api/v2/move/412/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "earth-power",
                "url": "https://pokeapi.co/api/v2/move/414/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "giga-impact",
                "url": "https://pokeapi.co/api/v2/move/416/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "rock-climb",
                "url": "https://pokeapi.co/api/v2/move/431/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "leaf-storm",
                "url": "https://pokeapi.co/api/v2/move/437/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "power-whip",
                "url": "https://pokeapi.co/api/v2/move/438/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "captivate",
                "url": "https://pokeapi.co/api/v2/move/445/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "grass-knot",
                "url": "https://pokeapi.co/api/v2/move/447/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "venoshock",
                "url": "https://pokeapi.co/api/v2/move/474/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "round",
                "url": "https://pokeapi.co/api/v2/move/496/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "echoed-voice",
                "url": "https://pokeapi.co/api/v2/move/497/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "grass-pledge",
                "url": "https://pokeapi.co/api/v2/move/520/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "bulldoze",
                "url": "https://pokeapi.co/api/v2/move/523/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "work-up",
                "url": "https://pokeapi.co/api/v2/move/526/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "petal-blizzard",
                "url": "https://pokeapi.co/api/v2/move/572/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 50,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 50,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 50,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 50,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "grassy-terrain",
                "url": "https://pokeapi.co/api/v2/move/580/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "confide",
                "url": "https://pokeapi.co/api/v2/move/590/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "stomping-tantrum",
                "url": "https://pokeapi.co/api/v2/move/707/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "grassy-glide",
                "url": "https://pokeapi.co/api/v2/move/803/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "terrain-pulse",
                "url": "https://pokeapi.co/api/v2/move/805/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokeapi.co/api/v2/version-group/20/"
                    }
                }
            ]
        }
    ],
    "name": "venusaur",
    "order": 3,
    "past_types": [],
    "species": {
        "name": "venusaur",
        "url": "https://pokeapi.co/api/v2/pokemon-species/3/"
    },
    "sprites": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
        "back_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/3.png",
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/3.png",
        "back_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/3.png",
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/3.png",
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png",
        "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/3.png",
        "other": {
            "dream_world": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
                "front_female": null
            },
            "home": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png",
                "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/female/3.png",
                "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/3.png",
                "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/female/3.png"
            },
            "official-artwork": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
                "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/3.png"
            }
        },
        "versions": {
            "generation-i": {
                "red-blue": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/3.png",
                    "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/3.png",
                    "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/3.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/3.png",
                    "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/3.png",
                    "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/3.png"
                },
                "yellow": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/3.png",
                    "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/3.png",
                    "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/3.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/3.png",
                    "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/3.png",
                    "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/3.png"
                }
            },
            "generation-ii": {
                "crystal": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/3.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/3.png",
                    "back_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/3.png",
                    "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/3.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/3.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/3.png",
                    "front_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/3.png",
                    "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/3.png"
                },
                "gold": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/3.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/3.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/3.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/3.png",
                    "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/3.png"
                },
                "silver": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/3.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/3.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/3.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/3.png",
                    "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/3.png"
                }
            },
            "generation-iii": {
                "emerald": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/3.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/3.png"
                },
                "firered-leafgreen": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/3.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/3.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/3.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/3.png"
                },
                "ruby-sapphire": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/3.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/3.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/3.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/3.png"
                }
            },
            "generation-iv": {
                "diamond-pearl": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/3.png",
                    "back_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/female/3.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/3.png",
                    "back_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/female/3.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/3.png",
                    "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/female/3.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/3.png",
                    "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/female/3.png"
                },
                "heartgold-soulsilver": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/3.png",
                    "back_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/female/3.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/3.png",
                    "back_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/female/3.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/3.png",
                    "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/female/3.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/3.png",
                    "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/female/3.png"
                },
                "platinum": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/3.png",
                    "back_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/female/3.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/3.png",
                    "back_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/female/3.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/3.png",
                    "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/female/3.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/3.png",
                    "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/female/3.png"
                }
            },
            "generation-v": {
                "black-white": {
                    "animated": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/3.gif",
                        "back_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/female/3.gif",
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/3.gif",
                        "back_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/female/3.gif",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif",
                        "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/female/3.gif",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/3.gif",
                        "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/3.gif"
                    },
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/3.png",
                    "back_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/female/3.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/3.png",
                    "back_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/female/3.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/3.png",
                    "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/female/3.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/3.png",
                    "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/female/3.png"
                }
            },
            "generation-vi": {
                "omegaruby-alphasapphire": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/3.png",
                    "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/female/3.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/3.png",
                    "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/female/3.png"
                },
                "x-y": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/3.png",
                    "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/3.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/3.png",
                    "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/female/3.png"
                }
            },
            "generation-vii": {
                "icons": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/3.png",
                    "front_female": null
                },
                "ultra-sun-ultra-moon": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/3.png",
                    "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/female/3.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/3.png",
                    "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/female/3.png"
                }
            },
            "generation-viii": {
                "icons": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/3.png",
                    "front_female": null
                }
            }
        }
    },
    "stats": [
        {
            "base_stat": 80,
            "effort": 0,
            "stat": {
                "name": "hp",
                "url": "https://pokeapi.co/api/v2/stat/1/"
            }
        },
        {
            "base_stat": 82,
            "effort": 0,
            "stat": {
                "name": "attack",
                "url": "https://pokeapi.co/api/v2/stat/2/"
            }
        },
        {
            "base_stat": 83,
            "effort": 0,
            "stat": {
                "name": "defense",
                "url": "https://pokeapi.co/api/v2/stat/3/"
            }
        },
        {
            "base_stat": 100,
            "effort": 2,
            "stat": {
                "name": "special-attack",
                "url": "https://pokeapi.co/api/v2/stat/4/"
            }
        },
        {
            "base_stat": 100,
            "effort": 1,
            "stat": {
                "name": "special-defense",
                "url": "https://pokeapi.co/api/v2/stat/5/"
            }
        },
        {
            "base_stat": 80,
            "effort": 0,
            "stat": {
                "name": "speed",
                "url": "https://pokeapi.co/api/v2/stat/6/"
            }
        }
    ],
    "types": [
        {
            "slot": 1,
            "type": {
                "name": "grass",
                "url": "https://pokeapi.co/api/v2/type/12/"
            }
        },
        {
            "slot": 2,
            "type": {
                "name": "poison",
                "url": "https://pokeapi.co/api/v2/type/4/"
            }
        }
    ],
    "weight": 1000
};
  
export const MOCK_OBTENER_DATA = {
    "id": 1,
    "descripcion": "probando"
};

export const ERROR_404 = new HttpErrorResponse({
    error: 'Not found',
    status: 404,
    statusText: 'Not found'
});

export const MOCK_LOCALIZACION_POKEMON = [
    {
        "location_area": {
            "name": "cerulean-city-area",
            "url": "https://pokeapi.co/api/v2/location-area/281/"
        },
        "version_details": [
            {
                "encounter_details": [
                    {
                        "chance": 100,
                        "condition_values": [],
                        "max_level": 10,
                        "method": {
                            "name": "gift",
                            "url": "https://pokeapi.co/api/v2/encounter-method/18/"
                        },
                        "min_level": 10
                    }
                ],
                "max_chance": 100,
                "version": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version/3/"
                }
            }
        ]
    },
    {
        "location_area": {
            "name": "pallet-town-area",
            "url": "https://pokeapi.co/api/v2/location-area/285/"
        },
        "version_details": [
            {
                "encounter_details": [
                    {
                        "chance": 100,
                        "condition_values": [],
                        "max_level": 5,
                        "method": {
                            "name": "gift",
                            "url": "https://pokeapi.co/api/v2/encounter-method/18/"
                        },
                        "min_level": 5
                    }
                ],
                "max_chance": 100,
                "version": {
                    "name": "red",
                    "url": "https://pokeapi.co/api/v2/version/1/"
                }
            },
            {
                "encounter_details": [
                    {
                        "chance": 100,
                        "condition_values": [],
                        "max_level": 5,
                        "method": {
                            "name": "gift",
                            "url": "https://pokeapi.co/api/v2/encounter-method/18/"
                        },
                        "min_level": 5
                    }
                ],
                "max_chance": 100,
                "version": {
                    "name": "blue",
                    "url": "https://pokeapi.co/api/v2/version/2/"
                }
            },
            {
                "encounter_details": [
                    {
                        "chance": 100,
                        "condition_values": [],
                        "max_level": 5,
                        "method": {
                            "name": "gift",
                            "url": "https://pokeapi.co/api/v2/encounter-method/18/"
                        },
                        "min_level": 5
                    }
                ],
                "max_chance": 100,
                "version": {
                    "name": "firered",
                    "url": "https://pokeapi.co/api/v2/version/10/"
                }
            },
            {
                "encounter_details": [
                    {
                        "chance": 100,
                        "condition_values": [],
                        "max_level": 5,
                        "method": {
                            "name": "gift",
                            "url": "https://pokeapi.co/api/v2/encounter-method/18/"
                        },
                        "min_level": 5
                    }
                ],
                "max_chance": 100,
                "version": {
                    "name": "leafgreen",
                    "url": "https://pokeapi.co/api/v2/version/11/"
                }
            },
            {
                "encounter_details": [
                    {
                        "chance": 100,
                        "condition_values": [
                            {
                                "name": "story-progress-beat-red",
                                "url": "https://pokeapi.co/api/v2/encounter-condition-value/55/"
                            }
                        ],
                        "max_level": 5,
                        "method": {
                            "name": "gift",
                            "url": "https://pokeapi.co/api/v2/encounter-method/18/"
                        },
                        "min_level": 5
                    }
                ],
                "max_chance": 100,
                "version": {
                    "name": "heartgold",
                    "url": "https://pokeapi.co/api/v2/version/15/"
                }
            },
            {
                "encounter_details": [
                    {
                        "chance": 100,
                        "condition_values": [
                            {
                                "name": "story-progress-beat-red",
                                "url": "https://pokeapi.co/api/v2/encounter-condition-value/55/"
                            }
                        ],
                        "max_level": 5,
                        "method": {
                            "name": "gift",
                            "url": "https://pokeapi.co/api/v2/encounter-method/18/"
                        },
                        "min_level": 5
                    }
                ],
                "max_chance": 100,
                "version": {
                    "name": "soulsilver",
                    "url": "https://pokeapi.co/api/v2/version/16/"
                }
            }
        ]
    },
    {
        "location_area": {
            "name": "lumiose-city-area",
            "url": "https://pokeapi.co/api/v2/location-area/779/"
        },
        "version_details": [
            {
                "encounter_details": [
                    {
                        "chance": 100,
                        "condition_values": [],
                        "max_level": 10,
                        "method": {
                            "name": "gift",
                            "url": "https://pokeapi.co/api/v2/encounter-method/18/"
                        },
                        "min_level": 10
                    }
                ],
                "max_chance": 100,
                "version": {
                    "name": "x",
                    "url": "https://pokeapi.co/api/v2/version/23/"
                }
            },
            {
                "encounter_details": [
                    {
                        "chance": 100,
                        "condition_values": [],
                        "max_level": 10,
                        "method": {
                            "name": "gift",
                            "url": "https://pokeapi.co/api/v2/encounter-method/18/"
                        },
                        "min_level": 10
                    }
                ],
                "max_chance": 100,
                "version": {
                    "name": "y",
                    "url": "https://pokeapi.co/api/v2/version/24/"
                }
            }
        ]
    }
];