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
    "question": "Est-ce qu'un trajet de 500 km en voiture pollue plus que 50 repas végétariens ?",
    "reponse": true,
    "theme": ["alimentation"],
    "explication": "500 km de trajet en voiture polluent autant que 214 repas végétariens",
    "source": "https://impactco2.fr/transport/voiturethermique"
  },
  {
    "question": "Un trajet de 2500 km en TGV pollue plus que télécharger 1 To de données ?",
    "reponse": false,
    "theme": ["informatique"],
    "explication": "Un trajet de 4 237 km en TGV correspond à 1 To de données",
    "source": "https://impactco2.fr/usagenumerique/telechargement"
  },
  {
    "question": "Est-ce qu'un litre d'eau en bouteille pollue plus qu'un litre d'eau du robinet ?",
    "reponse": true,
    "theme": ["alimentation"],
    "explication": "Un litre d'eau en bouteilles émet autant de CO2 que 2023 litres d'eau du robinet",
    "source": "https://impactco2.fr/boisson/eauenbouteille"
  },
  {
    "question": "Un repas avec du bœuf pollue-t-il plus que 3 repas avec du poulet ?",
    "reponse": true,
    "theme": ["alimentation"],
    "explication": "Il pollue comme 4 repas avec du poulet",
    "source": "https://impactco2.fr/repas/repasavecduboeuf"
  },
  {
    "question": "Un kilo de topinambour pollue-t-il plus que 50 km en TGV ?",
    "reponse": true,
    "theme": ["alimentation"],
    "explication": "Un kilo de topinambour pollue l'équivalent de 214 km en TGV",
    "source": "https://impactco2.fr/fruitsetlegumes/topinambour"
  },
  {
    "question": "En 2015 la pollution a-t-elle fait 5 millions de morts dans le monde ?",
    "reponse": false,
    "theme": ["décès"],
    "explication": "En 2015, la pollution aurait fait 9 millions de morts",
    "source": "https://www.francetvinfo.fr/sante/environnement-et-sante/pollution-de-l-air-eau-potable-gestion-des-dechets-six-chiffres-alarmants-a-retenir-du-rapport-de-l-onu-sur-l-environnement_3231523.html"
  },
  {
    "question": "50 entreprises émettent-elles réunies 1/3 du CO2 dans le monde ?",
    "reponse": false,
    "theme": ["pollution"],
    "explication": "Seulement 20 entreprises émettent 1/3 du CO2 dans le monde",
    "source": "https://www.capital.fr/entreprises-marches/ces-20-entreprises-emettraient-un-tiers-du-dioxyde-de-carbone-dans-le-monde-1352415"
  },
  {
    "question": "Les particuliers polluent-ils plus que les entreprises ?",
    "reponse": false,
    "theme": ["pollution"],
    "explication": "Les entreprises représentent 68% des émissions de CO2 en France",
    "source": "https://www.lesechos.fr/industrie-services/energie-environnement/emissions-de-co2-ou-en-est-la-france-secteur-par-secteur-2038411#:~:text=Ils%20représentent%2032%20%%20des%20émissions,4%2C7%20Mt%20de%20CO2e."
  },
  {
    "question": "Le climat a-t-il toujours varié au cours de l'histoire de la Terre ?",
    "reponse": true,
    "theme": ["histoire"],
    "explication": "Il est reconnu que le climat a connu des variations naturelles au cours de l'histoire de la Terre. Cependant, les récentes variations de climat de la planète sont causées par l'homme",
    "source": "https://www.cea.fr/comprendre/Pages/climat-environnement/questions-reponses-sur-le-climat.aspx"
  },
  {
    "question": "Plus de la moitié des émissions de CO2 des particuliers sont-elles dues au transport ?",
    "reponse": true,
    "theme": ["pollution"],
    "explication": "Les transports sont la cause de 52% du CO2 émis par les particuliers",
    "source": "https://www.lesechos.fr/industrie-services/energie-environnement/emissions-de-co2-ou-en-est-la-france-secteur-par-secteur-2038411#:~:text=Ils%20représentent%2032%20%%20des%20émissions,4%2C7%20Mt%20de%20CO2e."
  },
  {
    "question": "Un Français émet-il plus de CO2 qu'une personne moyenne dans le monde ?",
    "reponse": true,
    "theme": ["pollution"],
    "explication": "Les Français produisent 9 tonnes de CO2 par an alors que la moyenne est à 4 tonnes de CO2.",
    "source": ""
  },
  {
    "question": "Le GIEC produit-il de nouvelles recherches sur le climat ?",
    "reponse": false,
    "theme": ["organisme"],
    "explication": "Le GIEC (Groupe Intergouvernemental d'Experts sur le Climat) n'est pas responsable de la production de nouvelles recherches. Il évalue plutôt les recherches existantes pour fournir une vision scientifique complète",
    "source": "https://reseauactionclimat.org/reponses-climatosceptiques/"
  },
  {
    "question": "La hausse future des températures en France est-elle directement proportionnelle aux émissions de gaz à effet de serre ?",
    "reponse": true,
    "theme": ["pollution"],
    "explication": "Les modèles climatiques indiquent que la hausse future des températures est directement liée aux émissions de gaz à effet de serre",
    "source": "https://lejournal.cnrs.fr/articles/le-rechauffement-climatique-en-france-sannonce-pire-que-prevu"
  },
  {
    "question": "Le changement climatique affecte-t-il de manière égale toutes les régions de France ?",
    "reponse": false,
    "theme": ["climat"],
    "explication": "L'impact du changement climatique varie selon les régions",
    "source": "https://www.campusfrance.org/en/France-weather-climate"
  },
  {
    "question": "Est-ce que 100 km à vélo pollue plus que 1000 mails en pièce jointe ?",
    "reponse": false,
    "theme": ["informatique"],
    "explication": "Pédale autant que tu veux. Notre planète ne craint rien.",
    "source": ""
  },
  {
    "question": "100 km en voiture polluent-ils plus que de produire un smartphone ?",
    "reponse": true,
    "theme": ["informatique"],
    "explication": "Nous pouvons parcourir 134 km en voiture avec la pollution d'un smartphone",
    "source": ""
  },
  {
    "question": "La France est-elle responsable d'une grande partie des émissions mondiales de CO2 ?",
    "reponse": false,
    "theme": ["pollution"],
    "explication": "La France représente environ 1% des émissions mondiales de CO2. Cependant, elle est 21e sur 195 en termes d'émissions",
    "source": "https://www.francetvinfo.fr/meteo/climat/vrai-ou-fake-la-france-represente-1-des-emissions-de-co2-on-vous-explique-les-limites-de-l-argument-d-eric-zemmour-sur-le-dereglement-climatique_4952091.html"
  },
  {
    "question": "Les actions pour (ou contre) le climat ont-elles un effet immédiat ?",
    "reponse": false,
    "theme": ["climat"],
    "explication": "Les impacts de ce type d'action prennent effet des années plus tard en raison d'un phénomène appelé l'inertie climatique",
    "source": "https://jancovici.com/changement-climatique/predire-lavenir/cesser-rapidement-demettre-des-gaz-a-effet-de-serre-suffirait-il-a-tout-arreter/"
  },
  {
    "question": "Est-ce que 2000 kg de CO2 correspondent à 180 repas avec du bœuf ?",
    "reponse": false,
    "theme": ["alimentation"],
    "explication": "2000 kg de CO2 représentent 275 repas avec du bœuf",
    "source": ""
  },
  {
    "question": "L'énergie nucléaire est-elle une énergie renouvelable ?",
    "reponse": false,
    "theme": ["énergie"],
    "explication": "L'énergie nucléaire, bien qu'elle soit une source d'énergie à faible émission de carbone, n'est pas considérée comme renouvelable",
    "source": ""
  },
  {
    "question": "Peut-on parcourir 10 fois la distance d'un avion en TGV avec le même taux de rejet de CO2 ?",
    "reponse": true,
    "theme": ["pollution"],
    "explication": "1 km en avion correspond à 2 km en bus à moteur thermique, qui correspond à 97 km en TGV",
    "source": "https://impactco2.fr/transport/avion"
  },
  {
    "question": "La température moyenne en France métropolitaine était de 14,5°C en 2022",
    "reponse": true,
    "theme": ["climat"],
    "explication": "2022 est l'année la plus chaude jamais enregistrée sur le territoire métropolitain depuis le début des relevés en 1900",
    "source": "https://www.ecologie.gouv.fr/impacts-du-changement-climatique-atmosphere-temperatures-et-precipitations#:~:text=2%2C7%20%C2%B0C%20Avec,montre%20un%20r%C3%A9chauffement%20depuis%201900."
  },
  {
    "question": "Le bilan carbone d'un repas avec du poulet est-il équivalent à 3 repas végétariens ?",
    "reponse": true,
    "theme": ["alimentation"],
    "explication": "Les repas végétariens sont moins coûteux en carbone que les repas composés de viande",
    "source": "https://impactco2.fr/repas/repasavecdupoulet"
  },
  {
    "question": "Les diminutions de rendements agricoles en France sont une conséquence directe du changement climatique.",
    "reponse": true,
    "theme": ["alimentation"],
    "explication": "Les diminutions de rendements agricoles en France sont une conséquence directe du changement climatique.",
    "source": "https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/"
  },
  {
    "question": "Le cycle de vie d'une paire de chaussures pollue-t-il plus que celui d'un jean ?",
    "reponse": true,
    "theme": ["vêtement"],
    "explication": "Une paire de chaussures produit 15 kgCO2, tandis qu'un jean en produit 25 kg de CO2.",
    "source": "https://impactco2.fr/habillement"
  },
  {
    "question": "Le nucléaire est la source d'énergie la moins émissive de CO2.",
    "reponse": true,
    "theme": ["énergie"],
    "explication": "C'est l'éolien qui émet le moins de CO2 par kWh, 11g, contre 12g pour le nucléaire.",
    "source": "https://youmatter.world/fr/co2-kwh-electricite-france-mix-electrique/#:~:text=Voici%2C%20d%27apr%C3%A8s%20les%20donn%C3%A9es,g%20de%20CO2%20par%20kWh"
  },
  {
    "question": "Le changement climatique est un phénomène naturel qui existe depuis des millions d'années.",
    "reponse": true,
    "theme": ["climat"],
    "explication": "Les changements climatiques naturels se produisent sur des échelles de temps beaucoup plus longues que les changements observés au cours des dernières décennies.",
    "source": "https://www.ipcc.ch/report/ar6/wg1/"
  },
  {
    "question": "Les émissions de gaz à effet de serre sont la principale cause du changement climatique.",
    "reponse": true,
    "theme": ["climat"],
    "explication": "Les activités humaines, telles que la combustion des combustibles fossiles, la déforestation et l'agriculture, sont responsables de la majorité des émissions de gaz à effet de serre.",
    "source": "https://www.ipcc.ch/report/ar6/wg1/"
  },
  {
    "question": "Le changement climatique est un problème qui ne concerne que les pays développés.",
    "reponse": false,
    "theme": ["climat"],
    "explication": "Les pays en développement sont les plus vulnérables aux effets du changement climatique. Ils sont souvent moins bien équipés pour faire face aux événements météorologiques extrêmes, et ils dépendent davantage des ressources naturelles qui sont menacées par le changement climatique.",
    "source": "https://www.ipcc.ch/report/ar6/wg1/"
  },
  {
    "question": "Les pays ont une responsabilité climatique proportionnelle à leur niveau de richesse.",
    "reponse": true,
    "theme": ["climat"],
    "explication": "Plus un pays est riche, plus son impact climatique est élevé en moyenne.",
    "source": ""
  },
  {
    "question": "Peut-on faire 8 smartphones avec le bilan carbone d'un PC portable ?",
    "reponse": true,
    "theme": ["informatique"],
    "explication": "On peut faire 5 smartphones de 5,5 pouces avec 1 PC portable.",
    "source": "https://impactco2.fr/numerique/imprimantejetdencre"
  },
  {
    "question": "Il est encore possible de limiter le réchauffement climatique à 1,5°C.",
    "reponse": true,
    "theme": ["climat"],
    "explication": "Il est encore possible de limiter le réchauffement climatique à 1,5°C, mais cela nécessitera des efforts importants de réduction des émissions de gaz à effet de serre. Le GIEC a conclu que \"les émissions de gaz à effet de serre doivent atteindre un pic d'ici 2025 et être réduites de 45 % par rapport aux niveaux de 2010 d'ici 2030 pour limiter le réchauffement à 1,5°C\".",
    "source": "https://www.ipcc.ch/report/ar6/wg1/"
  },
  {
    "question": "Un repas comportant du boeuf a-t-il un bilan carbone inférieur à 5 kg de CO2 ?",
    "reponse": true,
    "theme": ["alimentation"],
    "explication": "Un repas avec du boeuf produit environ 7 kg de CO2.",
    "source": "https://impactco2.fr/repas/repasavecduboeuf"
  },
  {
    "question": "Une écologie basée sur la contrainte morale et le contrôle permanent est-elle vouée à l'échec?",
    "reponse": true,
    "theme": ["climat"],
    "explication": "Le sentiment de culpabilité ne fonctionne jamais longtemps. Il peut provoquer des conduites temporairement adéquates lorsque les individus sont sous surveillance (des parents, de la société, de la religion...), mais a tendance à s'éroder dans le temps. On ne peut pas mettre une «police écologique» derrière chaque individu. Dès lors, toute écologie basée sur la contrainte morale et le contrôle permanent est vouée à l'échec. De même que la proclamation militante d'une pureté verte peut devenir contre-productive si elle éloigne les foules de l'objectif par un effet repoussoir.",
    "source": "https://www.heidi.news/climat/l-ecologie-de-la-culpabilite-est-une-impasse",
    "code": ""
  },
  {
    "question": "L'impact environnemental est principalement lié à des choix individuels, pas collectifs.",
    "reponse": false,
    "theme": ["climat"],
    "explication": "L'écologie culpabilisante tend à faire porter à chaque individu des responsabilités globales qui, le plus souvent, lui échappent. En effet, la plus grande part de l'impact environnemental d'une société n'est pas liée à des choix individuels, mais à des choix collectifs. Ainsi, chaque collectivité aura une certaine 'intensité carbone' en fonction de son économie, de son organisation territoriale, de son industrie, etc., autant de domaines d'activités sur lesquels il est difficile d'avoir prise personnellement.",
    "source": "https://www.heidi.news/climat/l-ecologie-de-la-culpabilite-est-une-impasse",
    "code": ""
  },
  {
    "question": "Le CO2 représente-t-il une part importante de l'atmosphère?",
    "reponse": false,
    "theme": ["climat"],
    "explication": "Le CO2 ne représente qu'une portion infime de l'atmosphère (0,04 %).",
    "source": "https://reseauactionclimat.org/comprendre-urgence/",
    "code": ""
  },
  {
    "question": "Acheter une voiture électrique est une solution sans faille?",
    "reponse": false,
    "theme": ["climat"],
    "explication": "L'électrification est loin d'être une solution parfaite et magique. Elle ne suffira pas à résoudre le défi climatique posé aux transports ou plus globalement les problèmes liés à la voiture. D'ailleurs, de nombreuses critiques qui sont adressées à la voiture électrique (elle consomme trop de ressources, est trop polluante, trop chère, nous rend dépendants à d'autres pays…) sont aussi valables pour la voiture thermique.",
    "source": "https://bonpote.com/la-voiture-electrique-solution-ideale-pour-le-climat/#Conclusion_que_retenir_de_tout_cela",
    "code": ""
  },
  {
    "question": "Si les comportements plus écologiques ne sont pas accessibles à tous et à toutes, la transition est vouée à l'échec." ,
    "reponse": true,
    "theme": ["climat"],
    "explication": "Dans un contexte de crises à répétition et d'une inflation galopante, acheter des aliments biologiques, une voiture moins polluante, consommer local et responsable n'est pas accessible à toutes les bourses. L'Etat a ainsi son rôle à jouer pour permettre à l'ensemble des citoyens d'accéder aux solutions de transition écologique.  Rénover son logement, s'équiper d'une voiture électrique, consommer moins mais mieux dans le domaine alimentaire, rendre le train plus accessible budgétairement, etc. autant de leviers sur lesquels l'Etat peut et doit agir.",
    "source": "https://bonpote.com/la-voiture-electrique-solution-ideale-pour-le-climat/#Conclusion_que_retenir_de_tout_cela",
    "code": ""
  }
  ]