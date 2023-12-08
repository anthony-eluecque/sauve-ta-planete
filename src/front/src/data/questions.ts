export interface Question {
    question : string,
    reponse : boolean,
    theme : Theme[],
    explication : string
    source : string
    code?:string
}

export type Theme = 
    "alimentation" | 
    "informatique" | 
    "décès" | 
    "pollution" | 
    "histoire" | 
    "organisme" | 
    "climat" | 
    "énergie" | 
    "vêtement" 

export const questions : Question[] = [
    {
      "question": "Est-ce qu'un trajet de 500km en voiture pollue plus que 50 repas végétarien ?",
      "reponse": true,
      "theme": ["alimentation"],
      "explication": "500km de trajet en voiture pollue autant que 214 repas végétarien",
      "source": "https://impactco2.fr/transport/voiturethermique",
      "code": "<script id=\"impact-co2\" src=\"https://impactco2.fr/iframe.js\" data-type=\"transport/voiturethermique\" data-search=\"?theme=default\"></script>"
    },
    {
      "question": "un trajet de 2500km en TGV pollue plus que télécharger 1To de données ?",
      "reponse": false,
      "theme": ["informatique"],
      "explication": "Un trajet de 4 237Km en TGV correspond à 1To de données",
      "source": "https://impactco2.fr/usagenumerique/telechargement",
      "code": "<script id=\"impact-co2\" src=\"https://impactco2.fr/iframe.js\" data-type=\"usagenumerique/telechargement\" data-search=\"?theme=default\"></script>"
    },
    {
      "question": "Est-ce qu'un litre d'eau en bouteille pollue plus qu'un litre d'eau du robinet",
      "reponse": true,
      "theme": ["alimentation"],
      "explication": "un litre d'eau en bouteilles emmet autant de co2 que 2023 littre d'eau du robinet",
      "source": "https://impactco2.fr/boisson/eauenbouteille",
      "code": "<script id=\"impact-co2\" src=\"https://impactco2.fr/iframe.js\" data-type=\"boisson/eauenbouteille\" data-search=\"?theme=default\"></script>"
    },
    {
      "question": "Un repas avec du Boeuf Pollue t-il plus que 3 repas avec du poulet ?",
      "reponse": true,
      "theme": ["alimentation"],
      "explication": "Il pollue comme 4 repas avec du poulet",
      "source": "https://impactco2.fr/repas/repasavecduboeuf",
      "code": "<script id=\"impact-co2\" src=\"https://impactco2.fr/iframe.js\" data-type=\"repas/repasavecduboeuf\" data-search=\"?theme=default\"></script>"
    },
    {
      "question": "Un Kg de topinambour pollue t-il plus que 50Km en TGV ?",
      "reponse": true,
      "theme": ["alimentation"],
      "explication": "Un Kilo de topinambour pollue l'équivalent de 214Km en TGV",
      "source": "https://impactco2.fr/fruitsetlegumes/topinambour",
      "code": "<script id=\"impact-co2\" src=\"https://impactco2.fr/iframe.js\" data-type=\"fruitsetlegumes/topinambour\" data-search=\"?theme=default\"></script>"
    },
    {
      "question": "En 2015 la pollution à fait 5 million de mort dans le monde ?",
      "reponse": false,
      "theme": ["décès"],
      "explication": "En 2015, la pollution aurait fait 9 milions de morts",
      "source": "https://www.francetvinfo.fr/sante/environnement-et-sante/pollution-de-l-air-eau-potable-gestion-des-dechets-six-chiffres-alarmants-a-retenir-du-rapport-de-l-onu-sur-l-environnement_3231523.html",
      "code": ""
    },
    {
      "question": "50 entreprises émettent réunient 1/3 du CO2 dans le monde ?",
      "reponse": false,
      "theme": ["pollution"],
      "explication": "Seulement 20 entreprises émettent 1/3 du CO2 dans le monde",
      "source": "https://www.capital.fr/entreprises-marches/ces-20-entreprises-emettraient-un-tiers-du-dioxyde-de-carbone-dans-le-monde-1352415",
      "code": ""
    },
    {
      "question": "Les particuleiers polluent plus que les entreprises ?",
      "reponse": false,
      "theme": ["pollution"],
      "explication": "Les entreprises représentent 68% de CO2 émis en France",
      "source": "https://www.lesechos.fr/industrie-services/energie-environnement/emissions-de-co2-ou-en-est-la-france-secteur-par-secteur-2038411#:~:text=Ils%20représentent%2032%20%%20des%20émissions,4%2C7%20Mt%20de%20CO2e.",
      "code": ""
    },
    {
      "question": "Le climat a-t-il toujours varié au cours de l'histoire de la Terre ?",
      "reponse": true,
      "theme": ["histoire"],
      "explication": "Il est reconnu que le climat a connu des variations naturelles au cours de l'histoire de la Terre, cependant les récentes variations de climat de la planète sont causé par l'homme",
      "source": "https://www.cea.fr/comprendre/Pages/climat-environnement/questions-reponses-sur-le-climat.aspx",
      "code": ""
    },
    {
      "question": "Plus de la moitié des émissions de CO2 des particuliers sont dû au transport ?",
      "reponse": true,
      "theme": ["pollution"],
      "explication": "Les transports sont la cause de 52% du CO2 émit par les particuliers",
      "source": "https://www.lesechos.fr/industrie-services/energie-environnement/emissions-de-co2-ou-en-est-la-france-secteur-par-secteur-2038411#:~:text=Ils%20représentent%2032%20%%20des%20émissions,4%2C7%20Mt%20de%20CO2e.",
      "code": ""
    },
    {
      "question": "Un français émait plus de CO2 qu'une personne moyenne dans le monde ?",
      "reponse": true,
      "theme": ["pollution"],
      "explication": "Les français produisent 9 Tonnes de CO2 par an alors que la moyenne est a 4 Tonnes de CO2.",
      "source": "",
      "code": ""
    },
    {
      "question": "Le GIEC produit de nouvelles recherches sur le climat.",
      "reponse": false,
      "theme": ["organisme"],
      "explication": "Le GIEC (Groupe Intergouvernemental d'Experts sur le Climat) ne produit pas de nouvelles recherches mais évalue les recherches existantes pour fournir une vision scientifique complète",
      "source": "https://reseauactionclimat.org/reponses-climatosceptiques/",
      "code": ""
    },
    {
      "question": "La hausse future des températures en France est directement proportionnelle aux émissions de gaz à effet de serre.",
      "reponse": true,
      "theme": ["pollution"],
      "explication": "Les modèles climatiques indiquent que la hausse future des températures est directement liée aux émissions de gaz à effet de serre",
      "source": "https://lejournal.cnrs.fr/articles/le-rechauffement-climatique-en-france-sannonce-pire-que-prevu",
      "code": ""
    },
    {
      "question": "Le changement climatique affecte de manière égale toutes les régions de France.",
      "reponse": false,
      "theme": ["climat"],
      "explication": "l'impact du changement climatique varie selon les régions.",
      "source": "https://www.campusfrance.org/en/France-weather-climate",
      "code": ""
    },
    {
      "question": "Est-ce que 100km à vélo pollue plus que 1000 mails en pièce jointe.",
      "reponse": false,
      "theme": ["informatique"],
      "explication": "Pédale autant que tu le veux. Notre planète ne crais rien.",
      "source": "",
      "code": ""
    },
    {
      "question": "100km en voiture pollue t-il plus que de produire un smartphone",
      "reponse": true,
      "theme": ["informatique"],
      "explication": "Nous pouvons parcourir 134km  en voiture avec la pollution d'un smartphone",
      "source": "",
      "code": ""
    },
    {
      "question": "La France est responsable d'une grande partie des émissions mondiales de CO2.",
      "reponse": false,
      "theme": ["pollution"],
      "explication": "La France représente environ 1% des émissions mondiales de CO2, nous somme cependant 21eme sur 195",
      "source": "https://www.francetvinfo.fr/meteo/climat/vrai-ou-fake-la-france-represente-1-des-emissions-de-co2-on-vous-explique-les-limites-de-l-argument-d-eric-zemmour-sur-le-dereglement-climatique_4952091.html",
      "code": ""
    },
    {
      "question": "les actions pour (ou contre)le climat on un effet immédiat",
      "reponse": false,
      "theme": ["climat"],
      "explication": "les impacts de ce type d'action prenne effet des annees plus tard dut à un phénomène appelée l'inertie climatique",
      "source": "https://jancovici.com/changement-climatique/predire-lavenir/cesser-rapidement-demettre-des-gaz-a-effet-de-serre-suffirait-il-a-tout-arreter/",
      "code": ""
    },
    {
      "question": "Est-ce que 2000 kg de CO2 correspond à 180 repas avec du boeuf ?",
      "reponse": false,
      "theme": ["alimentation"],
      "explication": "2000 kg de CO2 représente 275 repas avec du boeuf",
      "source": "",
      "code": ""
    },
    {
      "question": "L'énergie nucléaire est une énergie renouvelable.",
      "reponse": false,
      "theme": ["énergie"],
      "explication": "L'énergie nucléaire, bien qu'elle soit une source d'énergie à faible émission de carbone, n'est pas considérée comme renouvelable, cependant",
      "source": "https://www.lemonde.fr/quiz-de-culture-generale/article/2023/12/02/quiz-climat-etes-vous-chaud-pour-demeler-le-vrai-du-faux_6203523_6083483.html",
      "code": ""
    },
    {
      "question": "Peut-on parcourir 10 fois la distance d'un avion en TGV avec le même taux de rejet de CO2",
      "reponse": true,
      "theme": ["pollution"],
      "explication": "1km en avion correspond à 2km en bus moteur thermique qui correspond à 97 km en TGV",
      "source": "https://impactco2.fr/transport/avion",
      "code": "<script id=\"impact-co2\" src=\"https://impactco2.fr/iframe.js\" data-type=\"transport/avion\" data-search=\"?theme=default\"></script>"
    },
    {
      "question": "La température moyenne en france métropolitaine était de 14.5°C en 2022",
      "reponse": true,
      "theme": ["climat"],
      "explication": "2022 est l’année la plus chaude jamais enregistrée sur le territoire métropolitain depuis le début des relevés en 1900.",
      "source": "https://www.ecologie.gouv.fr/impacts-du-changement-climatique-atmosphere-temperatures-et-precipitations#:~:text=2%2C7%20%C2%B0C%20Avec,montre%20un%20r%C3%A9chauffement%20depuis%201900.",
      "code": ""
    },
    {
      "question": "Le bilan carbone d'un repas avec du poulet est-il équivalent à 3 repas végétarien.",
      "reponse": true,
      "theme": ["alimentation"],
      "explication": "Les repas végétarien sont moins coûteux en carbone que les repas composé de viandes",
      "source": "https://impactco2.fr/repas/repasavecdupoulet",
      "code": "<script id=\"impact-co2\" src=\"https://impactco2.fr/iframe.js\" data-type=\"repas/repasavecdupoulet\" data-search=\"?theme=default\"></script>"
    },
    {
      "question": "Les diminutions de rendements agricoles en France sont une conséquence directe du changement climatique.",
      "reponse": true,
      "theme": ["alimentation"],
      "explication": "Les diminutions de rendements agricoles en France sont une conséquence directe du changement climatique.",
      "source": "https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/",
      "code": ""
    },
    {
      "question": "Le cycle de vie d'une paire de chaussure pollue plus que celui d'un jeans ?",
      "reponse": true,
      "theme": ["vêtement"],
      "explication": "une paire de chaussure produit 15 kgCO2 alors qu'un jeans constitue 25kg de CO2",
      "source": "https://impactco2.fr/habillement",
      "code": "<script id=\"impact-co2\" src=\"https://impactco2.fr/iframe.js\" data-type=\"habillement\" data-search=\"?theme=default\"></script>"
    },
    {
      "question": "le nucleaire est la source d'energie la moins emetrice de co2",
      "reponse": true,
      "theme": ["énergie"],
      "explication": "c'est l'éolien qui émet le moins de co2 par kWh, 11g, contre 12 pour le nucléaire",
      "source": "https://youmatter.world/fr/co2-kwh-electricite-france-mix-electrique/#:~:text=Voici%2C%20d%27après%20les%20données,g%20de%20CO2%20par%20kWh",
      "code": ""
    },
    {
      "question": "le changement climatique est un phénomène naturel qui existe depuis des millions d'années.",
      "reponse": true,
      "theme": ["climat"],
      "explication": "Les changements climatiques naturels se produisent sur des échelles de temps beaucoup plus longues que les changements observés au cours des dernières décennies",
      "source": "https://www.ipcc.ch/report/ar6/wg1/",
      "code": ""
    },
    {
      "question": "les émissions de gaz à effet de serre sont la principale cause du changement climatique.",
      "reponse": true,
      "theme": ["climat"],
      "explication": "Les activités humaines, telles que la combustion des combustibles fossiles, la déforestation et l'agriculture, sont responsables de la majorité des émissions de gaz à effet de serre.",
      "source": "https://www.ipcc.ch/report/ar6/wg1/",
      "code": ""
    },
    {
      "question": "le changement climatique est un problème qui ne concerne que les pays développés.",
      "reponse": false,
      "theme": ["climat"],
      "explication": "Les pays en développement sont les plus vulnérables aux effets du changement climatique. Ils sont souvent moins bien équipés pour faire face aux événements météorologiques extrêmes, et ils dépendent davantage des ressources naturelles qui sont menacées par le changement climatique.",
      "source": "https://www.ipcc.ch/report/ar6/wg1/",
      "code": ""
    },
    {
      "question": "les Pays ont une responsabilité climatique proportionnelles à leur niveau de richesse",
      "reponse": true,
      "theme": ["climat"],
      "explication": "Plus un pays est riche, plus sont impact climatique est elevé en moyenne",
      "source": "",
      "code": ""
    },
    {
      "question": "Peut-on faire 8 smartphones avec le bilan carbone d'un PC portable ?",
      "reponse": true,
      "theme": ["informatique"],
      "explication": "On  peut faire 5 smartphone de 5,5 pouces avec 1 PC portable",
      "source": "https://impactco2.fr/numerique/imprimantejetdencre",
      "code": "<script id=\"impact-co2\" src=\"https://impactco2.fr/iframe.js\" data-type=\"numerique/imprimantejetdencre\" data-search=\"?theme=default\"></script>"
    },
    {
      "question": "il est encore possible de limiter le réchauffement climatique à 1,5°C.",
      "reponse": true,
      "theme": ["climat"],
      "explication": "Il est encore possible de limiter le réchauffement climatique à 1,5°C, mais cela nécessitera des efforts importants de réduction des émissions de gaz à effet de serre. Le GIEC a conclu que \"les émissions de gaz à effet de serre doivent atteindre un pic d'ici 2025 et être réduites de 45 % par rapport aux niveaux de 2010 d'ici 2030 pour limiter le réchauffement à 1,5°C\".",
      "source": "https://www.ipcc.ch/report/ar6/wg1/",
      "code": ""
    },
    {
      "question": "Un repas comportant du boeuf a-t-il  un bilan carbone inférieur à 5kg de CO2 ?",
      "reponse": true,
      "theme": ["alimentation"],
      "explication": "Un repas avec du boeuf  produit environ 7KG de CO2",
      "source": "https://impactco2.fr/repas/repasavecduboeuf",
      "code": "<script id=\"impact-co2\" src=\"https://impactco2.fr/iframe.js\" data-type=\"repas/repasavecduboeuf\" data-search=\"?theme=default\"></script>"
    }
  ]